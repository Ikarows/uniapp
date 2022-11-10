import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    token: ''// 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvZGV2LmdvbmdmdWtlamkuY24iLCJhdWQiOiJodHRwczpcL1wvZGV2LmdvbmdmdWtlamkuY24iLCJpYXQiOjE2MzI0NDc1MTYsIm5iZiI6MTYzMjQ0NzUxNiwiZXhwIjoxNjMyNDkwNzE2LCJkYXRhIjp7ImFjY291bnRfaWQiOiI5NSIsIm1vZHVsZSI6ImNsaWVudCIsInVzZXJfaWQiOiIxNyIsIm9yZ19pZCI6IjE4IiwicyI6MSwidGFnIjo5NX19.pq67zBW_L5YZQcCZtVVeUmaX1FcycRxWnqUJkN9WTO8',
  },
  mutations: {
    SET_MAC (state, data) {
      uni.setStorage({
        key: 'mac',
        data: data,
        success: function () {
          state.mac = data
          console.log('1', state.mac)
          uni.showToast({
            title: '保存成功',
            duration: 2000
          })
        }
      })
    },
    SET_TOAST: (state, { msg, color }) => {
      state.msg = msg
      state.color = color
    }
  },
  actions: {
    showError: ({ commit }, msg) => {
      commit('SET_TOAST', { msg, color: 'error' })
    },
    showInfo: ({ commit }, msg) => {
      commit('SET_TOAST', { msg, color: 'info' })
    },
    showWarn: ({ commit }, msg) => {
      commit('SET_TOAST', { msg, color: 'warning' })
    },
    showSuccess: ({ commit }, msg) => {
      commit('SET_TOAST', { msg, color: 'success' })
    }
  },
  getters: {
    mac (state) {
      return state.mac
    }
  }
})
export default store
