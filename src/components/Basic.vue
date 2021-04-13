<template>
    <div>
        <h2>Basic</h2>

        <data-table :rows="data"/>
    </div>
</template>

<script type="ts">
    import { defineComponent } from "vue"
    import { DataTable }       from "../../lib/DataTable"

    const Basic = defineComponent({
        components: { DataTable },

        props: {
            data: { type: Array, required: true },
        },
    })

    export default Basic
</script>
