<template>
    <div class="dt-jg-w-64">
        <label :for="defincion.code" class="dt-jg-sr-only">Search</label>
        <div class="dt-jg-relative dt-jg-rounded-md dt-jg-shadow-sm">
            <template v-if="defincion.typeControl === 2">
                <SearchInput :value="defincion.defaultVauel" @input="emitirEvento($event.target.value,defincion)"/>

                <div class="dt-jg-absolute dt-jg-inset-y-0 dt-jg-right-0 dt-jg-pr-3 dt-jg-flex dt-jg-items-center dt-jg-pointer-events-none">
                    <SearchIcon class="dt-jg-text-gray-400"/>
                </div>
            </template>
            <template v-if="defincion.typeControl === 1">
                <Datepicker :format="defincion.format" id="control" v-model="defincion.defaultVauel" @update:modelValue="emitirEvento($event,defincion)" timePicker />
            </template>
            <template v-if="defincion.typeControl === 0">
                <Datepicker :format="defincion.format" id="control" v-model="defincion.defaultVauel" @update:modelValue="emitirEvento($event,defincion)" />
            </template>
            
        </div>
    </div>
</template>

<script lang="ts">
    import { FilterDefinition, TypeControl } from "../../@types/FilterDefinition"
    import Datepicker from 'vue3-date-time-picker';
    import { computed, defineComponent, PropType } from "vue"
    import SearchIcon          from "./SearchIcon.vue"
    import SearchInput         from "./SearchInput.vue"

    export default defineComponent({
        name: "Filter",

        components: { SearchInput, SearchIcon,Datepicker },

        props: {
            definicionFiltro: { type: Object as PropType<FilterDefinition>, required: false },
        },

        emits: ["input"],
        methods:{
            emitirEvento($data,$filterData){
                //console.log($data)
                this.$emit("input",$data,$filterData)
            },
            formatDatePicker(date: Date,defnition: FilterDefinition){
                if(defnition.typeControl === TypeControl.date){
                    return `${String(date.getDay()).padStart(2,"0")}-${String(date.getMonth()).padStart(2,"0")}-${date.getFullYear()} ${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`
                }
                if(defnition.typeControl === TypeControl.hour){
                    return `${String(date.getHours()).padStart(2,"0")}:${String(date.getMinutes()).padStart(2,"0")}`
                }
            },
        },
        setup(props){
            const defincion = computed(()=>props.definicionFiltro as FilterDefinition);
            return {
                defincion
            }
        }
    })
</script>

