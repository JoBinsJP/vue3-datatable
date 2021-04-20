<template>
    <a href="#"
       class="relative inline-flex items-center px-4 py-2 border text-sm font-medium"
       :class="linkClasses"
       v-on="{...$attrs}">
        <slot/>
    </a>
</template>

<script lang="ts">
    import { computed } from "vue"

    export default {
        name: "PaginationLink",

        props: {
            active: { type: Boolean, required: false, default: false },
            disabled: { type: Boolean, required: false, default: false },
        },

        setup(props) {
            const linkClasses = computed(() => {
                if (props.active) {
                    return "bg-gray-200 border-gray-300 text-gray-800 hover:bg-gray-200"
                }

                if (props.disabled) {
                    return "cursor-not-allowed text-gray-400"
                }

                return "border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
            })

            return { linkClasses }
        },
    }
</script>
