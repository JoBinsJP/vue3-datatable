<template>
    <tr class="dt__table__row"
        :class="{
            'dt-bg-white': !striped || striped && rowIndex % 2 === 0,
            'dt-bg-gray-50': striped && rowIndex % 2,
            'hover:dt-bg-gray-100': hoverable,
            'dt-cursor-pointer': !nonClickable
        }"
        @click.stop="$emit('clicked')">
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
            hoverable: { type: Boolean, required: false, default: false },
            nonClickable: { type: Boolean, required: false, default: false },
        },

        emits: ["clicked"],
    })
</script>
