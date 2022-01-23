<template>
    <nav class="dt__pagination__nav dt-relative dt-z-0 dt-inline-flex dt-rounded-md dt-shadow-sm dt--space-x-px" aria-label="Pagination">
        <slot/>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "PaginationButtons",
    })
</script>
