<template>
  <GoogleMap
    api-key="AIzaSyAV_zVjXKofPeV5nwAzfNKJ7Gt4VEMjHOw"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="10"
  >
    <Marker v-for="m in markers" :options="m" @click="center = m.position" />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  props: {},
  components: { GoogleMap, Marker },
  data() {
    return {
      center: { lat: 31.890267	, lng: 35.010397 },
      markers: [
        {
          title: 'Modiin- HQ',
          label: 'HQ',
          position: { lat: 31.890267	, lng: 35.010397 },
        },
        {
          title: 'Jerusalem',
          label: '1',
          position: { lat: 31.7683, lng: 35.2137 },
        },
        {
          title: 'Tel Aviv',
          label: '2',
          position: { lat: 32.0853, lng: 34.7818 },
        },
      ],
    }
  },
}
</script>
