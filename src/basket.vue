<script setup>
const props= defineProps({
  tovar:Object,
})
const emit = defineEmits(['add','del'])
const addTovar = ()=>{
  emit ('add',props.tovar)
}
const delTovar = () =>{
  emit('del',props.tovar)
}
</script>
<template>
  <div>

    <button class="buttonMax" @click="addTovar" > {{ tovar.name }}</button>
  </div>
  <div>

  </div>
</template>
<style>
*{
  background-color: aliceblue;
  color: rgb(29, 28, 34);
  font-size: 20px;

}

.buttonMax,.buttonMin{

  border:solid 2px   rgb(29, 28, 34);
  margin: 10px;
  border-radius: 5px;
  height: 30px;
  width: 70px;
}
</style>