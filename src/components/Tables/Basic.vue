<template>
    <data-table :rows="data" :pagination="pagination"/>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import { DataTable }       from "../../../lib/DataTable"

    const Basic = defineComponent({
        components: { DataTable },

        props: {
            data: { type: Array, required: true },
        },

        setup() {
            const pagination = {
                page: 1,
                total: 43,
                per_page: 10,
            }

            return { pagination }
        },
    })

    export default Basic
</script>
