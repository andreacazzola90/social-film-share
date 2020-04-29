<template>
  <div class="container section">
      <h1>categoria: All</h1>
      inizio
      <ListVideo v-if="user" :user="user" />
      fine
  </div>
</template>

<script>
import ListVideo from '~/components/ListVideo'

export default {
  components: {
      ListVideo
  },
  middleware: 'authenticated',
  computed: {
    user() {
      return this.$store.state.auth.user
    }
  }
}
</script>