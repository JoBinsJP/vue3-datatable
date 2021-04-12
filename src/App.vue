<template>
    <div class="bg-gray-100 py-6">
        <div class="max-w-7xl h-screen mx-auto sm:px-6 lg:px-8">
            <data-table/>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import { DataTable }       from "../lib/DataTable"

    export default defineComponent({
        name: "App",

        components: {
            DataTable,
        },
    })
</script>
