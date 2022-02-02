<template>
    <th scope="col" class="dt-jg-table-thead-th dt-jg-px-6 dt-jg-py-3 dt-jg-text-left dt-jg-text-xs dt-jg-font-medium dt-jg-text-gray-500 dt-jg-uppercase dt-jg-tracking-wider">
        <slot name="checkbox" :fnSelectAll="checkBoxClickHandler" :indeterminated="checkBox?.indeterminate" :checked="checkBox?.checked">
            <input ref="checkBox" class="dt-jg-checkbox" type="checkbox" @click="checkBoxClickHandler"/>
        </slot>
    </th>
</template>

<script lang="ts">
    import { computed, defineComponent, ref, SetupContext, watch } from "vue"

    export default defineComponent({
        name: "TableHeadCheckBox",
        props: {
            rows: { type: Array, required: true },
            elementsSelected: { type: Array, required: true },
        },
        emits: ["selectAll"],
        setup(props, { emit }: SetupContext) {
            const checkedWatch = computed<boolean>(() => props.rows && props.elementsSelected && props.rows.length === props.elementsSelected.length)
            const indeterminateWatch = computed<boolean>(() => props.rows && props.elementsSelected && props.elementsSelected.length < props.rows.length && props.elementsSelected.length > 0)
            const checkBox = ref<HTMLInputElement>();
            //const checked = ref<boolean>(false);

            const checkBoxClickHandler = () => {
                
                emit("selectAll",checkBox.value?.checked || false)
            }
            watch([checkedWatch, indeterminateWatch], 
                ([check, indeterminate]) => {
                if(!indeterminate){
                    if(checkBox.value){
                        checkBox.value.checked = check;
                    }
                }
                if(checkBox.value){
                    checkBox.value.indeterminate = indeterminate;   
                }
                
                /*if(checkBox.value){
                    console.log(checkBox.value.checked)
                    console.log(checkBox.value.indeterminate)
                }*/
            }, {
                immediate: true,
                deep:true
            })

            return {
                checkBox,
                checkBoxClickHandler
            }
        }
    })
</script>
