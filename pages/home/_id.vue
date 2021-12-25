<script>
import homes from '~/data/homes'
export default {
  data: () => ({
    home: {},
  }),
  head() {
    return {
      title: this.home.title,
    }
  },
  async created() {
    const home = homes.find(home => home.objectID === this.$route.params.id)
    const homeData = await this.$dataApi.getHome(this.$route.params.id)
    console.log(homeData)
    this.home = home
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng)
  },
  methods: {

  },
}
</script>
<template lang="">
  <div p-8>
    <div class="flex flex-wrap -m-2 mb-8 justify-center">
      <img
        v-for="(image, i) in home.images"
        :key="image"
        width="200"
        height="150"
        rounded
        m-2
        :src="image"
        :alt="`Picture ${i+1}: ${home.title}`"
      />
    </div>
    <h2>{{ home.title }}</h2>
    {{ home.pricePerNight }} / night<br />
    <img src="/images/marker.svg" width="20" height="20" alt=""> {{ home.location.address }} {{ home.location.city }} {{ home.location.state }}  {{ home.location.country }}<br />
    <img src="/images/star.svg" width="20" height="20" alt="">{{ home.reviewValue }}<br />
    {{ home.guests }} guests, {{ home.rooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath <br />
    {{ home.description }}
    <div ref="map" class="w-full md:w-screen-md h-prose content-center justify-center flex my-8 mx-auto" h-screen-md></div>
  </div>
</template>
<style lang="">

</style>
