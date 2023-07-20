/**
 * call函数将this绑定函数调用的第一个参数
 * @param {*} ctx 传入的对象等
 * @param  {...any} args 剩余参数不为数组
 * @returns 绑定this后的返回值
 */
Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx)
  let key = Symbol('temp')
  Object.defineProperty(ctx, key, {
    value: this,
    writable: true,
    enumerable: false,
    configurable: true,
  })
  const res = ctx[key](...args)
  delete ctx[key]
  return res
}

function foo(name, age) {
  console.log(this, name, age)
}

foo.myCall({name: 'zhangsan', age: 18}, 2, 3)
foo.myCall({}, 2, 3)
foo.myCall('stree', 2, 3)
foo.myCall(null, 2, 3)
foo.myCall(undefined, 2, 3)
