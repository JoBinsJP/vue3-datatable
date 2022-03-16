<template>
    <data-table :rows="tableData"
                :pagination="pagination"
                sn
                hoverable
                striped
                :query="queries"
                @rowClicked="rowClickHandler"
                @loadData="loadData">
        <template #thead="{sorting, sort}">
            <table-head sortable="name"
                        :sort="sort"
                        multiple
                        @sorting="sorting">
                Full Name
            </table-head>
            <table-head sortable="trips"
                        :sort="sort"
                        multiple
                        @sorting="sorting">
                Trips
            </table-head>
            <table-head sortable="airline"
                        :sort="sort"
                        multiple
                        @sorting="sorting">
                Airline
            </table-head>
            <table-head/>
        </template>
        <template #tbody="{row}">
            <table-body v-text="row.name"/>

            <table-body v-text="row.trips?.toLocaleString()"/>

            <table-body>
                <div class="dt-flex dt-items-center">
                    <div class="dt-flex-shrink-0 dt-h-16 dt-w-16 dt-inline-flex dt-items-center">
                        <img class="dt-rounded-full"
                             :src="formatAirline(row.airline).logo"
                             :alt="formatAirline(row.airline).name">
                    </div>
                    <div class="dt-ml-4">
                        <a :href="formatUrl(formatAirline(row.airline).website)" target="_blank">
                            <p class="dt-text-sm dt-font-medium dt-text-gray-900"
                               v-text="formatAirline(row.airline).name"/>
                        </a>
                        <p class="dt-text-sm dt-text-gray-400" v-text="formatAirline(row.airline).slogan"/>
                        <p class="dt-text-sm dt-text-gray-500" v-text="formatAirline(row.airline).head_quaters"/>
                    </div>
                </div>
            </table-body>

            <table-body>
                <button @click.stop="save">Save</button>
            </table-body>
        </template>
    </data-table>
</template>

<script lang="ts">
    import axios from "axios"
    import {
        defineComponent,
        ref,
    }            from "vue"
    import {
        DataTable,
        TableBody,
        TableHead,
    }            from "../../../lib/DataTable"

    const ClickableRow = defineComponent({
        components: { TableBody, TableHead, DataTable },

        setup() {
            const tableData = ref([])

            const pagination = ref({})

            const queries = ref({
                sort: "name:asc",
            })

            const loadData = async (query) => {
                queries.value = { ...query }
                const {
                    data: {
                        data,
                        totalPassengers,
                    },
                } = await axios.get("https://api.instantwebtools.net/v1/passenger", {
                    params: {
                        page: (query.page - 1) < 0 ? 0 : query.page - 1,
                        size: query.per_page,
                    },
                })

                tableData.value = data
                pagination.value = { ...pagination.value, page: query.page, total: totalPassengers }
            }

            const formatAirline = (airline) => Array.isArray(airline) ? airline[0] : airline

            const formatUrl = (url: string) => url.startsWith("http") ? url : `http://${url}`

            const rowClickHandler = (row) => {
                console.log("Row Clicked", row)
            }

            const save = () => {
                console.log("Save Clicked")
            }

            return { tableData, pagination, queries, loadData, formatAirline, formatUrl, rowClickHandler, save }
        },
    })

    export default ClickableRow
</script>
