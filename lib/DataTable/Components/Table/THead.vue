<template>
    <thead class="dt__table__thead dt-bg-gray-50">
        <tr class="dt__table__thead__tr">
            <slot/>
        </tr>
    </thead>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "THead",
    })
</script>
