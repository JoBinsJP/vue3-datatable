<template>
    <data-table :rows="tableData"
                :pagination="pagination"
                sn
                enabledCheckBoxSelection="true"
                hoverable
                striped
                @dataSelected="dataSelected"
                @rowClicked="rowClickHandler"
                @loadData="loadData">
        <template #thead>
            <table-head>Full Name</table-head>
            <table-head>Trips</table-head>
            <table-head>Airline</table-head>
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
                            <p class="dt-text-sm dt-font-medium dt-text-gray-900" v-text="formatAirline(row.airline).name"/>
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

            const loadData = async (query) => {
                const { data: { data, totalPassengers } } = await axios.get("https://api.instantwebtools.net/v1/passenger", {
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
            const dataSelected = (rowsSelected)=>{
                console.log(rowsSelected)
            }

            return { tableData, pagination, loadData, formatAirline, formatUrl, rowClickHandler, save,dataSelected }
        },
    })

    export default ClickableRow
</script>
