<template>
    <div class="data-table dt-flex dt-flex-col">
        <div class="dt-align-middle dt-min-w-full">

            <div v-if="filter" class="dt__filter dt-mb-3 dt-w-full">
                <div class="dt-w-64">
                    <label for="email" class="dt-sr-only">Search</label>
                    <div class="dt-relative dt-rounded-md dt-shadow-sm">
                        <input :value="tableQuery.search"
                               type="search"
                               name="search"
                               class="dt__filter__search dt-block dt-border dt-border-gray-300 dt-pr-10 dt-px-2 dt-py-2
                                    dt-rounded-md dt-w-full dt-outline-none focus:dt-ring-1 focus:dt-ring-inset sm:dt-text-sm"
                               @input="handleOnSearchChange">

                        <div class="dt-absolute dt-inset-y-0 dt-right-0 dt-pr-3 dt-flex dt-items-center dt-pointer-events-none">
                            <search-icon class="dt-text-gray-400"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dt__table_wrapper dt-relative dt-overflow-hidden sm:dt-rounded-lg">
                <slot v-if="loading" name="loading">
                    <Loading/>
                </slot>

                <div v-if="showPagination" class="dt__pagination_wrapper--top md:dt-flex xs:dt-flex-col dt-bg-white dt-items-center dt-py-4">
                    <pagination class="dt-flex-1"
                                :total="totalData"
                                :current-page="tableQuery.page"
                                :per-page="parseInt(tableQuery.per_page.toString())"
                                @changed="handlePageChange"/>

                    <div class="dt__pagination_size_wrapper dt-pr-4 dt-w-full dt-pb-3 dt-flex dt-justify-end sm:dt-pr-6 sm:dt-pb-0 sm:dt-w-auto">
                        <div>
                            <label for="location" class="dt-sr-only">Per page</label>
                            <select :value="tableQuery.per_page"
                                    name="per_page"
                                    class="dt__pagination_size dt-block dt-w-full dt-pl-3 dt-pr-5 dt-py-2 dt-text-base dt-border dt-border-gray-300 sm:dt-text-sm dt-rounded-md dt-outline-none focus:dt-ring-1"
                                    @input="handleOnChange">
                                <option v-for="size in perPageOptions"
                                        :key="`per_page_${size}`"
                                        :value="size"
                                        :selected="size === tableQuery.per_page"
                                        v-text="size"/>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="dt__table_container dt-overflow-auto">
                    <table class="dt__table dt-min-w-full dt-divide-y dt-divide-gray-200">
                        <thead class="dt__table__thead dt-bg-gray-50">
                            <tr class="dt__table__thead_tr">
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

                        <tbody class="dt__table__tbody">
                            <tr v-for="(row, rowIndex) in tableRows"
                                :key="`datatable-tbody-${uniqueId()}-${rowIndex}`"
                                class="dt__table__tbody__tr"
                                :class="striped && rowIndex % 2 ? 'dt-bg-gray-50' : 'dt-bg-white'">
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
                </div>

                <div v-if="showPagination" class="dt__pagination_wrapper--bottom">
                    <pagination :total="totalData"
                                class="dt-py-4"
                                :current-page="tableQuery.page"
                                :per-page="parseInt(tableQuery.per_page.toString())"
                                @changed="handlePageChange"/>
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
    import SearchIcon          from "./Components/Icons/SearchIcon.vue"
    import Loading             from "./Components/Loading.vue"
    import Pagination          from "./Components/Pagination.vue"
    import TableBody           from "./Components/TableBody.vue"
    import TableHead           from "./Components/TableHead.vue"
    import { debounce }        from "./utils/helpers"

    const PER_PAGE = 10

    const PER_PAGE_OPTIONS = [5, 10, 15, 25, 50, 75, 100]

    const DataTable = defineComponent({
        components: { SearchIcon, Loading, Pagination, TableBody, TableHead },

        props: {
            rows: { type: Array, required: true },
            columns: { type: Object, required: false, default: null },
            pagination: { type: Object as PropType<PaginationProps>, required: false, default: null },
            striped: { type: Boolean, required: false, default: false },
            sn: { type: Boolean, required: false, default: false },
            filter: { type: Boolean, required: false, default: false },
            loading: { type: Boolean, required: false, default: false },
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

<style lang="scss" src="./DataTable.scss"/>
