<template>
    <div class="dt__filter dt-mb-3 dt-w-full">
        <div class="dt-w-64">
            <label for="email" class="dt-sr-only">Search</label>
            <div class="dt-relative dt-rounded-md dt-shadow-sm">
                <SearchInput :value="search" @input="$emit('input', $event.target.value)"/>

                <div class="dt-absolute dt-inset-y-0 dt-right-0 dt-pr-3 dt-flex dt-items-center dt-pointer-events-none">
                    <SearchIcon class="dt-text-gray-400"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue"
    import SearchIcon          from "./SearchIcon.vue"
    import SearchInput         from "./SearchInput.vue"

    export default defineComponent({
        name: "Filter",

        components: { SearchInput, SearchIcon },

        props: {
            search: { type: String, required: true },
        },

        emits: ["input"],
    })
</script>
