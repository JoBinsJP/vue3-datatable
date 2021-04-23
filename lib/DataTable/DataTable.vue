<template>
    <div class="data-table flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                <div v-if="filter" class="filter-wrapper mb-2.5 w-full">
                    <div class="w-64">
                        <label for="email" class="sr-only">Search</label>
                        <div class="relative rounded-md shadow-sm">
                            <input :value="tableQuery.search"
                                   type="search"
                                   name="search"
                                   class="focus:ring-0 block w-full pr-10 sm:text-sm border-gray-300 rounded-md"
                                   @input="handleOnSearchChange">

                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd"
                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="table-wrapper shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <div v-if="showPagination" class="pagination-wrapper flex bg-white items-center">
                        <pagination class="flex-1"
                                    :total="totalData"
                                    :current-page="tableQuery.page"
                                    :per-page="parseInt(tableQuery.per_page.toString())"
                                    @changed="handlePageChange"/>

                        <div class="pr-4">
                            <label for="location" class="sr-only">Per page</label>
                            <select :value="tableQuery.per_page"
                                    name="per_page"
                                    class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 sm:text-sm rounded-md"
                                    @input="handleOnChange">
                                <option v-for="size in perPageOptions"
                                        :key="`per_page_${size}`"
                                        :value="size"
                                        :selected="size === tableQuery.per_page"
                                        v-text="size"/>
                            </select>
                        </div>
                    </div>

                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <slot v-if="sn" name="thead-sn">
                                    <table-head v-text="`S.N.`"/>
                                </slot>

                                <slot name="thead" :column="tableColumns">
                                    <table-head v-for="(label, key) in tableColumns"
                                                :key="`datatable-thead-th-${key}`"
                                                v-text="label"/>
                                </slot>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="(row, rowIndex) in tableRows"
                                :key="`datatable-tbody-${uniqueId()}-${rowIndex}`"
                                :class="striped && rowIndex % 2 ? 'bg-gray-50' : 'bg-white'">
                                <slot v-if="sn" name="tbody-sn" :sn="rowIndex + 1">
                                    <table-body v-text="rowIndex + 1 + paginatedRowIndex"/>
                                </slot>

                                <slot name="tbody" :index="rowIndex" :row="row">
                                    <table-body v-for="(label, key) in tableColumns"
                                                :key="`datatable-tbody-td-${uniqueId()}-${key}`"
                                                :name="label"
                                                v-text="row[key]"/>
                                </slot>
                            </tr>
                        </tbody>
                    </table>

                    <div v-if="showPagination" class="pagination-wrapper">
                        <pagination :total="totalData"
                                    :current-page="tableQuery.page"
                                    :per-page="parseInt(tableQuery.per_page.toString())"
                                    @changed="handlePageChange"/>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {
        computed,
        defineComponent,
        PropType,
        ref,
        SetupContext,
        watch,
    }                          from "vue"
    import { PaginationProps } from "./@types/PaginationProps"
    import { QueryProps }      from "./@types/QueryProps"
    import { TableQuery }      from "./@types/TableQuery"
    import Pagination          from "./Components/Pagination.vue"
    import TableBody           from "./Components/TableBody.vue"
    import TableHead           from "./Components/TableHead.vue"
    import { debounce }        from "./utils/helpers"

    const PER_PAGE = 10

    const PER_PAGE_OPTIONS = [5, 10, 15, 25, 50, 75, 100]

    const DataTable = defineComponent({
        components: { Pagination, TableBody, TableHead },

        props: {
            rows: { type: Array, required: true },
            columns: { type: Object, required: false, default: null },
            pagination: { type: Object as PropType<PaginationProps>, required: false, default: null },
            striped: { type: Boolean, required: false, default: false },
            sn: { type: Boolean, required: false, default: false },
            filter: { type: Boolean, required: false, default: false },
            perPageOptions: { type: Array as PropType<number[]>, required: false, default: () => PER_PAGE_OPTIONS },
            query: { type: Object as PropType<QueryProps>, required: false, default: () => ({}) },
        },

        emits: ["loadData"],

        setup<T>(props, { emit }: SetupContext) {
            const tableQuery = ref<TableQuery>({
                page: props.pagination?.page || 1,
                search: props.query.search || "",
                per_page: props.pagination?.per_page || PER_PAGE,
            })

            const showPagination = computed(() => !!props.pagination)
            const totalData = computed(() => props.pagination?.total || props.rows.length)
            const tableRows = computed<T[]>(() => props.rows)

            const tableColumns = computed(() => {
                if (props.columns) {
                    return props.columns
                }

                if (props.rows.length === 0) {
                    return {}
                }

                return Object.keys(props.rows[0]).reduce((cols, key) => ({ ...cols, [key]: key }), {})
            })

            const paginatedRowIndex = computed(() => showPagination.value ? tableQuery.value.per_page * (tableQuery.value.page - 1) : 0)

            const uniqueId = () => Math.floor(Math.random() * 100)

            const fireDataLoad = () => {
                emit("loadData", tableQuery.value)
            }

            watch(() => ({ ...tableQuery.value }), () => {
                fireDataLoad()
            }, {
                deep: true,
                immediate: true,
            })

            const handlePageChange = (page) => {
                tableQuery.value.page = page
            }

            const handleOnSearchChange = debounce((event) => {
                tableQuery.value = { ...tableQuery.value, page: 1, search: event.target.value }
            })

            const handleOnChange = (event) => {
                const { name, value } = event.target

                tableQuery.value = { ...tableQuery.value, page: 1, [name]: value }
            }

            return {
                tableQuery,
                showPagination,
                totalData,
                tableRows,
                tableColumns,
                paginatedRowIndex,
                uniqueId,
                handlePageChange,
                handleOnSearchChange,
                handleOnChange,
            }
        },
    })

    export default DataTable
</script>

<style scoped lang="scss" src="./DataTable.scss"/>
