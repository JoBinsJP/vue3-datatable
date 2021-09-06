<template>
    <tr class="dt__table__row" :class="striped && rowIndex % 2 ? 'dt-bg-gray-50' : 'dt-bg-white'">
        <slot/>
    </tr>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "TableRow",

        props: {
            rowIndex: { type: Number, required: true },
            striped: { type: Boolean, required: false, default: false },
        },
    })
</script>
