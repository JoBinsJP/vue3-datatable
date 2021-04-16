<template>
    <div v-show="show" class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
        <transition
            enter-active-class="transition-opacity ease-linear duration-300"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition-opacity ease-linear duration-300"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0">
            <div v-show="show" class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>
        </transition>

        <transition
            enter-active-class="transition ease-in-out duration-300 transform"
            enter-from-class="-translate-x-full"
            enter-to-class="translate-x-0"
            leave-active-class="transition ease-in-out duration-300 transform"
            leave-from-class="translate-x-0"
            leave-to-class="-translate-x-full">
            <div v-show="show" class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
                <transition
                    enter-active-class="ease-in-out duration-300"
                    enter-from-class="opacity-0"
                    enter-to-class="opacity-100"
                    leave-active-class="ease-in-out duration-300"
                    leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <div v-show="show" class="absolute top-0 right-0 -mr-12 pt-2">
                        <button class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                @click.prevent="$emit('close')">
                            <span class="sr-only">Close sidebar</span>
                            <outline-close-icon class="text-white"/>
                        </button>
                    </div>
                </transition>

                <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                    <div class="flex-shrink-0 flex items-center px-4">
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
                    </div>

                    <menus/>
                </div>
            </div>
        </transition>

        <div class="flex-shrink-0 w-14">
            <!-- Force sidebar to shrink to fit close icon -->
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import OutlineCloseIcon    from "../Icons/OutlineCloseIcon.vue"
    import Menus               from "./Menus.vue"

    export default defineComponent({
        name: "OffCanvas",

        components: { Menus, OutlineCloseIcon },

        props: {
            show: { type: Boolean, required: true },
        },

        emits: ["close"],
    })
</script>
