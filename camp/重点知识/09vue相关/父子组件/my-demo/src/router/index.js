import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Parent from '@/components/parent.vue'
import Parent2 from '@/components/useEvent/parent2.vue'
import Child2 from '@/components/useEvent/child2.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'parent',
      component: Parent
    },
    {
      path: '/testEvent',
      name: 'parent2',
      component: Parent2
    }
  ]
})
