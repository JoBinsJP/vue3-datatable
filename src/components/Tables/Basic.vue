<template>
    <data-table :rows="data"/>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import { DataTable }       from "../../../lib/DataTable"

    const Basic = defineComponent({
        components: { DataTable },

        props: {
            data: { type: Array, required: true },
        },
    })

    export default Basic
</script>
