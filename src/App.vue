<template lang="pug">
  #app
    main-header
    .grid.grid--container
      router-view
</template>

<script>

import MainHeader from './components/Main-header.vue'
import Poem from './components/Poem.vue'

export default {
  name: 'app',
  data() {
    return {
    }
  },
  components: {
    MainHeader,
    Poem
  }
}

</script>

<style>
</style>