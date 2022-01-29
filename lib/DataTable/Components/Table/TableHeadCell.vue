<template>
    <th scope="col" class="dt-jg-table-thead-th dt-jg-px-6 dt-jg-py-3 dt-jg-text-left dt-jg-text-xs dt-jg-font-medium dt-jg-text-gray-500 dt-jg-uppercase dt-jg-tracking-wider">
        <slot/>
    </th>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "TableHeadCell",
    })
</script>
