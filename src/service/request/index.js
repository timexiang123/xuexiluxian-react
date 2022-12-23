import * as config from './config'
import axios from 'axios'
class HYRequest {
  constructor() {
    // 创建实例
    this.instance = axios.create({
      baseURL: config.BASEURL,
      timeout: config.TIMEOUT
    })
    // 添加请求拦截器
    this.instance.interceptors.request.use(
      function (config) {
        // 在发送请求之前做些什么
        config.headers.Source = config.SOURCE
        return config
      },
      function (error) {
        // 对请求错误做些什么
        return Promise.reject(error)
      }
    )

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      function (response) {
        // 对响应数据做点什么
        return response.data
      },
      function (error) {
        // 对响应错误做点什么
        return Promise.reject(error)
      }
    )
  }
  request(config) {
    return this.instance.request(config)
  }
  get(config) {
    return this.request({ ...config, method: 'get' })
  }
  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}
export default new HYRequest()
