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
  <div>
    Status: {{ error.statusCode }} Message: {{ error.message }}
  </div>
</template>
<style lang="">

</style>
