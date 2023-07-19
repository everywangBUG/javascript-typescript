function foo(name, age) {
  console.log(this, name, age)
}

Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx)
  let key = Symbol('temp')
  Object.defineProperty(ctx, key, {
    value: this,
    enumerable: false,
    configurable: true,
  })
  const res = ctx[key](...args)
  delete ctx.fn
  return res
}

foo.myCall({name: 'zhangsan', age: 18}, 2, 3)
foo.myCall({}, 2, 3)
foo.myCall('stree', 2, 3)
foo.myCall(null, 2, 3)
foo.myCall(undefined, 2, 3)
