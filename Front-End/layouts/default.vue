<template>
  <div>
    <BulmaNavigation />
    <NavCategory />
    <nuxt/>
  </div>
</template>

<script>
import BulmaNavigation from '~/components/BulmaNavigation'
import NavCategory from '~/components/NavCategory'
export default {
  components: {
    BulmaNavigation,
    NavCategory
  }
}
</script>
