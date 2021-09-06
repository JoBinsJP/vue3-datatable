<template>
    <th scope="col" class="dt__table__thead__th dt-px-6 dt-py-3 dt-text-left dt-text-xs dt-font-medium dt-text-gray-500 dt-uppercase dt-tracking-wider">
        <slot/>
    </th>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "TableHeadCell",
    })
</script>
