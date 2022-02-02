<template>
    <div class="data-table dt-jg-flex dt-jg-flex-col">
        <div class="dt-jg-align-middle dt-jg-min-w-full">
            <div class="dt-jg-wrapper dt-jg-relative" :class="{'sm:dt-jg-rounded-lg': rounded}">
                <slot v-if="loading" name="loading">
                    <Loading/>
                </slot>
                <template v-if="tableQuery.per_page">
                    <TopPaginationWrapper v-if="showPagination" :with-pagination="topPagination">
                        <Pagination v-if="topPagination"
                                    class="dt-jg-flex-1 dt-jg-pr-4"
                                    :total="totalData"
                                    :current-page="tableQuery.page"
                                    :per-page="parseInt(tableQuery.per_page.toString())"
                                    @changed="handlePageChange">
                            <template #pagination-info="paginationInfo">
                                <slot name="pagination-info" :start="paginationInfo.start" :end="paginationInfo.end" :total="paginationInfo.total">
                                    Showing
                                    <span class="dt-jg-font-medium" v-text="paginationInfo.start"/>
                                    to
                                    <span class="dt-jg-font-medium" v-text="paginationInfo.end"/>
                                    of
                                    <span class="dt-jg-font-medium" v-text="paginationInfo.total"/>
                                    results.
                                </slot>
                            </template>
                        </Pagination>
                        <!-- <Filter v-if="filter && !topPagination" :definicionesFiltro="tableQuery.filters" @input="handleOnSearchChange"/> -->
                        <PaginationSize :value="tableQuery.per_page" :options="perPageOptions" @input="handleOnPaginationSizeChange"/>
                    </TopPaginationWrapper>
                </template>
                

                <TableWrapper>
                    <THead>
                        <slot v-if="enabledCheckBoxSelection" name="thead-selectedRow">
                            <TableHeadCheckBox :rows="tableRows" :elements-selected="selectedRowIndex" @selectAll="selectAllHandler" />
                        </slot>

                        <slot v-if="sn" name="thead-sn">
                            <TableHeadCell class="dt-jg-table-thead-th-sn" v-text="`S.N.`"/>
                        </slot>

                        <slot name="thead" :column="tableColumns">
                            <TableHeadCell v-for="(label, key) in tableColumns" :key="`datatable-thead-th-${key}`" v-text="label"/>
                        </slot>
                        <template #th-header-filter>
                            <slot name="thead-filter" :filters="filters">
                                <template v-for="(label, key) in tableColumns">
                                    <TableHeadFilter :filterEnable="filter && topPagination" :filterDefinition="buscarDefinicionFiltro(label)" @input="handleOnSearchChange" />
                                </template>
                            </slot>
                        </template>
                    </THead>

                    <TBody>
                        <TableRow v-for="(row, rowIndex) in tableRows"
                                  :key="`datatable-row-${uniqueId()}-${rowIndex}`"
                                  :hoverable="hoverable"
                                  :non-clickable="nonClickable"
                                  :row-index="rowIndex"
                                  :striped="striped"
                                  @clicked="rowClickHandler(row)">

                            <slot v-if="enabledCheckBoxSelection" name="tbody-selectedRow">
                                <TableBodyCheckBox :row-index="rowIndex" :elements-selected="selectedRowIndex" @selectRow="selectRowHandler" />
                            </slot>
                            <slot v-if="sn" name="tbody-sn" :sn="rowIndex + 1">
                                <TableBodyCell class="dt-jg-table-tbody-td-sn" v-text="rowIndex + 1 + paginatedRowIndex"/>
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
                <template v-if="tableQuery.per_page">
                    <BottomPaginationWrapper v-if="showPagination && bottomPagination">
                        <pagination :total="totalData"
                                    :current-page="tableQuery.page"
                                    :per-page="parseInt(tableQuery.per_page.toString())"
                                    @changed="handlePageChange">
                            <template #pagination-info="paginationInfo">
                                <slot name="pagination-info" :start="paginationInfo.start" :end="paginationInfo.end" :total="paginationInfo.total">
                                    Showing
                                    <span class="dt-jg-font-medium" v-text="paginationInfo.start"/>
                                    to
                                    <span class="dt-jg-font-medium" v-text="paginationInfo.end"/>
                                    of
                                    <span class="dt-jg-font-medium" v-text="paginationInfo.total"/>
                                    results.
                                </slot>
                            </template>
                        </pagination>
                    </BottomPaginationWrapper>
                </template>
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
    import { TableQuery }          from "./@types/TableQuery"
    import Filter                  from "./Components/Filter/Filter.vue"
    import Loading                 from "./Components/Loading.vue"
    import BottomPaginationWrapper from "./Components/Pagination/BottomPaginationWrapper.vue"
    import Pagination              from "./Components/Pagination/Pagination.vue"
    import PaginationSize          from "./Components/Pagination/PaginationSize.vue"
    import TopPaginationWrapper    from "./Components/Pagination/TopPaginationWrapper.vue"
    import TableBodyCell           from "./Components/Table/TableBodyCell.vue"
    import TableHeadCell           from "./Components/Table/TableHeadCell.vue"
    import TableBodyCheckBox       from "./Components/Table/TableBodyCheckBox.vue"
    import TableHeadCheckBox       from "./Components/Table/TableHeadCheckBox.vue"
    import TableHeadFilter         from "./Components/Table/TableHeadFilter.vue"
    import TableRow                from "./Components/Table/TableRow.vue"
    import TableWrapper            from "./Components/Table/TableWrapper.vue"
    import TBody                   from "./Components/Table/TBody.vue"
    import THead                   from "./Components/Table/THead.vue"
    import {
        debounce,
        formatString,
    }                              from "./utils/helpers"
