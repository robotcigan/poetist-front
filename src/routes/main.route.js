import Vue from 'vue'
import Router from 'vue-router'
import Poems from '../components/Poems.vue'
import Poem from '../components/Poem.vue'
import Poets from '../components/Poets.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/poems',
      name: 'Poems',
      component: Poems
    },
    {
      path: '/poem/:url',
      name: 'Poem',
      components: {
        default: Poem
      }
    },
    {
      path: '/poets',
      name: 'Poets',
      component: Poets
    }
  ]
});

