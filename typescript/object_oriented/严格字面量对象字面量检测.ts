interface IPerson {
  name: string
  age: number
}

const obj = {
  name: "zhangsan",
  age: 18,
  height: 190
}

// 1.此处没有类型检测
const per: IPerson = obj
// 2.
const per1 = {
  name: "lisi",
  age: 19,
  height: 190
}
function printPerson(person: IPerson){
  console.log(person)
}
// 此处不进行类型检测
printPerson(per1)