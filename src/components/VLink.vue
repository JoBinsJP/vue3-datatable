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
    }                      from "vue"
    import { UsableRoute } from "../@types/Route"

    export default defineComponent({
        name: "VLink",

        props: {
            href: { type: String, required: true },
        },

        setup() {
            const { setRoute } = inject("route") as UsableRoute

            return { setRoute }
        },
    })
</script>
