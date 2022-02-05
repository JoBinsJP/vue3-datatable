<template>
    <div>
        <PerfectScrollbar 
            @click="closeDropDown" 
            :options="options" 
            style="padding-right: 1.6rem !important;height: 2.35rem;" 
            class="dt-jg-scroll-container dt-jg-block dt-jg-border dt-jg-border-gray-300 dt-jg-pr-10 dt-jg-px-2 dt-jg-py-2 
                            dt-jg-rounded-md dt-jg-w-full dt-jg-outline-none focus:dt-jg-ring-1 focus:dt-jg-ring-inset sm:dt-jg-text-sm dt-jg-text-left dt-jg-bg-white">
            <div class="dt-jg-tag dt-jg-mx-0.5 dt-jg-text-gray-400" v-for="(item,key) in _selectedList" :key="key">
                <div class="dt-jg-flex dt-jg-flex-row">
                    <span class="dt-jg-m-auto">{{item.description}}</span>
                    <CloseIcon class="dt-jg-m-auto" @click.stop="closeItem(item)"/>
                </div>
            </div>
        </PerfectScrollbar>
            
        
        <ul class="dt-jg-dropdown dt-jg-ul dt-jg-block dt-jg-border dt-jg-border-gray-300 dt-jg-pr-10 dt-jg-px-2 dt-jg-py-2
                                        dt-jg-rounded-md dt-jg-w-full dt-jg-outline-none focus:dt-jg-ring-1 focus:dt-jg-ring-inset sm:dt-jg-text-sm dt-jg-text-left dt-jg-bg-white" 
            :class="{'dt-jg-dropdown-open':open}">
            <li class="dt-jg-li hover:dt-jg-li" v-for="(item,key) in _list" :key="key">
                <span class="dt-jg-flex dt-jg-flex-row">
                    <input 
                        ref="checkBox" 
                        class="dt-jg-checkbox dt-jg-mx-0.5" 
                        type="checkbox" 
                        @change="itemSelect($event,item)" 
                        :checked="verifyIsChecked(item)"/>
                    <span class="dt-jg-mx-0.5">{{item.description}}</span>
                </span>
            </li>
        </ul>

        <div class="dt-jg-dropdown-button dt-jg-absolute dt-jg-inset-y-0 dt-jg-right-0 dt-jg-pr-3 dt-jg-flex dt-jg-items-center dt-jg-pointer-events-none ">
            <DropDownDownIcon v-if="open"  class="dt-jg-text-gray-400"/>
            <DropDownUpIcon v-if="!open"  class="dt-jg-text-gray-400"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { computed, defineComponent, PropType, ref, SetupContext } from "vue"
    import DropDownDownIcon          from "./DropDownDownIcon.vue"
    import DropDownUpIcon          from "./DropDownUpIcon.vue"
    import CloseIcon          from "./CloseIcon.vue"
    import moment from "moment";
    import FilterDataList from "lib/DataTable/@types/FilterDataList";
    import { PerfectScrollbar } from "vue3-perfect-scrollbar"
    import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css"

    export default defineComponent({
        name: "SearchList",
        components:{
            DropDownDownIcon,
            DropDownUpIcon,
            PerfectScrollbar,
            CloseIcon,
        },
        props: {
            value: { type: Object, required: false,default:null },
            format: { type: String,required: false, default:"" },
            list: { type: Array as PropType<FilterDataList[]>, required: true,default:[] as FilterDataList[] },
            enabled:{ type: Boolean, required: false, default:true },
        },
        emits: ["input"],
        setup(props, {emit}:SetupContext){
            const options = ref({
                suppressScrollY:true,
            })
            const formatDateTime = ($date: any) => {
                return moment($date).format(props.format.replace("dd","DD"));
            }
            const settings = ref({
                suppressScrollY: false,
                suppressScrollX: false,
                wheelPropagation: false,
            })
            const _list = computed(()=>props.list);
            const _selectedList = ref([] as FilterDataList[])
            const _enabled = computed(()=>props.enabled || false);
            const _value = computed(()=>props.value);
            /*const _value1 = ref(props.value);
            const _value2 = ref(props.value);
            const _value = computed(()=>`From ${formatDateTime(_value1.value)} To ${formatDateTime(_value2.value)}`);*/
            const _format = computed(()=>props.format || "");
            const open= ref(false);
            const closeDropDown = () => {
                //console.log('hola')
                open.value = !open.value;
            };
            const itemSelect = ($event,$item:FilterDataList) => {
                //console.log($event.target.checked);
                const item = _list.value.find(d=>d.code === $item.code);
                const indexElementSelected = _selectedList.value.findIndex(d=>d.code === $item.code);
                if(item){
                    if($event.target.checked){
                        if(indexElementSelected < 0){
                            _selectedList.value.push(item);
                        }
                    }
                    else{
                        if(indexElementSelected > -1){
                            _selectedList.value.splice(indexElementSelected,1)
                        }
                    }
                }
                emit("input",_selectedList.value)
            }
            const closeItem = ($item:FilterDataList) => {
                //console.log($event.target.checked);
                const item = _list.value.find(d=>d.code === $item.code);
                const indexElementSelected = _selectedList.value.findIndex(d=>d.code === $item.code);
                if(item){
                    if(indexElementSelected > -1){
                        _selectedList.value.splice(indexElementSelected,1)
                    }
                }
            }
            const verifyIsChecked = ($item:FilterDataList) => {
                const indexElementSelected = _selectedList.value.findIndex(d=>d.code === $item.code);
                return indexElementSelected > -1;
            }
            return {
                _enabled,
                _format,
                open,
                _value,
                _list,
                settings,
                _selectedList,
                options,
                closeDropDown,
                formatDateTime,
                itemSelect,
                closeItem,
                verifyIsChecked,
            }
        },
    })
</script>
