import Vue from 'vue'
import Router from 'vue-router'
import articleList from '@/components/articleList'
import aboutMe from '@/components/aboutMe'
import aboutAuthor from '@/components/aboutAuthor'
import article from '@/components/article'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/about',
      name: 'aboutMe',
      component: aboutMe
    },
    {
      path: '/article/:articleId',
      name: 'article',
      component: article
    },
    {
      path: '/aboutAuthor/:authorId',
      name: 'aboutAuthor',
      component: aboutAuthor
    }
  ]
})
