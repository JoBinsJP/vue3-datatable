<template>
    <div class="dt__pagination_wrapper--bottom dt-bg-white dt-shadow-inner">
        <div class="dt-px-4 sm:dt-px-6 dt-py-4">
            <slot/>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "BottomPaginationWrapper",
    })
</script>
