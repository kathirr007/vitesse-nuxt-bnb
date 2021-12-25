<script>
export default {
  name: 'HomeCard',
  props: {
    home: {
      type: Object,
      required: true,
    },
  },
}
</script>
<template lang="">
  <div class="pa-4">
    <img mx-auto class="block" :src="home.images[0]" :alt="home.title" style="width: 200px"> <br>
    {{ home.title }} <br>
    {{ home.location.address }} {{ home.location.city }} {{ home.location.state }}<br>
    {{ home.guests }} guests<br>
    {{ home.pricePerNight }} / night<br>
  </div>
</template>
<style lang="">

</style>
