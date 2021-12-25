<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
<template lang="">
  <div text-center>
    <img mx-auto class="w-1/2" src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif" alt=""> <br>
    <h1 text-3xl>
      Error..!
    </h1>
    <h2 class="text-lg">
      {{ error.statusCode }} {{ error.message }}
      <div>
        Please navigate to
        <nuxt-link text-teal-700 hover:underline to="/">
          Home
        </nuxt-link>
      </div>
    </h2>
  </div>
</template>
<style lang="">

</style>
