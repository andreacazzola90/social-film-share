<template>
  <div>

    <h1 class="title is-1">sono dentro {{viewID}}</h1>
    <div v-for="video in getVideosById(viewID)" :key="video.id">
      <p>{{video.name}}</p>
      <p>{{video.content}}</p>
      <p>{{video.id}}</p>
      <p>{{video.image.url}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'ListVideo',
  props: {
    viewID: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      loading: false
    }
  },
  beforeMount () {
    this.fetchVideos()
      .then(
        this.loading = false,
      )
      .catch(
        this.loading = false,
      )
  },
  computed: {
    ...mapGetters({
      getVideos: 'video/getVideos',
      getVideosById: 'video/getVideosById'
    })
  },
  methods: {
    ...mapActions({
      fetchVideos: 'video/fetchVideos'
    })
  }
}
</script>