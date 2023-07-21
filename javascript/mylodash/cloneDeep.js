/**
 * 深度克隆对象/布尔值/字符串/数字/null/undefined/函数等
 * @param {Object} obj 
 * @returns
 */
function cloneDeep(obj) {
  // 布尔、字符串、数字、null、undefined、函数，返回原值
  if (obj === null || obj === undefined || typeof obj !== 'object' ) {
    return obj
  }
  // 数组
  if (Array.isArray(obj)) {
    return obj.map(item => cloneDeep(item))
  }
  // Map
  if (obj instanceof Map) {
    const newMap = new Map()
    obj.forEach((value, key) => {
      newMap.set(key, cloneDeep(value))
    })
    return newMap
  }
  // Set
  if (obj instanceof Set) {
    const newSet = new Set()
    obj.forEach((value, key) => {
      newSet.add(key, cloneDeep(value))
    })
    return newSet
  }
  // 正则
  if (obj.constructor  === RegExp) {
    return new RegExp(obj) 
  }
  // 日期构造函数
  if (obj instanceof Date) {
    return copy = new Date(obj)
  }
  // 对象
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    let newObj = {}
    for (let key in obj) {
      // 不遍历其原型上的属性
      if (obj.hasOwnProperty(key)) {
        newObj[key] = cloneDeep(obj[key])
      }
    }
    return newObj
  }
}

const obj = {
  func: function () {
    console.log('Hello, World!');
  },
  arr: [1, 2, 3],
  deepArr: [1, [2, 3], [2, 3, [4, 5]]],
  str: 'Hello',
  date: new Date(),
  reg: /^(0\d{2,3})/,
  undef: undefined,
  nullValue: null,
  map: new Map([[1, 'one'], [2, 'two']]),
  set: new Set([1, 2, 3]),
  deepobject: {a:{b: 1}, b: 2}
}
const copyObj = cloneDeep(obj)
console.log(copyObj)