import Vue from 'vue'
import VueRouter from 'vue-router'
import MyLayout from '@/views/MyLayout/MyLayout.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: MyLayout
  }
]

const router = new VueRouter({
  routes
})

export default router
