<template lang="pug">
  #poems
    h1 Стихи
    .poems
      .poems__item(v-for="poem in poems")
        router-link(:to="{path: 'poem/' + poem.url}") {{poem.name}}
</template>

<script>
import axios from 'axios'
export default {
  name: 'poems',
  data() {
    return {
      poems: []
    }
  },
  mounted() {
    axios.get('http://localhost:1337/poems')
      .then(res => {
        this.poems = res.data.poems
        // console.log(res.data.poems);
      })
      .catch(err => {
        console.log(err);
      })
  }
}
</script>
