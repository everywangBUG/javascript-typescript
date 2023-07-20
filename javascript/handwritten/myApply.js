/**
 * apply将this绑定为函数调用的第一个参数，和call不同的是后续的传参为数组
 * @param {*} ctx 传入的对象等
 * @param {Array} args 剩余参数为数组
 * @returns 绑定this后的返回值
 */
Function.prototype.myApply = function(ctx, args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx)
  let key = Symbol('temp')
  Object.defineProperty(ctx, key, {
    value: this,
    writable: true,
    enumerable: false,
    configurable: true
  })
  let res = ctx[key](...args)
  delete ctx[key]
  return res
}

function foo(...args) {
  console.log(args)
}

foo.myApply({name: 'zhangsan'}, [1, 2, 3, 4])
foo.myApply(null, [8888])
foo.myApply(undefined, [9999])