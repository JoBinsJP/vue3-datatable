<template>
    <div class="dt-jg-mb-3 dt-jg-w-full">
        <div class="dt-jg-w-64">
            <label for="email" class="dt-jg-sr-only">Search</label>
            <div class="dt-jg-relative dt-jg-rounded-md dt-jg-shadow-sm">
                <SearchInput :value="search" @input="emitirEvento($event)"/>

                <div class="dt-jg-absolute dt-jg-inset-y-0 dt-jg-right-0 dt-jg-pr-3 dt-jg-flex dt-jg-items-center dt-jg-pointer-events-none">
                    <SearchIcon class="dt-jg-text-gray-400"/>
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
            search: { type: String, required: false },
        },

        emits: ["input"],
        methods:{
            emitirEvento($event){
                this.$emit("input",$event.target.value)
            },
        },
    })
</script>

