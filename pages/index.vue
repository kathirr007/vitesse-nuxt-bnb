<script>
import homes from '~/data/homes'
export default {
  data: () => ({
    homes: homes.slice(0, 3),
  }),
  head: () => ({
    title: 'Homepage',
    meta: [{
      name: 'description',
      content: 'This is a homepage..!',
      hid: 'description',
    }],
  }),
}
</script>
<template lang="">
  <div flex flex-wrap>
    <div
      v-for="home in homes"
      :key="home.objectID"
      rounded
      border-solid
      transition
      bg-gray-200
      hover:bg-gray-300
      flex
      class="transition"
      style="margin: 10px;"
    >
      <nuxt-link :to="`/home/${home.objectID}`" prefetch>
        <home-card :home="home" />
      </nuxt-link>
    </div>
  </div>
</template>
<style lang="">

</style>
