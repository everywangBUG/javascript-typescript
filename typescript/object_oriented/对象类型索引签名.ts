interface IPerson {
  [key: string]: string
}
function printPerson(): IPerson {
  const a: any = 1
  return a
}
const p = printPerson()
const name = p['name']
console.log(name, p.adress, p.age, p.name)

interface ICollection {
  [index: number]: string
  length: number
}

function logCollection(collection: ICollection) {
  for (let i = 0; i < collection.length; i++) {
    const item = collection[i]
    console.log(item.length)
  }
}

const arr = ['aaa', 'bbb']
const tuple: [string, string, string] = ['zhangsan', "18", "1.89"]
logCollection(tuple)
logCollection(arr)

interface ICollection1 {
  [index: number]: string
  [key: string]: number|string
}

const arr1: ICollection1 = ['aaa', 'bbb']
const tuple1: [string, string, string] = ['zhangsan', "18", "1.89"]
const item = arr1['forEach'] // any类型
const item1 = arr[0] // string类型

export {}