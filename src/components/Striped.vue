<template>
    <div>
        <h2>Striped</h2>

        <data-table :rows="data" striped/>
    </div>
</template>

<script type="ts">
    import { defineComponent } from "vue"
    import { DataTable }       from "../../lib/DataTable"

    const Striped = defineComponent({
        components: { DataTable },

        props: {
            data: { type: Array, required: true },
        },
    })

    export default Striped
</script>
