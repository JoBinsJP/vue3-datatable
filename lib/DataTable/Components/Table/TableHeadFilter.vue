<template>
    <th scope="col" class="dt-jg-table-thead-filter-th dt-jg-text-gray-500">
        <!-- <slot name="checkbox" :fnSelectAll="checkBoxClickHandler" :indeterminated="checkBox?.indeterminate" :checked="checkBox?.checked">
            <input ref="checkBox" class="dt-jg-checkbox" type="checkbox" @click="checkBoxClickHandler"/>
        </slot> -->
        <template v-if="filterDef">
            <Filter v-if="filterEnable" :definicionFiltro="filterDef" @input="handleOnSearchChange"/>
        </template>
    </th>
</template>

<script lang="ts">
    import { debounce } from "../../utils/helpers";
    import { FilterDefinition } from "lib/DataTable/@types/FilterDefinition";
    import Filter from "../Filter/Filter.vue";
    import { computed, defineComponent, PropType, SetupContext } from "vue"

    export default defineComponent({
        name: "TableHeadFilter",
        props: {
            filterDefinition: { type: Object as PropType<FilterDefinition> || null, required: true,default:null },
            filterEnable: { type: Boolean, required: true },
        },
        components:{
            Filter,
        },
        emits: ["input"],
        setup(props, { emit }: SetupContext) {
            const filterDef = computed<FilterDefinition | null>(() => props.filterDefinition || null)

            const handleOnSearchChange = debounce((value,filter) => {
                emit("input",value,filter)
            })

            return {
                filterDef,
                handleOnSearchChange,
            }
        },
    })
</script>
