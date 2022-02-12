<template>
    <div class="dt-jg-w-64">
        <label :for="defincion.code" class="dt-jg-sr-only">Search</label>
        <div class="dt-jg-filter dt-jg-relative dt-jg-rounded-md dt-jg-shadow-sm">
            <template v-if="defincion.typeControl === 0">
                <Datepicker 
                    :format="defincion.format"
                    :enableTimePicker="false"
                    v-model="defaultValue" 
                    @update:modelValue="emitirEvento($event,defincion)"/>
            </template>
            <template v-if="defincion.typeControl === 1">
                <Datepicker 
                    :timePicker="true"
                    :format="defincion.format"
                    enableTimePicker
                    v-model="defaultValue"
                    @update:modelValue="emitirEvento($event,defincion)"/>
            </template>
            <template v-if="defincion.typeControl === 2">
                <SearchInput @input="emitirEvento($event.target.value,defincion)" :value="defaultValue"/>

                <div class="dt-jg-absolute dt-jg-inset-y-0 dt-jg-right-0 dt-jg-pr-3 dt-jg-flex dt-jg-items-center dt-jg-pointer-events-none">
                    <SearchIcon class="dt-jg-text-gray-400"/>
                </div>
            </template>
            <template v-if="defincion.typeControl === 3">
                <Datepicker 
                    :format="defincion.format" 
                    range 
                    :enableTimePicker="false"
                    v-model="defaultValue"
                    @update:modelValue="emitirEvento($event,defincion)"/>
            </template>
            <template v-if="defincion.typeControl === 4">
                <SearchList 
                    :format="defincion.format"
                    :list="defincion.list"
                    @input="emitirEvento($event,defincion)"/>
            </template>
        </div>
    </div>
</template>

<script lang="ts">
    import { FilterDefinition } from "../../@types/FilterDefinition"
    import Datepicker from "vue3-date-time-picker";
    import { computed, defineComponent, onMounted, PropType, ref, SetupContext } from "vue"
    import SearchIcon from "./SearchIcon.vue"
    import SearchInput from "./SearchInput.vue"
    import SearchList from "./SearchList.vue"

    export default defineComponent({
        name: "Filter",
        components: { SearchInput, SearchIcon,Datepicker,SearchList },
        props: {
            definicionFiltro: { type: Object as PropType<FilterDefinition>, required: false },
        },

        emits: ["input"],
        setup(props,{emit}:SetupContext){
            const defincion = computed(()=>props.definicionFiltro as FilterDefinition);
            const defaultValue = ref();
            const emitirEvento = ($data,$filterData) => {
                //console.log($data)
                emit("input",{value:$data,filterData:$filterData})
            }
            onMounted(() => {
                defaultValue.value = props.definicionFiltro?.defaultVauel;
                if(defaultValue.value){
                    emitirEvento(defaultValue.value,defincion.value);
                }
            })
            return {
                defincion,
                defaultValue,
                emitirEvento,
            }
        },
    })
</script>

