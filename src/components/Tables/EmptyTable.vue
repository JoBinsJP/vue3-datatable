<template>
    <data-table :rows="[]">
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
    import { defineComponent } from "vue"
    import {
        DataTable,
        TableBodyCell,
        TableHeadCell,
    }                          from "../../../lib/DataTable"

    const EmptyTable = defineComponent({
        components: { TableBodyCell, TableHeadCell, DataTable },
    })

    export default EmptyTable
</script>
