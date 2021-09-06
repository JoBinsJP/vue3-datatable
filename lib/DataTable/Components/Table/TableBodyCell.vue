<template>
    <td class="dt__table__tbody_td dt-px-6 dt-py-4 dt-whitespace-nowrap dt-text-sm dt-font-medium dt-text-gray-500">
        <slot/>
    </td>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "TableBodyCell",
    })
</script>
