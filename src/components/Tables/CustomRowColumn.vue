<template>
    <data-table :rows="data" striped sn>
        <template #thead-sn>
            <table-head>SN</table-head>
        </template>

        <template #thead>
            <table-head>Full Name</table-head>
            <table-head>Account</table-head>
            <table-head>Gender</table-head>
            <table-head/>
        </template>

        <template #tbody-sn="{sn}">
            <table-head v-text="sn.toString().padStart(2, '0')"/>
        </template>

        <template #tbody="{row}">
            <table-body v-text="`${row.first_name} ${row.last_name}`"/>
            <table-body>
                <p>{{ row.email }}</p>
                <p>{{ row.ip_address }}</p>
            </table-body>
            <table-body v-text="row.gender"/>
            <table-body>
                Edit
            </table-body>
        </template>
    </data-table>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import {
        DataTable,
        TableBody,
        TableHead,
    }                          from "../../../lib/DataTable"

    const CustomRowColumn = defineComponent({
        components: { TableBody, TableHead, DataTable },

        props: {
            data: { type: Array, required: true },
        },
    })

    export default CustomRowColumn
</script>
