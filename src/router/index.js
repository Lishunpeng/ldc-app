import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import sign from '@/components/sign'
import chat from '@/components/chat'
import gameIndex from '@/components/gameIndex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
	  },
	  {
	  	path:'/sign',
	  	component: sign,
	  	name: 'sign'
	  },
	  {
	  	path:'/chat',
	  	component: chat,
	  	name: 'chat'
	  },
	  {
	  	path:'/gameIndex',
	  	component: gameIndex,
	  	name: 'gameIndex'
	  },
  ]
})