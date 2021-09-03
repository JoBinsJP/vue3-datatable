<template>
    <input :value="value"
           type="search"
           name="search"
           class="dt__filter__search dt-block dt-border dt-border-gray-300 dt-pr-10 dt-px-2 dt-py-2
                                    dt-rounded-md dt-w-full dt-outline-none focus:dt-ring-1 focus:dt-ring-inset sm:dt-text-sm"
           v-bind="$attrs">
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "SearchInput",

        props: {
            value: { type: String, required: true },
        },
    })
</script>
