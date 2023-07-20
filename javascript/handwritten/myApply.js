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