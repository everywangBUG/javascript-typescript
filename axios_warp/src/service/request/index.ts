import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

interface MyRequestConfig extends AxiosRequestConfig {
  interceptors?: {
    requestSuccessFn: (config: AxiosRequestConfig) => AxiosRequestConfig
    requestFailtureFn: (err: any) => any
    responseSuccessFn: (res: AxiosResponse) => AxiosResponse
    responseFailtureFn: (err: any) => any
  }
}

class MyRequest {
  instance: AxiosInstance

  // config在里不支持传拦截器，需要拓展为MyRequestConfig
  constructor(config?: MyRequestConfig) {
    this.instance = axios.create(config)

    // 全局请求拦截器，拦截器可以多次添加不会被覆盖，而是同时存在
    this.instance.interceptors.request.use(res => {
      console.log('全局请求拦截成功') 
      return res
    }, err => {
      console.log('全局请求拦截失败')
      return err
    })

    // 全局响应拦截器
    this.instance.interceptors.response.use(res => {
      console.log('全局响应拦截成功')
      return res
    }, err => {
      console.log('全局响应拦截失败')
      return err  
    })

    //  针对aribnb的config是否有interceptors属性，如果有则添加请求实例拦截器
    if (config?.interceptors) { // 类型缩小，可使用可选链
      this.instance.interceptors.request.use(
        config.interceptors.requestSuccessFn,
        config.interceptors.requestFailtureFn,
      )
    }

    // 添加实例的响应拦截器
    this.instance.interceptors.response.use(
      config?.interceptors?.responseSuccessFn,
      config?.interceptors?.responseFailtureFn
    )
    
  }
  
  // request方法
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  get() {
    return this.request({})
  }
}

export default MyRequest