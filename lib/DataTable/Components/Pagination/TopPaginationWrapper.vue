<template>
    <div class="dt__pagination_wrapper--top md:dt-flex xs:dt-flex-col dt-items-center"
         :class="{'dt-bg-white dt-py-4 dt-px-4 sm:dt-px-6': withPagination}">
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
