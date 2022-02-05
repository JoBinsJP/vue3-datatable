<template>
    <input :value="value"
           type="search"
           name="search"
           :disabled="!enabled"
           class=" dt-jg-block dt-jg-border dt-jg-border-gray-300 dt-jg-pr-10 dt-jg-px-2 dt-jg-py-2
                                    dt-jg-rounded-md dt-jg-w-full dt-jg-outline-none focus:dt-jg-ring-1 focus:dt-jg-ring-inset sm:dt-jg-text-sm"
           v-bind="$attrs">
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "SearchInput",

        props: {
            value: { type: String, required: false },
            enabled:{type: Boolean, required: false, default:true}
        },
    })
</script>
