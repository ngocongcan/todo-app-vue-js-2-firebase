import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Todo from '@/components/Todo'
import VueFire from 'vuefire'

Vue.use(Router)
Vue.use(VueFire)

export default new Router({
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Todo',
      component: Todo
    }
  ]
})
