import Vue from 'vue'
import VueRouter from 'vue-router'
import MyLayout from '@/views/MyLayout/MyLayout.vue'
import MyIcons from '@/views/icons/MyIcons.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: MyLayout
  },
  {
    path: '/icon',
    name: 'icons',
    component: MyIcons
  }
]

const router = new VueRouter({
  routes
})

export default router
