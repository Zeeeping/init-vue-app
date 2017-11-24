/**
 * Created by Zep on 2017/11/24.
 * 注册函数
 */

import Vue from 'vue'
import plugins from './plugins.js'

Vue.use({
  install(Vue, opations) {
    Object.keys(plugins).forEach(key => {
      Vue.prototype[key] = plugins[key]
    })
  }
})
