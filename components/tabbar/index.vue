<template>
  <section class="tabbar">
    <van-tabbar
      v-model="current"
      fixed
      route
      class="nav-box"
    >
      <van-tabbar-item
        v-for="(item, index) in icon"
        :key="index"
        replace
        :to="item.href"
      >
        <span :class="current === index ? 'active nav-text' : 'nav-text'">{{ item.name }}</span>
        <img
          slot="icon"
          :src="current === index ? item.inactive : item.active"
          class="nav-icon"
        >
      </van-tabbar-item>
    </van-tabbar>
  </section>
</template>

<script>
export default {
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      current: this.active,
      icon: [{
        name: '首页',
        active: require('./img/agency_nav_home.png'),
        inactive: require('./img/agency_nav_home_active.png'),
        href: '/home'
      }, {
        name: '就业',
        active: require('./img/job_nav_position.png'),
        inactive: require('./img/job_nav_position_active.png'),
        href: '/position'
      }, {
        name: '我的',
        active: require('./img/job_nav_user.png'),
        inactive: require('./img/job_nav_user_active.png'),
        href: '/user'
      }]
    }
  }
}
</script>
<style lang="scss" scroped>
  .tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;

    .nav-icon {
      width: rem(52);
      height: rem(52);
    }

    .van-tabbar-item {
      font-size: rem(20);
      color: #A5A5A5;
    }

    .van-tabbar-item--active,
    .active  {
      color: #198AFF;
    }

    .nav-box {
      box-shadow: 0 rem(-2) rem(20) 0 rgba(0,0,0,0.04);
    }
  }
</style>
