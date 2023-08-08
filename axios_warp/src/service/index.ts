import { BASE_URL, TIME_OUT } from "./config/constant"
import MyRequest from "./request"

const myRequest = new MyRequest({ 
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const myRequest1 = new MyRequest({
  baseURL: 'http://123.207.32.32:8000//home/multidata',
  timeout: 10000,

  // 第二个实例的单个实例拦截器，此处的interceptor在axios中及网络请求中不存在该属性，需要在类中定义
  interceptors: {
    requestSuccessFn: (config) => {
      console.log('这是airbnb的请求成功拦截')
      return config
    },
    requestFailtureFn: (err) => {
      console.log('这是airbnb的请求失败拦截')
      return err 
    },
    responseSuccessFn: (config) => {
      console.log('这是airbnb的响应成功拦截')
      return config
    },
    responseFailtureFn: (err) => {
      console.log('这是airbnb的响应失败拦截')
      return err 
    },
  }
})

export default myRequest