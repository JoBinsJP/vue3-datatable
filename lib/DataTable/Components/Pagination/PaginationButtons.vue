<template>
    <nav class="dt-jg-relative dt-jg-z-0 dt-jg-inline-flex dt-jg-rounded-md dt-jg-shadow-sm dt-jg-space-x-px" aria-label="Pagination">
        <slot/>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "PaginationButtons",
    })
</script>
