<script>
export default {
  async asyncData({ params, $dataApi, error }) {
    const responses = await Promise.all([
      $dataApi.getHome(params.id),
      $dataApi.getReviewsByHomeId(params.id),
      $dataApi.getUserByHomeId(params.id),
    ])
    const badResponse = responses.find(response => !response.ok)

    if (badResponse) return error({ statusCode: badResponse.status, message: badResponse.statusText })

    // const homeResponse = await $dataApi.getHome(params.id)
    // if (!homeResponse.ok) return error({ statusCode: homeResponse.status, message: homeResponse.statusText })

    // const reviewResponse = await $dataApi.getReviewsByHomeId(params.id)
    // if (!reviewResponse.ok) return error({ statusCode: reviewResponse.status, message: reviewResponse.statusText })

    // const userResponse = await $dataApi.getUserByHomeId(params.id)
    // if (!userResponse.ok) return error({ statusCode: userResponse.status, message: userResponse.statusText })

    return { home: responses[0].json, reviews: responses[1].json.hits, user: responses[2].json.hits[0] }
  },
  head() {
    return {
      title: this.home.title,
    }
  },
  mounted() {
    this.$maps.showMap(this.$refs.map, this.home._geoloc.lat, this.home._geoloc.lng)
  },
  methods: {
    formatDate(dateStr) {
      const date = new Date(dateStr)
      return date.toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
    },
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
    <img src="/marker.svg" width="20" height="20" alt=""> {{ home.location.address }} {{ home.location.city }} {{ home.location.state }}  {{ home.location.country }}<br>
    <img src="/star.svg" width="20" height="20" alt="">{{ home.reviewValue }}<br>
    {{ home.guests }} guests, {{ home.bedrooms }} rooms, {{ home.beds }} beds, {{ home.bathrooms }} bath <br>
    {{ home.description }}
    <div ref="map" class="w-full md:w-screen-md h-prose content-center justify-center flex my-8 mx-auto" h-screen-md />
    <div v-for="review in reviews" :key="review.objectID">
      <img :src="review.reviewer.image" alt=""> <br>
      {{ review.reviewer.name }} <br>
      {{ formatDate(review.date) }} <br>
      <short-text :text="review.comment" :target="150" />
    </div>
    <img :src="user.image" alt=""> <br>
    {{ user.name }} <br>
    {{ formatDate(user.joined) }} <br>
    {{ user.reviewCount }} <br>
    <short-text :text="user.description" target="150" /> <br>
  </div>
</template>
<style lang="">

</style>
