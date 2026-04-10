<script setup>
import { storeCart } from './cart';
const store =  storeCart()
import inputComponent from './input.vue';


import { ref,computed } from 'vue'
import Basket from './basket.vue';
const model = ref('')
const productArray = ([
  {id:1, name:'tovar1',count:1,price:1231,category:'product'},
  {id:2, name:'tovar2',count:1,price:1231,category:'fruit'},
  {id:3, name:'tovar3',count:1,price:1231,category:'vegetable'},
])

    const inputSearch = computed(()=>{
          return productArray.filter(item =>
            item.name.toLowerCase().includes((model.value || '').toLowerCase())
  )
    })
</script>

<template>
  <div>
   <inputComponent v-model="model"  />
  </div>

  <div class="flex">

      <div class="marginCard">
        <basket @add="store.addItem"
        @del="store.removeItem" v-for="item in inputSearch" :key="item.id"
        :itemArray="item" />

      </div>

      <div class="basked">Корзина
        <div v-for="item in store.baskedArr" :key="item.id"
        :itemArray="item" > {{ item.name }}{{ item.count }}{{ item.price }}

        {{ item.count }}
        <button class="buttonMin" @click="store.removeItem(item)">-</button>
        <button class="buttonMin"  @add="store.addItem">+</button>

      </div>
      <div class="lineCenter">
          <div class="solid"></div>
      </div>
      <span>Итого:</span>{{ store.newSum }}$


   </div>


</div>

</template>
<style>

.flex{
  display: flex;
  justify-content: center;
}
.buttonMin{
  border:solid 2px   rgb(29, 28, 34);
  margin: 10px;
  border-radius: 5px;
  height: 30px;
  width: 30px;

}
.lineCenter{
  display: flex;
  justify-content: center;
}
.marginCard{
  margin-top: 20px;
}
.basked{
  margin-top: 20px;
  width: 250px;
  max-heigh: 100px;
  border: 2px solid #333;
  border-radius: 5px;



}
.solid{

  height: 2px;
   width: 200px;
   background-color: #333;
}
</style>