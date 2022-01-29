<template>
    <tr class="dt-jg-table-jgrow"
        :class="{
            'dt-jg-bg-white': !striped || striped && formattedRowIndex % 2 === 0,
            'dt-jg-bg-gray-50': striped && formattedRowIndex % 2,
            'hover:dt-jg-bg-gray-100': hoverable,
            'dt-jg-cursor-pointer': hoverable && !nonClickable
        }"
        @click.stop="$emit('clicked')">
        <slot/>
    </tr>
</template>

<script lang="ts">
    import {
        defineComponent,
        ref,
    } from "vue"

    export default defineComponent({
        name: "TableRow",

        props: {
            rowIndex: { type: [Number, String], required: false, default: 0 },
            striped: { type: Boolean, required: false, default: false },
            hoverable: { type: Boolean, required: false, default: false },
            nonClickable: { type: Boolean, required: false, default: false },
        },

        emits: ["clicked"],

        setup(props) {
            const formattedRowIndex = ref(parseInt(String(props.rowIndex || 0)) )

            return {formattedRowIndex}
        },
    })
</script>
