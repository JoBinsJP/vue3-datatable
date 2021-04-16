<template>
    <div class="h-screen flex overflow-hidden bg-gray-100">
        <off-canvas :show="showSideBar" @close="toggleSidebar"/>

        <sidebar/>

        <div class="flex flex-col w-0 flex-1 overflow-hidden">
            <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
                <button
                    class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    @click.prevent="toggleSidebar">
                    <span class="sr-only">Open sidebar</span>
                    <OutlineHamburgerIcon/>
                </button>
            </div>

            <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none" tabindex="0">
                <div class="py-6">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <h1 class="text-2xl font-semibold text-gray-900" v-text="title"/>
                    </div>

                    <div class="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                        <!-- Replace with your content -->
                        <div class="py-4">
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
