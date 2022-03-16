<template>
    <div v-if="sortable"
         :class="{'dt-flex dt-items-center': sortable}"
         @click="handleClick">
        <slot/>
        <template v-if="sortable">
            <slot v-if="direction === 'asc'" name="sorting-asc-icon">
                <SortIcon direction="up"/>
            </slot>
            <slot v-else-if="direction === 'desc'" name="sorting-desc-icon">
                <SortIcon direction="down"/>
            </slot>
            <slot v-else name="sorting-default-icon">
                <SortIcon direction="default"/>
            </slot>
        </template>
    </div>
</template>

<script lang="ts">
    import {
        computed,
        defineComponent,
    }               from "vue"
    import SortIcon from "../SortIcon.vue"

    export default defineComponent({
        name: "ColumnSorting",
        components: { SortIcon },
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
        emits: ["clicked"],
        setup(props, { emit }) {
            const sortedColumns = computed(() => {
                if (!props.sort) {
                    return new Map()
                }

                return props.sort.split(",").reduce((acc, column) => {
                    const [key, order] = column.split(":")
                    acc.set(key, order || "asc")

                    return acc
                }, new Map())
            })

            const direction = computed(() => {
                return sortedColumns.value.get(props.sortable) ?? ""
            })

            const handleClick = () => {
                if (props.sortable) {
                    const updated: string = {
                        asc: "desc",
                        desc: "",
                    }[direction.value] ?? "asc"

                    if (!props.multiple) {
                        emit("clicked", updated === "" ? "" : `${props.sortable}:${updated}`)
                        return
                    }

                    const sorted = sortedColumns.value

                    if (updated === "") {
                        sorted.delete(props.sortable)
                    } else {
                        sorted.set(props.sortable, updated)
                    }

                    const sortedString = []

                    sorted.forEach((value, key) => {
                        sortedString.push(`${key}:${value}`)
                    })

                    emit("clicked", sortedString.join(","))
                }
            }

            return {
                direction,
                handleClick,
            }
        },
    })
</script>
