// 使用extends关键字进行对象类型的约束
interface ILength {
  length: number
}

// 传入的内容中必须要有length属性
function foo<T extends ILength>(arg1: T): T {
  return arg1
}

const res1 = foo('123456')
const res2 = foo([1, 2, 3])
// 123数字类型没有length属性，无法传入
// const res3 = foo(123)

export {}