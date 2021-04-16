<template>
    <div class="data-table flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                <div class="table-wrapper shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <div class="pagination-wrapper">
                        <pagination :total="56" :current-page="3" @changed="handlePageChange"/>
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
                                    <table-body v-text="rowIndex + 1"/>
                                </slot>

                                <slot name="tbody" :index="rowIndex" :row="row">
                                    <table-body v-for="(_, key) in tableColumns"
                                                :key="`datatable-tbody-td-${uniqueId()}-${key}`"
                                                v-text="row[key]"/>
                                </slot>
                            </tr>
                        </tbody>
                    </table>

                    <div class="pagination-wrapper">
                        <pagination :total="56"/>
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
    }                 from "vue"
    import Pagination from "./Components/Pagination.vue"
    import TableBody  from "./Components/TableBody.vue"
    import TableHead  from "./Components/TableHead.vue"

    const DataTable = defineComponent({
        components: { Pagination, TableBody, TableHead },

        props: {
            rows: { type: Array, required: true },
            columns: { type: Object, required: false, default: null },
            striped: { type: Boolean, required: false, default: false },
            sn: { type: Boolean, required: false, default: false },
        },

        setup(props) {
            const tableRows = computed(() => props.rows)

            const tableColumns = computed(() => {
                if (props.columns) {
                    return props.columns
                }

                if (props.rows.length === 0) {
                    return {}
                }

                return Object.entries(props.rows[0]).reduce((cols, [key, _]) => ({ ...cols, [key]: key }), {})
            })

            const uniqueId = () => Math.floor(Math.random() * 100)

            const handlePageChange = (page) => {
                console.log(page, "handlePageChange")
            }

            return { tableRows, tableColumns, uniqueId, handlePageChange }
        },
    })

    export default DataTable
</script>

<style scoped lang="scss" src="./DataTable.scss"/>
