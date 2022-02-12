<template>
    <div class="dt-jg-bg-white dt-jg-shadow-inner">
        <div class="dt-jg-px-4 sm:dt-jg-px-6 dt-jg-py-4">
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
