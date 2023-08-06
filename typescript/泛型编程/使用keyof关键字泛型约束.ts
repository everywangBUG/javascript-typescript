const info = {
  name: 'zhangsan',
  age: 18,
  address: '朝阳区'
}

function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key]
}

const name = getObjectProperty(info, 'name')
const age = getObjectProperty(info, 'age')

export {}