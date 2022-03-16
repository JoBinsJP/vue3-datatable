<template>
    <th scope="col"
        class="dt__table__thead__th dt-text-left dt-text-xs dt-font-medium dt-text-gray-500 dt-uppercase dt-tracking-wider"
        :class="{
            'dt-cursor-pointer': sortable,
            'dt-px-6 dt-py-3': !sortable
        }">
        <ColumnSorting v-if="sortable"
                       class="dt-px-6 dt-py-3"
                       :sortable="sortable"
                       :sort="sort"
                       :multiple="multiple"
                       @clicked="handleClick">
            <slot/>
        </ColumnSorting>
        <slot v-else/>
    </th>
</template>

<script lang="ts">
    import {
        defineComponent,
        SetupContext,
    }                    from "vue"
    import ColumnSorting from "./ColumnSorting.vue"

    export default defineComponent({
        name: "TableHeadCell",
        components: { ColumnSorting },
        props: {
            sortable: {
                type: String,
                required: false,
                default: "",
            },
            sort: {
                type: String,
                required: false,
                default: "",
            },
            multiple: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
        emits: ["sorting"],

        setup(props, { emit }: SetupContext) {
            const handleClick = (sort) => {
                emit("sorting", sort)
            }

            return {
                handleClick,
            }
        },
    })
</script>
