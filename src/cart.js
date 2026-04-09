import { defineStore } from "pinia";
import {  computed, ref } from "vue";
export const storeCart = defineStore('cardStore', ()=>{
const newCount= ref(0)
const newMass = ref([])
const addItem =(item)=>{
    const add = newMass.value.find(i =>i.id === item.id)
    if(add){
        add.count++
        console.log(newMass.value)
    }
     else{
        newMass.value.push(item)
     }
}

    const removeItem = (item)=>{
        const index =  newMass.value.findIndex(i => i.id === item.id)
        if(index === -1)return
        if(newMass.value[index].count > 1)
        {
            newMass.value[index].count--
            console.log(item.count)
        }
        else{
            newMass.value.splice(index,1)
        }

    }
    const newSum = computed(()=>{
       return newMass.value.reduce((sum,item)=> sum +item.price * item.count,0)
    })




    return{
        newMass,
        removeItem,
        addItem,
        newCount,
        newSum,
        // ComputedSum,

    }
})