import TableHeadCheckBox1 from "./Components/Table/TableHeadCheckBox.vue"
import { FilterDefinition } from "./@types/FilterDefinition"

    const PER_PAGE = 10

    const PER_PAGE_OPTIONS = [5, 10, 15, 25, 50, 75, 100]

    export default defineComponent({
        name: "DataTable",

        components: {
    TableHeadCell,
    TableHeadCheckBox,
    TableBodyCell,
    TableBodyCheckBox,
    TableHeadFilter,
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
    TableHeadCheckBox1
},

        props: {
            rows: { type: Array, required: true },
            columns: { type: Object, required: false, default: null },
            pagination: { type: Object as PropType<PaginationProps>, required: false, default: null },
            definitionsFilter: { type: Array as PropType<FilterDefinition[]>, required: false, default: null },
            rounded: { type: Boolean, required: false, default: false },
            striped: { type: Boolean, required: false, default: false },
            sn: { type: Boolean, required: false, default: false },
            enabledCheckBoxSelection: { type: Boolean, required: false, default: false },
            filter: { type: Boolean, required: false, default: false },
            loading: { type: Boolean, required: false, default: false },
            perPageOptions: { type: Array as PropType<Array<string | number>>, required: false, default: () => PER_PAGE_OPTIONS },
            //query: { type: Object as PropType<QueryProps>, required: false, default: () => ({}) },
            topPagination: { type: Boolean, required: false, default: false },
            bottomPagination: { type: Boolean, required: false, default: true },
            hoverable: { type: Boolean, required: false, default: false },
            nonClickable: { type: Boolean, required: false, default: false },
        },

        emits: ["loadData", "rowClicked","dataSelected"],

        setup(props, { emit }: SetupContext) {
            const tableQuery = ref<TableQuery>({
                page: props.pagination?.page || 1,
                per_page: props.pagination?.per_page || PER_PAGE
            })
            const filters = computed(() => props.definitionsFilter || [])
            const selectedRowIndex =ref<number[]>([]);
            const showPagination = computed(() => !!props.pagination)
            const totalData = computed(() => props.pagination?.total || props.rows.length)
            const tableRows = computed<any[]>(() => props.rows)

            const tableColumns = computed(() => {
                if (props.columns) {
                    return props.columns
                }

                if (props.rows.length === 0) {
                    return {}
                }
                const rows: any[] = props.rows;
                return Object.keys(rows[0]).reduce((cols, key) => ({ ...cols, [key]: formatString(key) }), {})
            })

            const paginatedRowIndex = computed(() => showPagination.value ? Number(tableQuery.value.per_page) * (Number(tableQuery.value.page) - 1) : 0)

            const uniqueId = () => Math.floor(Math.random() * 100)

            const fireDataLoad = () => {
                selectedRowIndex.value.splice(0,selectedRowIndex.value.length);
                emit("loadData", tableQuery.value)
            }

            const buscarDefinicionFiltro = ($fieldName) => {
                return filters.value.find(d=> d.fieldName === $fieldName);
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

            const handleOnSearchChange = debounce((value,filterData) => {
                tableQuery.value = { ...tableQuery.value, page: 1, dataCriteria: {value:value,filterDefinition:filterData} }
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

            const selectAllHandler = ($select: boolean) => {
                //console.log(tableRows.value)
                //console.log(selectedRowIndex.value)
                selectedRowIndex.value.splice(0,selectedRowIndex.value.length);
                if($select){
                    tableRows.value.forEach((dato,index)=>{
                        selectedRowIndex.value.push(index)
                    });
                }
                emit("dataSelected", tableRows.value.filter((dato,index)=>selectedRowIndex.value.findIndex(d=>d===index) > -1))
            }
            const selectRowHandler = ($select: boolean,$index: number) => {
                const findIndex = selectedRowIndex.value.findIndex(d=>d === $index);
                if(findIndex > -1){
                    if(!$select){
                        selectedRowIndex.value.splice(findIndex,1);
                    }
                }
                else{
                    if($select){
                        selectedRowIndex.value.push($index)
                    }
                }
                emit("dataSelected", tableRows.value.filter((dato,index)=>selectedRowIndex.value.findIndex(d=>d===index) > -1))
            }

            return {
                tableQuery,
                showPagination,
                totalData,
                filters,
                tableRows,
                tableColumns,
                paginatedRowIndex,
                selectedRowIndex,
                selectRowHandler,
                uniqueId,
                handlePageChange,
                handleOnSearchChange,
                handleOnPaginationSizeChange,
                rowClickHandler,
                selectAllHandler,
                buscarDefinicionFiltro,
            }
        },
    })
</script>

<style lang="scss" src="./DataTable.scss"/>
