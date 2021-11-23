import $Router from '@/router'

/* 提示弹窗 */
export const toast = (text, icon = false) => {
  setTimeout(() => {
    uni.showToast({
      title: text,
      duration: 2000,
      icon: !icon ? 'none': true
    });
  }, 100)
}

// 手机号验证
export const validatePhone = (num) => {
  return /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[01235678]|18[0-9]|19[189])\d{8}$/.test(num)
}

// 密码验证
export const validatePassword = (num) => {
  return /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(num)
}

/* 应用内页面跳转 */
export const pages = (url, type) => {
  // 关闭所有页面打开此页面
  if (type === 'reLaunch') {
    $Router.replaceAll(url)
  } else if (type === 'switchTab') {
    // 跳转tabber页面
    $Router.pushTab(url)
  } else {
    // 普通页面跳转
    $Router.push(url)
  }
}

/**
 * 最低最高价格格式化
 * @export
 * @param {Number} salaryLow 金额
 * @param {Number} salaryHight 金额
 * @returns {String}
*/
export const salary = (salaryLow, salaryHight, type) => {
  if (type === 3 || type === 1) {
    return salaryHight
  } else if (salaryLow && salaryHight) {
    return `${salaryLow}-${salaryHight}`
  } else if (salaryLow && !salaryHight) {
    return salaryLow
  } else if (!salaryLow && salaryHight) {
    return salaryHight
  }
}

/**
 * 验证身份证号码
 * @export
 * @param {Number} idCard 待判断的身份证号码
 * @returns {Boolean}
*/
export const validateIdCard = (idcard) => {
  const vcity = { 11: '北京', 12: '天津', 13: '河北', 14: '山西', 15: '内蒙古', 21: '辽宁', 22: '吉林', 23: '黑龙江', 31: '上海', 32: '江苏', 33: '浙江', 34: '安徽', 35: '福建', 36: '江西', 37: '山东', 41: '河南', 42: '湖北', 43: '湖南', 44: '广东', 45: '广西', 46: '海南', 50: '重庆', 51: '四川', 52: '贵州', 53: '云南', 54: '西藏', 61: '陕西', 62: '甘肃', 63: '青海', 64: '宁夏', 65: '新疆', 71: '台湾', 81: '香港', 82: '澳门', 91: '国外' }
  // 检查号码是否符合规范，包括长度，类型
  const isCardNo = function (obj) {
    const reg = /(^\d{15}$)|(^\d{17}(\d|X)$)/

    if (reg.test(obj) === false) {
      return false
    }
    return true
  }
  // 取身份证前两位,校验省份
  const checkProvince = function (obj) {
    const province = obj.substr(0, 2)
    if (vcity[province] === undefined) {
      return false
    }
    return true
  }
  // 校验位的检测
  const checkParity = function (obj) {
    // 15位转18位
    obj = changeFivteenToEighteen(obj)
    const len = obj.length

    if (len === 18) {
      const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      let cardTemp = 0
      let valnum = ''
      for (let i = 0; i < 17; i++) {
        cardTemp += obj.substr(i, 1) * arrInt[i]
      }
      valnum = arrCh[cardTemp % 11]
      if (valnum === obj.substr(17, 1)) {
        return true
      }
      return false
    }
    return false
  }
  // 15位转18位身份证号
  const changeFivteenToEighteen = function (obj) {
    if (obj.length === 15) {
      const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
      let cardTemp = 0
      obj = obj.substr(0, 6) + '19' + obj.substr(6, obj.length - 6)
      for (let i = 0; i < 17; i++) {
        cardTemp += obj.substr(i, 1) * arrInt[i]
      }
      obj += arrCh[cardTemp % 11]
      return obj
    }
    return obj
  }
  // 校验长度，类型
  if (isCardNo(idcard) === false) {
    return false
  }
  // 检查省份
  if (checkProvince(idcard) === false) {
    return false
  }
  // 检验位的检测
  if (checkParity(idcard) === false) {
    return false
  }
  return true
}

// 去除首尾空格
export const noBlank = (str) => {
  return str.replace(/^\s*|\s*$/g, '')
}

/**
 * 验证银行卡号
 * @param {Number} card
*/

export const checkBankCard = (data) => {
  const regExp = /^([1-9]{1})(\d{14}|\d{15}|\d{17}|\d{18})$/
  return regExp.test(data)
}

/**
 * 金额取两位小数
 * @export
 * @param {Number} val 金额
 * @returns {Number}
*/
export const amount = (val) => {
  return Number(val).toFixed(2)
}