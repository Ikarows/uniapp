<template>
  <view class="main">
    home
    <u-alert
      :title="title"
      type="warning"
      :description="description"
    />
  </view>
</template>

<script>
export default {
  data () {
    return {
      title: 'uView的目标是成为uni-app生态最优秀的UI框架',
      description: 'uView是uni-app生态专用的UI框架'
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
