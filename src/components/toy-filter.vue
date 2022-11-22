


<template>
  <section class="toy-filter">
   
    <multi-select @setFilter="setSelected"  />
    <input
      v-focus
      v-model="filterBy.name"
      @input="setFilter"
      type="text"
      class="form-input"
      placeholder="Search toy..."
    />
    <select @change="setFilter" v-model="filterBy.sort">
      <option value="none">none</option>
      <option value="name">name</option>
      <option value="price">price</option>
      <option value="createdAt">created</option>
    </select>
    <label>
      Show only toys in stock

      <input name="inStock" @change="setFilter" type="checkbox" />
    </label>
  </section>
</template>

<script>
import multiSelect from './multi-select-dropdown.vue'
export default {
  name: 'toy-filter',
  data() {
    return {
      filterBy: {
        name: '',
        label:[],
        sort:'none',
        inStock: false,
      },
    
    }
  },
  methods: {
    setSelected(selected){
      this.filterBy.label = [...selected]
      this.$emit('setFilter', {...this.filterBy})
    },
    setFilter({target}) {
      if(target.name === 'inStock'){
        this.filterBy.inStock = !this.filterBy.inStock
      }
      this.$emit('setFilter', {...this.filterBy})
    },
  },
  components:{
    multiSelect
  }
}
</script>

