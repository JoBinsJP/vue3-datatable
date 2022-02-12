<template>
    <div class="dt-jg-pagination-size-wrapper dt-jg-w-full dt-jg-flex dt-jg-justify-end sm:dt-jg-w-auto">
        <div>
            <label for="location" class="dt-jg-sr-only">Per page</label>
            <select :value="value"
                    name="per_page"
                    class="dt-jg-pagination-size dt-jg-block dt-jg-w-full dt-jg-pl-3 dt-jg-pr-5 dt-jg-py-2 dt-jg-text-base dt-jg-border
                        dt-jg-border-gray-300 sm:dt-jg-text-sm dt-jg-rounded-md dt-jg-outline-none focus:dt-jg-ring-1 focus:dt-jg-ring-inset"
                    @input="emitirEvento($event)">
                <option v-for="size in obtenerOptions()"
                        :key="`per_page_${size}`"
                        :value="size"
                        :selected="size === value"
                        v-text="size"></option>
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
        methods:{
            emitirEvento($event){
                this.$emit("input",$event.target.value)
            },
            obtenerOptions(): any[]{
                return this.options
            },
        },
    })
</script>

