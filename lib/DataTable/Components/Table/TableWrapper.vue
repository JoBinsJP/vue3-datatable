<template>
    <div class="dt-jg-table-wrapper dt-jg-overflow-auto">
        <table class="dt-jg-table dt-jg-min-w-full dt-jg-divide-y dt-jg-divide-gray-200" style="width: 100%;">
            <slot/>
        </table>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "TableWrapper",
    })
</script>
