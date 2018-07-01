import Vue from 'vue'
import Router from 'vue-router'
import Navigate from '@/components/home/Navigate'
import TopSearch from '@/components/home/HomeTop'
import BottomMenu from '@/components/home/BottomMenu'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'dream',
      components:{
        top:TopSearch,
        navigate:Navigate,
        bottom:BottomMenu
      }
    }
  ]
})
