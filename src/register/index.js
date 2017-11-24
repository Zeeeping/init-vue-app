/**
 * Created by Zep on 2017/11/24.
 * 注册函数
 */

import Vue from 'vue'
import mixins from './mixins.js'
import plugins from './plugins.js'

Object.keys(mixins).forEach(key => {
  Vue.use({
    install(Vue, options) {
      Vue.mixin(mixins[key])
    }
  })
})

Vue.use({
  install(Vue, options) {
    Object.keys(plugins).forEach(key => {
      Vue.prototype[key] = plugins[key]
    })
  }
})
