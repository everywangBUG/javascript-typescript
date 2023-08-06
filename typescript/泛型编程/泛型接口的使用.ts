// T可以使用等于号给定默认值
interface IPerson<T = string> {
  name: T,
  age: number,
  address: T
}

// 这里没办法进行类型的推导
// const p: IPerson = {
//   name: 'zhangsan',
//   age: 12,
//   address: "朝阳区"
// }

// 必须显示的给定类型传递
const p1: IPerson<string> = {
  name: "zhangsan",
  age: 18,
  address: '朝阳区'
}

// 如果给定了默认值直接使用默认值不需要进行传递类型参数
const p2: IPerson = {
  name: 'lisi',
  age: 19,
  address: "西湖区"
}

export {}