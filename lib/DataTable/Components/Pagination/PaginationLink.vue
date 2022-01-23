<template>
    <a href="#"
       class="dt__pagination__link dt-relative dt-inline-flex dt-items-center dt-px-4 dt-py-2 dt-border dt-text-sm dt-font-medium"
       :class="linkClasses"
       v-on="{...$attrs}">
        <slot/>
    </a>
</template>

<script lang="ts">
    import {
        computed,
        defineComponent,
    } from "vue"

    export default defineComponent({
        name: "PaginationLink",

        props: {
            active: { type: Boolean, required: false, default: false },
            disabled: { type: Boolean, required: false, default: false },
        },

        setup(props) {
            const linkClasses = computed(() => {
                if (props.active) {
                    return "dt-bg-gray-200 dt-border-gray-300 dt-text-gray-800 hover:dt-bg-gray-200"
                }

                if (props.disabled) {
                    return "dt-cursor-not-allowed dt-text-gray-400"
                }

                return "dt-border-gray-300 dt-bg-white dt-text-gray-500 hover:dt-bg-gray-50"
            })

            return { linkClasses }
        },
    })
</script>
