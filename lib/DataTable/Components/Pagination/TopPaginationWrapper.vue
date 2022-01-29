<template>
    <div class="dt-jg-pagination-wrapper--top md:dt-jg-flex xs:dt-jg-flex-col dt-jg-items-center"
         :class="{'dt-jg-bg-white dt-jg-py-4 dt-jg-px-4 sm:dt-jg-px-6': withPagination}">
        <slot/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "TopPaginationWrapper",

        props: {
            withPagination: { type: Boolean, required: false, default: false },
        },
    })
</script>
