/**
 * Created by Zep on 2017/11/24.
 * 导出需要注册的工具方法
 */

import ajax from './ajax.js'
import apis from 'apis'

let plugins = {}
for (let i = 0; i < apis.length; i++) {
  if (typeof apis[i] === 'object' && apis[i].list && Array.isArray(apis[i].list)) {
    let module = apis[i]
    for (let j = 0; j < module.list.length; j++) {
      let list = module.list[j]
      plugins['api_' + module.module + '_' + list.method] = function({ type = list.type, url = list.path, data } = {}) {
        return ajax({ type, url, data })
      }
    }
  }
}


function test() {
  console.log('test')
}

export {
  plugins,
  test
}
