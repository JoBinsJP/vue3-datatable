<template>
    <a href="#"
       class="dt-jg-pagination-jg-link dt-jg-relative dt-jg-inline-flex dt-jg-items-center dt-jg-px-4 dt-jg-py-2 dt-jg-border dt-jg-text-sm dt-jg-font-medium"
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
                    return "dt-jg-bg-gray-200 dt-jg-border-gray-300 dt-jg-text-gray-800 hover:dt-jg-bg-gray-200"
                }

                if (props.disabled) {
                    return "dt-jg-cursor-not-allowed dt-jg-text-gray-400"
                }

                return "dt-jg-border-gray-300 dt-jg-bg-white dt-jg-text-gray-500 hover:dt-jg-bg-gray-50"
            })

            return { linkClasses }
        },
    })
</script>
