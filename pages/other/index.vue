<template>
  <view class="main">
    <u-empty mode="data" />
  </view>
</template>

<script>
export default {
  data () {
    return {

    }
  },

  // 导航栏返回主页按钮
  onNavigationBarButtonTap (e) {
    if (e.index === 0) {
      this.$pages('/pages/home/index', 'switchTab')
    }
  },

  // 下拉到底部事件
  onReachBottom () {
    // this.init(true)
  },

  methods: {
    /* init (isPage = false) {
      if (this.finished) return
      this.loading = true
      getEnrollList(this.pages).then(res => {
        if (res.code === 0) {
          if (isPage) {
            this.list = [...this.list, ...res.data.list]
          } else {
            this.list = res.data.list
          }
          if (res.data.stat.total_page === this.pages.page) this.finished = true
          this.pages.page++
        }
        this.loading = false
      })
    },*/
  }
}
</script>

<style lang="scss" scoped>
.album {
  @include flex;
  align-items: flex-start;

  &__avatar {
    background-color: $u-bg-color;
    padding: 5px;
    border-radius: 3px;
  }

  &__content {
    margin-left: 10px;
    flex: 1;
  }
}
</style>
