<template>
    <div class="data-table dt-flex dt-flex-col">
        <div class="dt-align-middle dt-min-w-full">

            <Filter v-if="filter && topPagination" :search="tableQuery.search" @input="handleOnSearchChange"/>

            <div class="dt__wrapper dt-relative" :class="{'sm:dt-rounded-lg': rounded}">
                <slot v-if="loading" name="loading">
                    <Loading/>
                </slot>

                <TopPaginationWrapper v-if="showPagination" :with-pagination="topPagination">
                    <Pagination v-if="topPagination"
                                class="dt-flex-1 dt-pr-4"
                                :total="totalData"
                                :current-page="tableQuery.page"
                                :per-page="parseInt(tableQuery.per_page.toString())"
                                @changed="handlePageChange"/>

                    <Filter v-if="filter && !topPagination" :search="tableQuery.search" @input="handleOnSearchChange"/>

                    <PaginationSize :value="tableQuery.per_page" :options="perPageOptions" @input="handleOnPaginationSizeChange"/>
                </TopPaginationWrapper>

                <TableWrapper>
                    <THead>
                        <slot v-if="sn" name="thead-sn">
                            <TableHeadCell v-text="`S.N.`"/>
                        </slot>

                        <slot name="thead" :column="tableColumns">
                            <TableHeadCell v-for="(label, key) in tableColumns"
                                           :key="`datatable-thead-th-${key}`"
                                           v-text="label"/>
                        </slot>
                    </THead>

                    <TBody>
                        <TableRow v-for="(row, rowIndex) in tableRows"
                                  :key="`datatable-row-${uniqueId()}-${rowIndex}`"
                                  :hoverable="hoverable"
                                  :non-clickable="nonClickable"
                                  :row-index="rowIndex"
                                  :striped="striped"
                                  @clicked="rowClickHandler(row)">
                            <slot v-if="sn" name="tbody-sn" :sn="rowIndex + 1">
                                <TableBodyCell v-text="rowIndex + 1 + paginatedRowIndex"/>
                            </slot>

                            <slot name="tbody" :index="rowIndex" :row="row">
                                <TableBodyCell v-for="(label, key) in tableColumns"
                                               :key="`datatable-tbody-td-${uniqueId()}-${key}`"
                                               :name="label"
                                               v-text="row[key]"/>
                            </slot>
                        </TableRow>

                        <TableRow v-if="tableRows.length === 0" :row-index="0">
                            <slot name="empty"/>
                        </TableRow>
                    </TBody>
                </TableWrapper>

                <BottomPaginationWrapper v-if="showPagination && bottomPagination">
                    <pagination :total="totalData"
                                :current-page="tableQuery.page"
                                :per-page="parseInt(tableQuery.per_page.toString())"
                                @changed="handlePageChange"/>
                </BottomPaginationWrapper>
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
    }                              from "vue"
    import { PaginationProps }     from "./@types/PaginationProps"
    import { QueryProps }          from "./@types/QueryProps"
    import { TableQuery }          from "./@types/TableQuery"
    import Filter                  from "./Components/Filter/Filter.vue"
    import Loading                 from "./Components/Loading.vue"
    import BottomPaginationWrapper from "./Components/Pagination/BottomPaginationWrapper.vue"
    import Pagination              from "./Components/Pagination/Pagination.vue"
    import PaginationSize          from "./Components/Pagination/PaginationSize.vue"
    import TopPaginationWrapper    from "./Components/Pagination/TopPaginationWrapper.vue"
    import TableBodyCell           from "./Components/Table/TableBodyCell.vue"
    import TableHeadCell           from "./Components/Table/TableHeadCell.vue"
    import TableRow                from "./Components/Table/TableRow.vue"
    import TableWrapper            from "./Components/Table/TableWrapper.vue"
    import TBody                   from "./Components/Table/TBody.vue"
    import THead                   from "./Components/Table/THead.vue"
    import {
        debounce,
        formatString,
    }                              from "./utils/helpers"

    const PER_PAGE = 10

    const PER_PAGE_OPTIONS = [5, 10, 15, 25, 50, 75, 100]

    const DataTable = defineComponent({
        name: "DataTable",

        components: {
            TableHeadCell,
            TableBodyCell,
            TBody,
            TableRow,
            THead,
            BottomPaginationWrapper,
            TableWrapper,
            PaginationSize,
            TopPaginationWrapper,
            Filter,
            Loading,
            Pagination,
        },

        props: {
            rows: { type: Array, required: true },
            columns: { type: Object, required: false, default: null },
            pagination: { type: Object as PropType<PaginationProps>, required: false, default: null },
            rounded: { type: Boolean, required: false, default: false },
            striped: { type: Boolean, required: false, default: false },
            sn: { type: Boolean, required: false, default: false },
            filter: { type: Boolean, required: false, default: false },
            loading: { type: Boolean, required: false, default: false },
            perPageOptions: { type: Array as PropType<Array<string | number>>, required: false, default: () => PER_PAGE_OPTIONS },
            query: { type: Object as PropType<QueryProps>, required: false, default: () => ({}) },
            topPagination: { type: Boolean, required: false, default: false },
            bottomPagination: { type: Boolean, required: false, default: true },
            hoverable: { type: Boolean, required: false, default: false },
            nonClickable: { type: Boolean, required: false, default: false },
        },

        emits: ["loadData", "rowClicked"],

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

                return Object.keys(props.rows[0]).reduce((cols, key) => ({ ...cols, [key]: formatString(key) }), {})
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

            const handleOnSearchChange = debounce((value) => {
                tableQuery.value = { ...tableQuery.value, page: 1, search: value }
            })

            const handleOnPaginationSizeChange = (value) => {
                tableQuery.value = { ...tableQuery.value, page: 1, per_page: value }
            }

            const rowClickHandler = (row) => {
                if (props.nonClickable || !props.hoverable) {
                    return
                }

                emit("rowClicked", row)
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
                handleOnPaginationSizeChange,
                rowClickHandler,
            }
        },
    })

    export default DataTable
</script>

<style lang="scss" src="./DataTable.scss"/>
