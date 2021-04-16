<template>
    <a :href="href"
       @click.prevent="setRoute(href)">
        <slot/>
    </a>
</template>

<script lang="ts">
    import {
        defineComponent,
        inject,
    } from "vue"

    export default defineComponent({
        name: "VLink",

        props: {
            href: { type: String, required: true },
        },

        setup() {
            const { setRoute } = inject("route")

            return { setRoute }
        },
    })
</script>
