<template>
    <data-table :rows="data" striped sn/>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import { DataTable }       from "../../../lib/DataTable"

    const Striped = defineComponent({
        components: { DataTable },

        props: {
            data: { type: Array, required: true },
        },
    })

    export default Striped
</script>
