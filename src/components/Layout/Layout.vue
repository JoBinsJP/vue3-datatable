<template>
    <div class="dt-h-screen dt-flex dt-overflow-hidden dt-bg-gray-100">
        <off-canvas :show="showSideBar" @close="toggleSidebar"/>

        <sidebar/>

        <div class="dt-flex dt-flex-col dt-w-0 dt-flex-1 dt-overflow-hidden">
            <div class="md:dt-hidden dt-pl-1 dt-pt-1 sm:dt-pl-3 sm:dt-pt-3">
                <button
                    class="dt--ml-0.5 dt--mt-0.5 dt-h-12 dt-w-12 dt-inline-flex dt-items-center dt-justify-center
                            dt-rounded-md dt-text-gray-500 hover:dt-text-gray-900 focus:dt-outline-none focus:dt-ring-2
                            focus:dt-ring-inset focus:dt-ring-indigo-500"
                    @click.prevent="toggleSidebar">
                    <span class="dt-sr-only">Open sidebar</span>
                    <OutlineHamburgerIcon/>
                </button>
            </div>

            <main class="dt-flex-1 dt-relative dt-z-0 dt-overflow-y-auto focus:dt-outline-none" tabindex="0">
                <div class="dt-py-6">
                    <div class="dt-max-w-7xl dt-mx-auto dt-px-4 sm:dt-px-6 md:dt-px-8">
                        <h1 class="dt-text-2xl dt-font-semibold dt-text-gray-900" v-text="title"/>
                    </div>

                    <div class="dt-max-w-7xl dt-mx-auto dt-px-4 sm:dt-px-6 md:dt-px-8">
                        <!-- Replace with your content -->
                        <div class="dt-p-8">
                            <slot/>
                        </div>
                        <!-- /End replace -->
                    </div>
                </div>
            </main>
        </div>
    </div>

</template>

<script lang="ts">
    import {
        defineComponent,
        ref,
    }                           from "vue"
    import OutlineHamburgerIcon from "../Icons/OutlineHamburgerIcon.vue"
    import OffCanvas            from "./OffCanvas.vue"
    import Sidebar              from "./Sidebar.vue"

    export default defineComponent({
        name: "Layout",

        components: { OutlineHamburgerIcon, OffCanvas, Sidebar },

        props: {
            title: { type: String, required: true },
        },

        setup() {
            const showSideBar = ref(false)

            const toggleSidebar = () => {
                showSideBar.value = !showSideBar.value
            }

            return { showSideBar, toggleSidebar }
        },
    })
</script>
