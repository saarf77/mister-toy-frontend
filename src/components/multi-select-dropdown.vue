<template>
    <div>
      <VueMultiselect
      v-model="selected"
      :options="options"
       
      :multiple="true"
      >
      </VueMultiselect>
    </div>
  </template>
  
  <script>
  import VueMultiselect from 'vue-multiselect'

  export default {
    components: { 
        VueMultiselect 
    },
    data () {
      return {
          selected:[],
          options: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"],
        
      }
    },
    watch:{
        selected:{
            handler(newValue, oldValue) {
            this.$emit('setFilter' , newValue)
            },
            deep: true
        }
    },

    methods:{
    
    }
  }
  </script>
  
  <style src="vue-multiselect/dist/vue-multiselect.css"></style>