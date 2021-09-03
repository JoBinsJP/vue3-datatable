<template>
    <div class="dt__pagination_size_wrapper dt-w-full dt-flex dt-justify-end sm:dt-w-auto">
        <div>
            <label for="location" class="dt-sr-only">Per page</label>
            <select :value="value"
                    name="per_page"
                    class="dt__pagination_size dt-block dt-w-full dt-pl-3 dt-pr-5 dt-py-2 dt-text-base dt-border
                        dt-border-gray-300 sm:dt-text-sm dt-rounded-md dt-outline-none focus:dt-ring-1 focus:dt-ring-inset"
                    @input="$emit('input', $event.target.value)">
                <option v-for="size in options"
                        :key="`per_page_${size}`"
                        :value="size"
                        :selected="size === value"
                        v-text="size"/>
            </select>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"

    export default defineComponent({
        name: "PaginationSize",

        props: {
            value: { type: [Number, String], required: true },
            options: { type: Array, required: true },
        },

        emits: ["input"],
    })
</script>
