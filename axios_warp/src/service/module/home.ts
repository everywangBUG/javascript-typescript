import myRequest from ".."
import { myRequest1 } from ".."

myRequest.request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
})

myRequest1.request({
}).then(res => {
  console.log('res111', res)
})

