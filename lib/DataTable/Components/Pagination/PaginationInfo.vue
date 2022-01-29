<template>
    <div class="dt-jg-pagination-info">
        <p class="dt-jg-text-sm dt-jg-text-gray-700">
            <slot/>
        </p>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "PaginationInfo",
    })
</script>
