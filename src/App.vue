<template>
    <div class="bg-gray-100 py-6">
        <div class="flex flex-col gap-10 lg:px-8 max-w-7xl mx-auto sm:px-6">
            <basic :data="tableData"/>

            <striped :data="tableData"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import Basic               from "./components/Basic.vue"
    import Striped             from "./components/Striped.vue"
    import jsonData            from "./data/data.json"

    export default defineComponent({
        name: "App",

        components: {
            Striped,
            Basic,
        },

        setup() {
            const tableData = jsonData

            return { tableData }
        },
    })
</script>
