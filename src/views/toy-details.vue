<template>
  <section v-if="toy" class="toy-details flex flex-col items-center gap-2">
    <article>
      <p><span class="fw-bold">ID:</span> {{ toy._id }}</p>
      <p><span class="fw-bold">Name:</span> {{ toy.name }}</p>
      <p><span class="fw-bold">Price:</span> {{ toy.price }}</p>
      <p><span class="fw-bold">Date:</span> {{ time }}</p>
      <p><span class="fw-bold">Labels:</span> {{ toy.labels.join(' , ') }}</p>
      <!-- <p><span class="fw-bold">Reviews:</span> {{ toy.reviews.join(' , ') }}</p> -->
    </article>
    <button @click="goBack" class="btn btn-primary">go back</button>

    <h2>Reviews</h2>

    <section v-if="toy.reviews">
      <article 
       v-editable = "isEditMode"
       v-for="({ content, user, id }, idx) in toy.reviews" :key="id">
        <button @click="toggleEditMode">edit review</button>
        <h3>{{ user }}</h3>
        <span @blur="updateReview($event, idx)">{{ content }}</span>
      </article>
    </section>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
  name: 'toy-detail',
  data() {
    return {
      toy: null,
      isEditMode: false,
    }
  },
  created() {
    const { _id } = this.$route.params
    console.log(this.$route.params)
    toyService.getById(_id).then((toy) => {
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
    updateReview({ target }, idx) {
      this.toy.reviews[idx].content = target.innerText
      this.$store.dispatch({ type: 'saveToy', toy: this.toy })
    },
    toggleEditMode() {
      this.isEditMode = !this.isEditMode
    },
  },
  computed: {
    // BOTH WAYS WORKS WELL CHOOSE ONE
    // time(){
    //  const date = new Date (this.toy.createdAt)
    //  const time = date.getUTCDate() + '/' + (+date.getMonth() + 1) + '/' + date.getFullYear()
    //  return time
    // }
    time() {
      const date = new Date(this.toy.createdAt)
      const time = (date.toLocaleDateString('en-GB'))
      return time
    }
  }

}
</script>
