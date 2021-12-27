<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    target: {
      type: [Number, String],
      required: true,
    },
  },
  data() {
    return {
      isExpanded: false,
      chunks: [],
    }
  },
  computed: {
    isTooLong() {
      return this.chunks.length === 2
    },
    displayText() {
      if (!this.isTooLong || this.isExpanded) return this.chunks.join(' ')
      return `${this.chunks[0]}...`
    },
  },
  created() {
    this.chunks = this.getChunks()
  },
  methods: {
    getChunks() {
      const position = this.text.indexOf(' ', this.target)
      if (this.text.length <= this.target || position === -1) return [this.text]

      return [this.text.substring(0, position), this.text.substring(position)]
    },
  },
}
</script>
<template lang="">
  <span>{{ displayText }}
    <button v-if="isTooLong && !isExpanded" text-blue hover:underline @click="isExpanded = true">Expand</button>
    <button v-if="isTooLong && isExpanded" text-blue hover:underline @click="isExpanded = false">Collapse</button>
  </span>
</template>
<style lang="">

</style>
