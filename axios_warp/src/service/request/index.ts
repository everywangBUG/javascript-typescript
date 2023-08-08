import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance, AxiosResponse } from 'axios'

interface MyInterceptors<T = AxiosResponse> {
  requestSuccessFn: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestFailtureFn: (err: any) => any
  responseSuccessFn: (res: T) => T
  responseFailtureFn: (err: any) => any
}

interface MyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: MyInterceptors<T>
}

class MyRequest {
  instance: AxiosInstance
  interceptors?: MyInterceptors

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

    //  针对某一个特定实例的config是否有interceptors属性，如果有则添加请求实例拦截器
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
  request<T = any>(config: MyRequestConfig<T>): Promise<T> {
    // 单次请求的拦截器
    if (config.interceptors) {
      config.interceptors.requestSuccessFn(config)
    }
    
    // 单次响应的拦截器
    return new Promise<T>((resolve, rejected) => {
      this.instance.request<any, T>(config)
        .then(res => {
          if (config.interceptors) {
            res = config.interceptors.responseSuccessFn(res)
          }
          resolve(res)
        })
        .catch((err: any) => {
          rejected(err)
        })
    }) 
  }

  get<T = any>(config: MyRequestConfig<T>) {
    return this.request({...config, method: 'GET'})
  }

  post<T = any>(config: MyRequestConfig<T>) {
    return this.request({...config, method: 'Post'})
  }

  delete<T = any>(config: MyRequestConfig<T>) {
    return this.request({...config, method: 'DELETE'})
  }

  patch<T = any>(config: MyRequestConfig<T>) {
    return this.request({...config, method: 'PATCH'})
  }
}

export default MyRequest