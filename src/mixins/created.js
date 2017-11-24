/**
 * Created by Zep on 2017/11/24.
 * 导出每个页面 created 的钩子函数
 */

export default {
  methods: {
    setHtml() {
      document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 10 + 'px'
    },
    reSize() {
      window.onresize = () => {
        this.setHtml()
      }
    }
  },
  created() {
    this.reSize()
    this.setHtml()
  }
}

