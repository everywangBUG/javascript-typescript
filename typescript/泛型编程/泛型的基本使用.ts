function foo<Type>(bar: Type): Type {
  return bar
}

// 完整写法
const res1 = foo<string>('Hello World!')
const res2 = foo<number>(11111)

// 大多数情况的简略的写法
const res3 = foo(11111) 
// 使用const默认是字面量类型 const res4: "this is 泛型"
const res4 = foo('this is 泛型')
// 使用let变为了字符类型 let res5: string
let res5 = foo('this is 泛型')

export {}

