<template>
  <div class="container section">
      <h1>categoria: {{viewID}}</h1>
      <ListVideo :viewID="viewID" />
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
    viewID(){
        return this.$route.params.id
    }
  }
}
</script>