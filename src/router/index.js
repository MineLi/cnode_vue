import Vue from 'vue'
import Router from 'vue-router'
import articalList from '@/components/articalList'
import aboutMe from '@/components/aboutMe'
import artical from '@/components/artical'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articalList',
      component: articalList
    },
    {
      path: '/about',
      name: 'aboutMe',
      component: aboutMe
    },
    {
      path: '/artical',
      name: 'artical',
      component: artical
    }
  ]
})
