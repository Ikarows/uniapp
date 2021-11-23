import axios from 'axios'
import store from 'store'
import qs from 'qs'

/*const service = axios.create({
	timeout: 6000, // request timeout
	crossDomain: true
})*/

axios.defaults.baseURL = 
  (process.env.NODE_ENV === 'development' ? "https://edudev.gongfukeji.cn" : 'https://edudev.gongfukeji.cn') + '/api.php'

// request拦截器,在请求之前做一些处理
axios.interceptors.request.use(config => {
		//添加请求头
		config.headers["Authorization"] = store.state.token
		//console.log('请求拦截成功')
		return config;
	},
	error => {
		console.log(error); // for debug
		return Promise.reject(error);
	}
);
 
//配置成功后的拦截器
axios.interceptors.response.use(res => {
  //console.log('res', res)
	if (res.data) {
		if (res.data.code === -1 || res.data.code === '-1') {
      pages('/pages/login/login', 'reLaunch')
      return res.data
    } else {
      return res.data
    }
	} else {
    uni.showToast({
      title: '无效的请求',
      icon: 'none',
      duration: 2000
    });
		return Promise.reject(res.data);
	}
}, error => {
  uni.showModal({
    title: '提示',
    content: error.response.data.message,
    showCancel: false
  });
	if (error.response.status) {
		switch (error.response.status) {
			case 401:
				break;
			default:
				break;
		}
	}
	return Promise.reject(error)
})
 
 
// 在main.js中放入这段自定义适配器的代码，就可以实现uniapp的app和小程序开发中能使用axios进行跨域网络请求，并支持携带cookie
axios.defaults.adapter = function(config) {
  // console.log('config', config)

	return new Promise((resolve, reject) => {
		var settle = require('axios/lib/core/settle');
		var buildURL = require('axios/lib/helpers/buildURL');
		uni.request({
			method: config.method.toUpperCase(),
			url: /*config.baseURL + */buildURL(config.url, config.params, config.paramsSerializer),
			header: config.headers,
			data: config.data,
			dataType: config.dataType,
			responseType: config.responseType,
			sslVerify: config.sslVerify,
			complete: function complete(response) {
				// console.log("执行完成：", response)
				response = {
					data: response.data,
					status: response.statusCode,
					errMsg: response.errMsg,
					header: response.header,
					config: config
				};
				settle(resolve, reject, response);
			}
		})
	})
}
 
export default axios

// 封装get方法
export function get(url, params) {
  return new Promise((resolve, reject) => {
    uni.showLoading({
      title: '加载中...'
    })
    axios.get(url, { params }).then(res =>{
      resolve(res)
      uni.hideLoading();
    }).catch(err =>{
      reject(err)
      uni.hideLoading();
    })
  })
}
// 封装post方法
export function post(url, params) {
  return new Promise((resolve, reject) => {
    uni.showLoading({
      title: '加载中...'
    })
    axios.post(url, qs.parse(params)).then(res =>{
      resolve(res)
      uni.hideLoading();
    }).catch(err =>{
      reject(err)
      uni.hideLoading();
    })
  })
}

// 封装 put方法
export function put(url, params) {
  return new Promise((resolve, reject) => {
    axios.put(url, params).then(res =>{
      resolve(res)
      uni.hideLoading();
    }).catch(err =>{
      reject(err)
      uni.hideLoading();
    })
  })
}

