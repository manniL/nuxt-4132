<template>
  <div class="container" :style="`background-color: ${realColor};`">
    <div class="links">
      <nuxt-link :to="`/articles/${page + 1}`" class="button--grey"
        >Next {{ page }}</nuxt-link
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  fetch({ store, params, error, query }) {
    const color = Math.trunc(Math.random() * 16777215).toString(16)
    return store.dispatch('change', { color: `#${color}` })
  },

  mounted() {
    console.log('---mounted')
  },

  beforeMount() {
    console.log('---beforeMount')
    this.realColor = this.color
  },

  computed: {
    ...mapGetters(['color', 'page'])
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  font-size: 46px;
}
</style>
