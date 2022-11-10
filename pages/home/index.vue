<template>
  <view class="main">

    <u-swiper
      :list="list3"
      indicator
      indicator-mode="line"
      radius="0"
      circular
    />

    <u-notice-bar :text="text1" />
  </view>
</template>

<script>
export default {
  data () {
    return {
      text1: 'uView UI众多组件覆盖开发过程的各个需求，组件功能丰富，多端兼容。让您快速集成，开箱即用',
      list3: [
        'https://cdn.uviewui.com/uview/swiper/swiper3.png',
        'https://cdn.uviewui.com/uview/swiper/swiper2.png',
        'https://cdn.uviewui.com/uview/swiper/swiper1.png'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
