<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <nuxt-link :to="{name: 'category'}" class="navbar-start">All</nuxt-link>
    <div v-for="category in getCategories" :key="category.id" class="navbar-start">
      <nuxt-link :to="{name: 'category-id', params: { id:category.name }}">{{category.name}}</nuxt-link>
    </div>    
  </div>

</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavCategory',
  data () {
    return {
      loading: false
    }
  },
  beforeMount () {
    this.fetchCategories()
      .then(
        this.loading = false,
      )
      .catch(
        this.loading = false,
      )
  },
  computed: {
    ...mapGetters({
      getCategories: 'category/getCategories'
    })
  },
  methods: {
    ...mapActions({
      fetchCategories: 'category/fetchCategories'
    })
  }
}
</script>
