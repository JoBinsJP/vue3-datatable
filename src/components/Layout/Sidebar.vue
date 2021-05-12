<template>
    <div class="dt-hidden md:dt-flex md:dt-flex-shrink-0">
        <div class="dt-flex dt-flex-col dt-w-64">
            <div class="dt-flex dt-flex-col dt-h-0 dt-flex-1 dt-border-r dt-border-gray-200 dt-bg-white">
                <div class="dt-flex-1 dt-flex dt-flex-col dt-pt-5 dt-pb-4 dt-overflow-y-auto">
                    <div class="dt-flex dt-items-center dt-flex-shrink-0 dt-px-4">
                        <h1 class="dt-text-3xl dt-font-extralight">Vue3 <span class="dt-font-light">DataTable</span></h1>
                    </div>

                    <menus/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import Menus               from "./Menus.vue"

    export default defineComponent({
        name: "Sidebar",

        components: { Menus },
    })
</script>
