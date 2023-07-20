/**
 * bind将this绑定为函数调用的第一个参数，返回的新函数可以继续传参
 * @param {*} ctx 传入的对象等
 * @param  {...any} args 剩余参数
 * @returns {Function} 将this绑定后的新函数
 */
Function.prototype.myBind = function(ctx, ...args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx)
  let key = Symbol('temp')
  Object.defineProperty(ctx, key, {
    value: this,
    writable: true,
    enumerable: false,
    configurable: true
  })
  return (...otherArgs) => {
    let allArgs = [...args, ...otherArgs]
    ctx[key](...allArgs)
  }
}

function foo(...args) {
  console.log(this, args)
}
const newFn = foo.myBind({name: 'zhangsan', age: 18})
const newFn1 = foo.myBind({})
newFn1(888)
newFn(1, 2, 3, 4)
newFn(1997)
newFn(null)