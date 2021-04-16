<template>
    <layout :title="currentRoute.title">
        <component :is="currentRoute.component" :data="tableData"/>
    </layout>
</template>

<script lang="ts">
    import {
        defineComponent,
        provide,
    }               from "vue"
    import Layout   from "./components/Layout/Layout.vue"
    import useRoute from "./composables/useRoute"
    import jsonData from "./data/data.json"

    export default defineComponent({
        name: "App",

        components: {
            Layout,
        },

        setup() {
            const tableData = jsonData

            const route = useRoute()

            provide("route", route)

            return {
                tableData,
                currentRoute: route.currentRoute,
            }
        },
    })
</script>
