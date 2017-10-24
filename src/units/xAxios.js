import axios from 'axios'
import { Notification } from 'element-ui'
import router from '../router/index'

// 创建实例的时候配置默认配置
let xAxios = axios.create({
  timeout: 20000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
})

// request请求拦截器
xAxios.interceptors.request.use(config => {
  let sessionId = sessionStorage.getItem('sessionId')
  let token = sessionStorage.getItem('token')
  if (sessionId && token) {
    if (!config.url.match(/upload/g)) {
      config.headers.sid = sessionId
    } else {
      config.url = `${config.url}?token=${token}`
    }
  }
  return config
}, error => {
  // 一些错误是在设置请求的时候触发
  console.log(error) // for debug
  Promise.reject(error)
})

// response响应拦截器
xAxios.interceptors.response.use(response => {
  let { data } = response
  if (!data.succeed) {
    notice('提示', data.msg)

    if (data.code === 401) {
      setTimeout(() => {
        sessionStorage.clear()
        router.replace({name: 'Login'})
      }, 1500)
    }
  }
  return data
}, error => {
  console.log('requestErr' + error)   // for debug
  notice('错误', '服务器异常')
  return Promise.reject(error)
})

function notice (title, msg) {
  Notification.error({
    title: title,
    message: msg,
    duration: 2000
  })
}

export default xAxios
