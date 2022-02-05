<template>
    <div style="padding-right: 1.6rem !important;" class=" dt-jg-block dt-jg-border dt-jg-border-gray-300 dt-jg-pr-10 dt-jg-px-2 dt-jg-py-2
                                    dt-jg-rounded-md dt-jg-w-full dt-jg-outline-none focus:dt-jg-ring-1 focus:dt-jg-ring-inset sm:dt-jg-text-sm dt-jg-text-left dt-jg-bg-white dt-jg-truncate" @click="closeDropDown">
        {{formatDateTime(_value1)}} To {{formatDateTime(_value2)}}
    </div>
    <ul class="dt-jg-dropdown dt-jg-ul dt-jg-block dt-jg-border dt-jg-border-gray-300 dt-jg-pr-10 dt-jg-px-2 dt-jg-py-2
                                    dt-jg-rounded-md dt-jg-w-full dt-jg-outline-none focus:dt-jg-ring-1 focus:dt-jg-ring-inset sm:dt-jg-text-sm dt-jg-text-left dt-jg-bg-white" :class="{'dt-jg-dropdown-open':open}">
        <li class="dt-jg-li hover:dt-jg-li">
            <Datepicker :enable-time-picker="_enabled" :format="_format" id="control" v-model="_value1" @update:modelValue="emitirEventoPrimerDatePicker"/>
        </li>
        <li class="dt-jg-li hover:dt-jg-li">
            <Datepicker :enable-time-picker="_enabled" :format="_format" id="control" v-model="_value2" @update:modelValue="emitirEventoSegundoDatePicker"/>
        </li>
    </ul>

    <div class="dt-jg-absolute dt-jg-inset-y-0 dt-jg-right-0 dt-jg-pr-3 dt-jg-flex dt-jg-items-center dt-jg-pointer-events-none">
        <DropDownDownIcon v-if="open"  class="dt-jg-text-gray-400" />
        <DropDownUpIcon v-if="!open"  class="dt-jg-text-gray-400" />
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, ref } from "vue"
    import SearchInput         from "./SearchInput.vue"
    import DropDownDownIcon          from "./DropDownDownIcon.vue"
    import DropDownUpIcon          from "./DropDownUpIcon.vue"
    import Datepicker from "vue3-date-time-picker";
    import moment from 'moment';

    export default defineComponent({
        name: "SearchDateRange",
        components:{
            SearchInput,
            DropDownDownIcon,
            DropDownUpIcon,
            Datepicker
        },
        props: {
            value: { type: Date, required: false },
            format: {type: String, default:null},
            enabled:{type: Boolean, required: false, default:true}
        },
        emits: ["input"],
        methods:{
            emitirEventoPrimerDatePicker($data){
                console.log($data)
                this._value1 = $data;
                this.$emit("input",this._value)
            },
            emitirEventoSegundoDatePicker($data){
                console.log($data)
                this._value2 = $data;
                this.$emit("input",this._value)
            },
        },
        setup(props){
            const formatDateTime = ($date: any) => {
                return moment($date).format(props.format.replace('dd','DD'));
            }
            const _enabled = computed(()=>props.enabled);
            const _value1 = ref(props.value);
            const _value2 = ref(props.value);
            const _value = computed(()=>`From ${formatDateTime(_value1.value)} To ${formatDateTime(_value2.value)}`);
            const _format = computed(()=>props.format);
            const open= ref(false);
            const closeDropDown = () => {
                console.log('hola')
                open.value = !open.value;
            };
            return {
                _enabled,
                _format,
                open,
                _value,
                _value1,
                _value2,
                closeDropDown,
                formatDateTime,
            }
        },
    })
</script>
