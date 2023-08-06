type MapPerson<T> = {
  // 可以加上修饰符
  -readonly [property in keyof T]-?: T[property]
}

interface IPerson {
  name: string,
  readonly age: number,
  address?: string
}

type IPersonOption = MapPerson<IPerson>

const p: IPerson = {
  name: "zhangsan",
  age: 18,
  address: 'aaa'
}
const p1: IPersonOption = {
  name: 'lisi',
  age: 19,
  address: 'bbb'
}

export {}