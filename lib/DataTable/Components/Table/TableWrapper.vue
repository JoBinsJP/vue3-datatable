<template>
    <div class="dt__table_wrapper dt-overflow-auto">
        <table class="dt__table dt-min-w-full dt-divide-y dt-divide-gray-200" style="width: 100%;">
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
<style lang="scss" src="../../DataTable.scss" scoped/>