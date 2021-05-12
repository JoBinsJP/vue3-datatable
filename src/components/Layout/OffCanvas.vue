<template>
    <div v-show="show" class="dt-fixed dt-inset-0 dt-flex dt-z-40 md:dt-hidden" role="dialog" aria-modal="true">
        <transition
            enter-active-class="dt-transition-opacity dt-ease-linear dt-duration-300"
            enter-from-class="dt-opacity-0"
            enter-to-class="dt-opacity-100"
            leave-active-class="dt-transition-opacity dt-ease-linear dt-duration-300"
            leave-from-class="dt-opacity-100"
            leave-to-class="dt-opacity-0">
            <div v-show="show" class="dt-fixed dt-inset-0 dt-bg-gray-600 dt-bg-opacity-75" aria-hidden="true"></div>
        </transition>

        <transition
            enter-active-class="dt-transition dt-ease-in-out dt-duration-300 dt-transform"
            enter-from-class="dt--translate-x-full"
            enter-to-class="dt-translate-x-0"
            leave-active-class="dt-transition dt-ease-in-out dt-duration-300 dt-transform"
            leave-from-class="dt-translate-x-0"
            leave-to-class="dt--translate-x-full">
            <div v-show="show" class="dt-relative dt-flex-1 dt-flex dt-flex-col dt-max-w-xs dt-w-full dt-bg-white">
                <transition
                    enter-active-class="dt-ease-in-out dt-duration-300"
                    enter-from-class="dt-opacity-0"
                    enter-to-class="dt-opacity-100"
                    leave-active-class="dt-ease-in-out dt-duration-300"
                    leave-from-class="dt-opacity-100"
                    leave-to-class="dt-opacity-0">
                    <div v-show="show" class="dt-absolute dt-top-0 dt-right-0 dt--mr-12 dt-pt-2">
                        <button class="dt-ml-1 dt-flex dt-items-center dt-justify-center dt-h-10 dt-w-10 dt-rounded-full
                                        focus:dt-outline-none focus:dt-ring-2 focus:dt-ring-inset focus:dt-ring-white"
                                @click.prevent="$emit('close')">
                            <span class="dt-sr-only">Close sidebar</span>
                            <outline-close-icon class="dt-text-white"/>
                        </button>
                    </div>
                </transition>

                <div class="dt-flex-1 dt-h-0 dt-pt-5 dt-pb-4 dt-overflow-y-auto">
                    <div class="dt-flex-shrink-0 dt-flex dt-items-center dt-px-4">
                        <img class="dt-h-8 dt-w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
                    </div>

                    <menus/>
                </div>
            </div>
        </transition>

        <div class="dt-flex-shrink-0 dt-w-14">
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
