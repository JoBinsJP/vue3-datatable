<template>
    <data-table :rows="tableData"
                :pagination="pagination"
                :query="query"
                :loading="isLoading"
                :definitionsFilter="filters"
                top-pagination
                striped
                sn
                filter
                @loadData="loadData">
        <template #thead>
            <table-head>Full Name</table-head>
            <table-head>Trips</table-head>
            <table-head>Airline</table-head>
        </template>

        <template #tbody="{row}">
            <table-body v-text="row.name"/>

            <table-body v-text="row.trips ? row.trips.toLocaleString() : ''"/>

            <table-body>
                <div class="dt-flex dt-items-center">
                    <div class="dt-flex-shrink-0 dt-h-16 dt-w-16 dt-inline-flex dt-items-center">
                        <img class="dt-rounded-full"
                             :src="formatAirline(row.airline).logo"
                             :alt="formatAirline(row.airline).name">
                    </div>
                    <div class="dt-ml-4">
                        <a :href="formatUrl(formatAirline(row.airline).website)">
                            <p class="dt-text-sm dt-font-medium dt-text-gray-900" v-text="formatAirline(row.airline).name"/>
                        </a>
                        <p class="dt-text-sm dt-text-gray-400" v-text="formatAirline(row.airline).slogan"/>
                        <p class="dt-text-sm dt-text-gray-500" v-text="formatAirline(row.airline).head_quaters"/>
                    </div>
                </div>
            </table-body>
        </template>
    </data-table>
</template>

<script lang="ts">
    import axios from "axios"
    import { FilterDefinition, TypeControl, TypeResult } from "../../../lib/DataTable/@types/FilterDefinition"
    import {
        defineComponent,
        ref,
    }            from "vue"
    import {
        DataTable,
        TableBody,
        TableHead,
    }            from "../../../lib/DataTable"

    const Filter = defineComponent({
        components: { TableBody, TableHead, DataTable },

        setup() {
            const tableData = ref([])
            const pagination = ref({})
            const query = ref({
                search: "test",
            })
            const filters = ref([] as FilterDefinition[]);
            const filter: FilterDefinition = {code:"1",indice:1,format:"yyyy-MM-dd",typeControl: TypeControl.dateRange,defaultVauel:new Date(),typeData:TypeResult.text};
            filters.value.push(filter)
            /*const filter2: FilterDefinition = {code:"2",indice:2,format:"yyyy-MM-dd HH:mm",typeControl: TypeControl.date,defaultVauel:new Date(),typeData:TypeResult.date};
            filters.value.push(filter2)*/
            const filter3: FilterDefinition = {code:"3",indice:3,format:"HH:mm",typeControl: TypeControl.hour,defaultVauel:{hours: new Date().getHours(),minutes:new Date().getMinutes()},typeData:TypeResult.text};
            filters.value.push(filter3)
            const filter4: FilterDefinition = {code:"2",indice:2,typeControl: TypeControl.list,list:[{code:1,description:"item 1"},{code:2,description:"item 2"},{code:3,description:"item 3"},{code:4,description:"item 4"},{code:5,description:"item 5"}],typeData:TypeResult.text};
            filters.value.push(filter4)
            const isLoading = ref(false)

            const loadData = async (query) => {
                isLoading.value = true
                console.log(query);
                const { data: { data, totalPassengers } } = await axios.get("https://api.instantwebtools.net/v1/passenger", {
                    params: {
                        page: (query.page - 1) < 0 ? 0 : query.page - 1,
                        size: query.per_page,
                        search: query.search,
                    },
                })

                tableData.value = data
                pagination.value = { ...pagination.value, page: query.page, total: totalPassengers }
                isLoading.value = false
            }

            const formatAirline = (airline) => Array.isArray(airline) ? airline[0] : airline

            const formatUrl = (url: string) => url.startsWith("http") ? url : `http://${url}`

            return { tableData, pagination, query,filters, isLoading, loadData, formatAirline, formatUrl }
        },
    })

    export default Filter
</script>