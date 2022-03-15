export default {
  created () {

  },
  mounted () {

  },
  methods: {
    // 设置字体
    getRootFontSize () {
      const self = this
      var fontSize = getApp().globalData.rootFontSize
      if (fontSize) {
        return fontSize
      } else {
        fontSize = uni.getStorageSync('root_font_size') * 2
        if (fontSize) {
          getApp().globalData.rootFontSize = fontSize
        } else {
          fontSize = '25px' // 默认字体大小
          self.setRootFontSize(fontSize)
        }
        return fontSize
      }
    },
    setRootFontSize (fontSize) {
      uni.setStorageSync('root_font_size', fontSize)
      getApp().globalData.rootFontSize = fontSize
    }
  }
}
