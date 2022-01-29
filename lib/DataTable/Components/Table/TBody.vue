<template>
    <tbody class="dt-jg-table-tbody">
        <slot/>
    </tbody>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "TBody",
    })
</script>
