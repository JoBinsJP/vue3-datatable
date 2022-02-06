<template>
    <data-table
        :pagination="pagination"
        :columns="columns"
        :definitionsFilter="filters"
        top-pagination
        filter
        :rows="[]">
        <template #thead>
            <TableHeadCell>
                Name
            </TableHeadCell>

            <TableHeadCell>
                Surname
            </TableHeadCell>
        </template>

        <template #empty>
            <TableBodyCell colspan="2">
                No record found.
            </TableBodyCell>
        </template>
    </data-table>
</template>

<script lang="ts">
    import { defineComponent, ref } from "vue"
    import {
        DataTable,
        FilterDefinition,
        TableBodyCell,
        TableHeadCell,
        TypeControl,
        TypeResult,
    } from "../../../lib/DataTable"
    import {
        formatString,
    }                              from "../../../lib/DataTable/utils/helpers"

    const EmptyTable = defineComponent({
        components: { TableBodyCell, TableHeadCell, DataTable },
        setup(){
            const pagination = ref({})
            const columns = ref(Object.keys({name:"NAME",lastname:"LASTNAME"}).reduce((cols, key) => ({ ...cols, [key]: formatString(key) }), {}))
            const filters = ref([] as FilterDefinition[]);
            const filter: FilterDefinition = {code:"1",indice:1,format:"yyyy-MM-dd",typeControl: TypeControl.dateRange,defaultVauel:new Date(),typeData:TypeResult.text};
            filters.value.push(filter)
            /*const filter2: FilterDefinition = {code:"2",indice:2,format:"yyyy-MM-dd HH:mm",typeControl: TypeControl.date,defaultVauel:new Date(),typeData:TypeResult.date};
            filters.value.push(filter2)*/
            const filter3: FilterDefinition = {code:"3",indice:3,format:"HH:mm",typeControl: TypeControl.hour,defaultVauel:{hours: new Date().getHours(),minutes:new Date().getMinutes()},typeData:TypeResult.text};
            filters.value.push(filter3)
            const filter4: FilterDefinition = {code:"2",indice:2,typeControl: TypeControl.list,list:[{code:1,description:"item 1"},{code:2,description:"item 2"},{code:3,description:"item 3"},{code:4,description:"item 4"},{code:5,description:"item 5"}],typeData:TypeResult.text};
            filters.value.push(filter4)
            return {
                pagination,
                filters,
                columns,
            }
        }
    })

    export default EmptyTable
</script>
