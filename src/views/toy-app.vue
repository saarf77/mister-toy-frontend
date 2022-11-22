<template>
  <section class="toy-app container flex flex-col gap-1">
    <button @click="goToEdit" class="btn btn-secondary">Add a new toy</button>
    <toy-filter @setFilter="setFilter" />
    <toy-list @removeToy="removeToy" v-if="toys" :toys="toys" />
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'

export default {
  name: 'toy-app',
  data() {
    return {
      filterBy: null,
    }
  },
  computed: {
    toys() {
      return this.$store.getters.toys
    },
    
  },
  created() {
    this.$store.dispatch({ type: 'loadToys' })
  },
  methods: {
    
    setFilter(filterBy) {
      console.log('From toy-app', filterBy)
      this.$store.dispatch({ type: 'setFilter' ,filterBy})
    },
    goToEdit() {
      this.$router.push(`/toy/edit`)
    },
    removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy', _id: toyId })
    },
  },
  components: {
    toyList,
    toyFilter,
  },
}
</script>
