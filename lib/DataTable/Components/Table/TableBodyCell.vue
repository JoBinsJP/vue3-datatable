<template>
    <td class="dt-jg-table-tbody-td dt-jg-px-6 dt-jg-py-4 dt-jg-whitespace-nowrap dt-jg-text-sm dt-jg-font-medium dt-jg-text-gray-500">
        <slot/>
    </td>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "TableBodyCell",
    })
</script>
