<script setup>
const props = defineProps({
    modelValue:String,
    type:{
        default:'text',
        type:String
    },
    placeholder: String,

})
const emit = defineEmits(['update:modelValue'])
const itemClick = (t)=>{
    emit ('update:modelValue',t.target.value)
}

</script>
<template>
    <div>
        <input :type="type" :value="modelValue"
        :placeholder="placeholder" @input="itemClick"
        >

    </div>
</template>