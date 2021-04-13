<template>
    <div class="hidden md:flex md:flex-shrink-0">
        <div class="flex flex-col w-64">
            <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
                <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
                    <div class="flex items-center flex-shrink-0 px-4">
                        <h1 class="text-3xl font-extralight">Vue3 <span class="font-light">DataTable</span></h1>
                    </div>

                    <menus/>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="ts">
    import { defineComponent } from "vue"
    import Menus               from "./Menus.vue"

    export default defineComponent({
        name: "Sidebar",

        components: { Menus },
    })
</script>
