<template>
    <td class="dt-jg-table-tbody-td dt-jg-px-6 dt-jg-py-4 dt-jg-whitespace-nowrap dt-jg-text-sm dt-jg-font-medium dt-jg-text-gray-500">
        <slot name="checkbox" :fnSelectRow="checkBoxClickHandler" :checked="checkBox?.checked" :index="index">
            <input ref="checkBox" class="dt-jg-checkbox" type="checkbox" @click="checkBoxClickHandler"/>
        </slot>
    </td>
</template>

<script lang="ts">
    import { computed, defineComponent, ref, SetupContext, watch } from "vue"

    export default defineComponent({
        name: "TableBodyCheckBox",
        props: {
            rowIndex: { type: Number, required: true },
            elementsSelected: { type: Array, required: true },
        },
        emits: ["selectRow"],
        setup(props, { emit }: SetupContext) {
            const checked = computed<boolean>(() => props.elementsSelected.findIndex(d=>d === props.rowIndex) > -1)
            const checkBox = ref<HTMLInputElement>();
            const index = computed(()=>props.rowIndex);
            const checkBoxClickHandler = () => {
                
                emit("selectRow",checkBox.value?.checked || false,index.value)
            }
            watch(
                checked, 
                (_checked) => {
                    if(checkBox.value){
                        checkBox.value.checked = _checked
                    }
                    //console.log(props.elementsSelected)
                }, {
                    immediate: true,
                    deep:true,
                },
            )
            return {
                checked,
                checkBox,
                index,
                checkBoxClickHandler,
            }
        },
    })
</script>
