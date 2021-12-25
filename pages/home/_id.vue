<script>
export default {
  async asyncData({ params, $dataApi, error }) {
    const response = await $dataApi.getHome(params.id)
    if (!response.ok) return error({ statusCode: response.status, message: response.statusText })
    return { home: response.json }
  },
  head() {
    return {
      title: this.home.title,
    }
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng)
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
      >
    </div>
    <h2>{{ home.title }} </h2>
    {{ home.pricePerNight }} / night<br>
    <img src="@/public/marker.svg" width="20" height="20" alt=""> {{ home.location.address }} {{ home.location.city }} {{ home.location.state }}  {{ home.location.country }}<br>
    <img src="@/public/star.svg" width="20" height="20" alt="">{{ home.reviewValue }}<br>
    {{ home.guests }} guests, {{ home.rooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath <br>
    {{ home.description }}
    <div ref="map" class="w-full md:w-screen-md h-prose content-center justify-center flex my-8 mx-auto" h-screen-md />
  </div>
</template>
<style lang="">

</style>
