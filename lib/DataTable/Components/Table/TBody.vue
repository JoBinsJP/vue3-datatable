<template>
    <tbody class="dt__table__tbody">
        <slot/>
    </tbody>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "TBody",
    })
</script>
