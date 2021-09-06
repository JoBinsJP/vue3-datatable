<template>
    <data-table :rows="tableData"
                :pagination="pagination"
                :query="query"
                :loading="isLoading"
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
            const isLoading = ref(false)

            const loadData = async (query) => {
                isLoading.value = true
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

            return { tableData, pagination, query, isLoading, loadData, formatAirline, formatUrl }
        },
    })

    export default Filter
</script>
