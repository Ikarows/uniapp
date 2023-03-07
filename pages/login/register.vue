<template>
  <view class="register">
    <view class="content">
      <!-- 头部logo -->
      <view class="header">
        <image src="/static/img/logo.png" />
      </view>
      <!-- 主体 -->
      <view class="main">
        <wInput
          v-model="form.phone"
          type="text"
          maxlength="11"
          placeholder="手机号"
        />
        <wInput
          v-model="form.pwd"
          type="password"
          maxlength="11"
          placeholder="登录密码"
          is-show-pass
        />
        <wInput
          ref="runCode"
          v-model="form.smscode"
          type="number"
          maxlength="4"
          placeholder="验证码"
          is-show-code
          @setCode="getVerCode()"
        />
        <wInput
          ref="imgCode"
          v-model="form.captcha"
          type="number"
          maxlength="4"
          placeholder="图形码"
          is-show-captcha
          :captcha-img="captchaImg"
          @setCode="getVerCode()"
        />
      </view>

      <wButton
        class="wbutton"
        text="注 册"
        :rotate="isRotate"
        @click.native="startReg()"
      />

      <!-- 底部信息 -->
      <view class="footer">
        <text
          class="cuIcon"
          :class="showAgree ? 'cuIcon-radiobox' : 'cuIcon-round'"
          @tap="isShowAgree"
        > 同意</text>

        <!-- 协议地址 -->
        <navigator
          url=""
          open-type="navigate"
        >《用户协议》</navigator>
        <navigator
          url=""
          open-type="navigate"
        >《隐私政策》</navigator>
      </view>
    </view>
  </view>
</template>

<script>
let _this
import wInput from '@/components/watch-login/watch-input.vue' // input
import wButton from '@/components/watch-login/watch-button.vue' // button

export default {
  components: {
    wInput,
    wButton
  },
  data () {
    return {
      form: {
        phone: '17688799628', // 手机号
        pwd: '', // 密码
        smscode: '', // 验证码
        module: 'engineer',
        captcha: ''
      },
      captchaImg: '/static/img/logo.png',
      showAgree: true, // 协议是否选择
      isRotate: false // 是否加载旋转
    }
  },
  mounted () {
    _this = this
  },
  methods: {
    isShowAgree () {
      // 是否选择协议
      _this.showAgree = !_this.showAgree
    },
    getVerCode () {
      // 获取验证码
      if (this.form.phone === '') {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号不能为空'
        })
        return
      }
      if (!this.$funs.validatePhone(this.form.phone)) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号格式错误'
        })
        return
      }
      console.log('获取验证码')
      this.$refs.runCode.$emit('runCode') // 触发倒计时（一般用于请求成功验证码后调用）
      uni.showToast({
        icon: 'none',
        position: 'bottom',
        title: '模拟倒计时触发'
      })

      setTimeout(function () {
        _this.$refs.runCode.$emit('runCode', 0) // 假装模拟下需要 终止倒计时
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '模拟倒计时终止'
        })
      }, 3000)
    },
    startReg () {
      // 注册
      if (this.isRotate) {
        // 判断是否加载中，避免重复点击请求
        return false
      }
      if (this.showAgree === false) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '请先同意《协议》'
        })
        return false
      }
      if (this.form.phone === '') {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号不能为空'
        })
        return
      }
      if (!this.$funs.validatePhone(this.form.phone)) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '手机号格式错误'
        })
        return
      }
      if (this.form.pwd === '') {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '密码不能为空'
        })
        return
      }
      if (this.form.pwd < 8) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '密码不能小于8位'
        })
        return
      }
      if (this.form.smscode.length !== 4) {
        uni.showToast({
          icon: 'none',
          position: 'bottom',
          title: '验证码不正确'
        })
        return false
      }
      console.log('注册成功')
      _this.isRotate = true
      setTimeout(function () {
        _this.isRotate = false
      }, 3000)
    }
  }
}
</script>

<style>
@import url("~@/components/watch-login/css/icon.css");
@import url("./css/main.css");
</style>
