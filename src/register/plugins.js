/**
 * Created by Zep on 2017/11/24.
 * 导出全部需要注册到 Vue.prototype 的插件
 */

import * as utils from 'utils'

var plugins = {}
export default plugins

function mergeManyObjToOneObj(objs) {
  if (objs && typeof objs === 'object') {
    Object.keys(objs).forEach(key => {
      if (typeof objs[key] === 'function') {
        plugins[key] = objs[key]
      } else {
        mergeManyObjToOneObj(objs[key])
      }
    })
  }
}

mergeManyObjToOneObj(utils)
