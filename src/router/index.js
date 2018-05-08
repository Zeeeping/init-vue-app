/**
 * Created by Zep on 2017/11/28.
 * 
 */

import Vue from 'vue'
import Router from 'vue-router'
import View from './view.vue'
import * as pages from 'pages/'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: pages.home
  }]
})
