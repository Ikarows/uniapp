<template>
  <view class="login">
    <view class="content">
      <!-- 头部logo -->
      <view class="header">
        <image src="/static/img/logo.png" />
      </view>
      <!-- 主体表单 -->
      <view class="main">
        <wInput
          v-model="phoneData"
          type="text"
          maxlength="11"
          placeholder="用户名/电话"
          :focus="isFocus"
        />
        <wInput
          v-model="passData"
          type="password"
          maxlength="11"
          placeholder="密码"
        />
      </view>
      <wButton
        class="wbutton"
        text="登 录"
        :rotate="isRotate"
        @click="startLogin"
      />

      <!-- 其他登录 -->
      <view class="other_login cuIcon">
        <view class="login_icon">
          <view
            class="cuIcon-weixin"
            @tap="login_weixin"
          />
        </view>
        <!-- <view class="login_icon">
          <view
            class="cuIcon-weibo"
            @tap="login_weibo"
          />
        </view>
        <view class="login_icon">
          <view
            class="cuIcon-github"
            @tap="login_github"
          />
        </view> -->
      </view>

      <!-- 底部信息 -->
      <view class="footer">
        <span @click="go('/pages/login/forget')">找回密码</span>
        <text>|</text>
        <span @click="go('/pages/login/register')">注册账号</span>
      </view>
    </view>
  </view>
</template>

<script>
import wInput from '@/components/watch-login/watch-input.vue' // input
import wButton from '@/components/watch-login/watch-button.vue' // button

export default {
  components: {
    wInput,
    wButton
  },
  data () {
    return {
      phoneData: '', // 用户/电话
      passData: '', // 密码
      isRotate: false, // 是否加载旋转
      isFocus: true // 是否聚焦
    }
  },
  mounted () {
    // this.isLogin();
  },
  methods: {
    isLogin () {
      // 判断缓存中是否登录过，直接登录
      // try {
      // 	const value = uni.getStorageSync('setUserData');
      // 	if (value) {
      // 		//有登录信息
      // 		console.log("已登录用户：",value);
      // 		this.$store.dispatch("setUserData",value); //存入状态
      // 		uni.reLaunch({
      // 			url: '../../../pages/index',
      // 		});
      // 	}
      // } catch (e) {
      // 	// error
      // }
    },

    go (url) {
      uni.navigateTo({
        url
      })
    },

    startLogin (e) {
      console.log(e)
      // 登录
      if (this.isRotate) {
        // 判断是否加载中，避免重复点击请求
        return false
      }
      if (this.phoneData.length === '') {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '用户名不能为空'
        })
        return
      }
      if (this.passData.length < 5) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '密码不正确'
        })
        return
      }

      console.log('登录成功')

      this.isRotate = true
      setTimeout(function () {
        this.isRotate = false
      }, 3000)
      // uni.showLoading({
      // 	title: '登录中'
      // });
      // getLogin()
      // .then(res => {
      // 	//console.log(res)
      // 	//简单验证下登录（不安全）
      // 	if(this.phoneData==res.data.username && this.passData==res.data.password){
      // 		let userdata={
      // 			"username":res.data.username,
      // 			"nickname":res.data.nickname,
      // 			"accesstoken":res.data.accesstoken,
      // 		} //保存用户信息和accesstoken
      // 		this.$store.dispatch("setUserData",userdata); //存入状态
      // 		try {
      // 			uni.setStorageSync('setUserData', userdata); //存入缓存
      // 		} catch (e) {
      // 			// error
      // 		}
      // 		uni.showToast({
      // 			icon: 'success',
      // 			position: 'bottom',
      // 			title: '登录成功'
      // 		});
      // 		uni.reLaunch({
      // 			url: '../../../pages/index',
      // 		});
      // 	}else{
      // 		this.passData=""
      // 		uni.showToast({
      // 			icon: 'error',
      // 			position: 'bottom',
      // 			title: '账号或密码错误，账号admin密码admin'
      // 		});
      // 	}
      // 	uni.hideLoading();
      // }).catch(err => {
      // 	uni.hideLoading();
      // })
    },
    login_weixin () {
      // 微信登录
      uni.showToast({
        icon: 'none',
        position: 'bottom',
        title: '暂未开放~'
      })
    },
    login_weibo () {
      // 微博登录
      uni.showToast({
        icon: 'none',
        position: 'bottom',
        title: '暂未开放~'
      })
    },
    login_github () {
      // github登录
      uni.showToast({
        icon: 'none',
        position: 'bottom',
        title: '暂未开放~'
      })
    }
  }
}
</script>

<style>
@import url("~@/components/watch-login/css/icon.css");
@import url("./css/main.css");
</style>
