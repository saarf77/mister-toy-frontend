<template>
  <section v-if="toyToEdit" class="toy-edit py-2">
    <form @submit.prevent="saveToy" class="form">
      <div class="form-control">
        <label for="txt" class="form-label">Toy Name</label>
        <input required v-model="toyToEdit.name" id="txt" type="text" class="form-input"
          placeholder="Enter your toy name here..." />
      </div>
      <div class="form-control">
        <label for="price" class="form-label">Toy Price</label>
        <input required v-model.number="toyToEdit.price" id="price" type="number" class="form-input" />
      </div>
      <div class="form-control">
        <select name="labels" id="">
          <option value="doll">Doll</option>
          <option value="on wheels">On wheels</option>
          <option value="box game">Box game</option>
          <option value="baby">Baby</option>
          <option value="puzzle">Puzzle</option>
          <option value="outdoor">Outdoor</option>
          <option value="art">Art</option>
        </select>
        <!-- <label for="price" class="form-label">Toy Speed</label> -->
        <!-- <input required v-model.number="toyToEdit.price" id="price" type="number" class="form-input" /> -->
      </div>
      <div class="btn-group">
        <button @click="saveToy" class="btn btn-info">save</button>
        <button @click="goBack" class="btn btn-danger-text">go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service'

export default {
  name: 'toy-edit',
  data() {
    return {
      toyToEdit: null,
    }
  },
  created() {
    const { _id } = this.$route.params
    if (_id) {
      toyService.getById(_id).then((toy) => {
        this.toyToEdit = toy
      })
    } else this.toyToEdit = toyService.getEmptyToy()
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
    saveToy() {
      this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit }).then(() => {
        this.$router.push('/toy')
      })
    },
  },
}
</script>
