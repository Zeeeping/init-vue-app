/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */

export default [{
  name: '广告管理',
  module: 'banner',
  list: [{
    type: 'post',
    name: '获取广告列表',
    path: '/pc/ad/Ad/findAd',
    method: 'getList'
  }]
}, {
  name: '产品管理',
  module: 'product',
  list: [{
    type: 'post',
    name: '获取产品列表',
    path: '/pc/productDetails/ProductDetails/findProduct',
    method: 'getList'
  }, {
    type: 'post',
    name: '获取产品详情',
    path: '/pc/productDetails/ProductDetails/findProductDetails',
    method: 'getDetails'
  }]
}]
