<template>
    <div class="dt__pagination__info">
        <p class="dt-text-sm dt-text-gray-700">
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
