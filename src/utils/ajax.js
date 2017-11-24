/**
 * Created by Zep on 2017/11/24.
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {boolean}  tokenFlag 是否需要携带token参数，为true，不需要；false，需要。一般除了登录，都需要(官网都不需要)
 */

import Vue from 'vue'
import qs from 'qs'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

export default function({ type, url, data, tokenFlag } = {}) {

  var opations = {
    method: type,
    url
  }

  opations[type === 'get' ? 'params' : 'data'] = qs.stringify(data)

  return new Promise((resolve, reject) => {
    Vue.axios(opations).then(res => {
      if (res.status === 200) {
        resolve(res.data)
      } else {
        reject(res.data)
      }
    }).catch(err => {
      reject(err)
    })
  })

}
