<template lang="pug">
  #poem
    .poem-page.grid.grid--container
      .row
        .col.col--sm-3
        .col.col--sm-6
          h1.h1 {{poem.name}}
          .poem(v-html="poem.content")
        .col.col--sm-3
          .popular
</template>

<script>
import axios from 'axios'
export default {
  name: 'poem',
  data() {
    return {
      poem: '',
      poemLines: []
    }
  },
  mounted() {
    // console.log(this.$route.params.url)
    axios.get(`http://localhost:1337/poem/${this.$route.params.url}`)
      .then(res => {
        this.poem = res.data.poem[0];
      })
      .catch(err => {
        console.log(err);
      })
  }
}
</script>
