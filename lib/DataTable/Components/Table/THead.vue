<template>
    <thead class="dt-jg-table-thead dt-jg-bg-gray-50">
        <tr class="dt-jg-table-thead-tr">
            <slot/>
        </tr>
    </thead>
</template>

<script lang="ts" >
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "THead",
    })
</script>
