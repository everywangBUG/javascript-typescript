// http模块
// 引入http模块
const http = require('http');
// 引入url模块（URLSearchParams 可以对 get请求过来的参数进行解析，将查询字符串转为一个对象。通过该对象的get方法来获取相应的值。）
const {URLSearchParams} = require("url")
// 创建服务
http.createServer(function (req, res) {
  // 禁止请求图标
  if (req.url == "/favicon.ico") {
    res.end("")
    return
  }
  // 存储数据的arr
  let arr = ["商品1", "商品2", "商品3", "商品4", "商品5", "商品6","商品7", "商品8", "商品9", "商品10", "商品11"];
  // 标头信息
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });
  //解析查询字符串（会将http://127.0.0.1:3001/?page=2&pagesize=3会从问号处后面开始解析内容）   
  let params = new URLSearchParams(req.url.substring(2));
  console.log(params);//  打印结果：URLSearchParams { 'page' => '2', 'pagesize' => '3' }
  //获取页码
  let page = params.get("page");
  //获取当前页的数据量
  let pagesize = params.get("pagesize");
  //如果用户没有传page的值，默认是第一页
  if (!page) {
    page = 1;
  }
  //如果用户没有传pagesize的值，默认是3条
  if (!pagesize) {
    pagesize = 3;
  }
  // 如果用户传的page的数据大于arr的长度，则默认是最后一页
  if (page > Math.ceil(arr.length / pagesize)) {
    page = Math.ceil(arr.length / pagesize);
  }
  res.write("<ul>")
  //默认：第一页  0-2     第二页 3-5      第三页 6-8 ，修改pagesize值会改变，但是规律是不变的
  for (let i = (page-1)*pagesize; i < page*pagesize; i++) {
     res.write(`<li>${arr[i]}</li>`)
  }
  res.write("</ul>")
  res.end()
}).listen(3001);
console.log('Server running at http://127.0.0.1:3001/');