import { defineStore } from "pinia";
import {  computed, ref } from "vue";
export const storeCart = defineStore('cardStore', ()=>{
const newCount= ref(0)
const baskedArr = ref([])
const addItem =(item)=>{
    const add = baskedArr.value.find(i =>i.id === item.id)
    if(add){
        add.count++
        console.log(baskedArr.value)
    }
     else{
        baskedArr.value.push(item)
     }
}

    const removeItem = (item)=>{
        const index =  baskedArr.value.findIndex(i => i.id === item.id)
        if(index === -1)return
        if(baskedArr.value[index].count > 1)
        {
           baskedArr.value[index].count--
            console.log(item.count)
        }
        else{
           baskedArr.value.splice(index,1)
        }

    }
    const newSum = computed(()=>{
       return baskedArr.value.reduce((sum,item)=> sum +item.price * item.count,0)
    })





    return{
        baskedArr,
        removeItem,
        addItem,
        newCount,
        newSum,

        // ComputedSum,

    }
})