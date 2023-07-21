/**
 * 对象是否相等
 * @param {Object} a 
 * @param {Object} b 
 * @returns {Boolean} true or false
 */
function isObjectEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b)
}

/**
 * 检查collection集合中是否存在任意真值的元素，一旦为真返回true
 * @param {*} collection 
 * @param {*} predicate 
 * @returns {Boolean}
 */
function some(collection, predicate) {
  if (Array.isArray(collection)) {
    if (Array.isArray(predicate)) {
      for(let item in collection) {
        let obj = Object.fromEntries([predicate])
        for (let key in obj) {
          key = String(key)
          if ((key in collection[item]) || obj[key] === item[key]) {
            return true
          }
        }
      }
    }
    if (predicate instanceof Function) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i], i, collection)) {
          return true
        }
      }
    }
    if (typeof predicate === 'object') {
      for (let key in collection) {
        if (isObjectEqual(collection[key], predicate)) {
          return true
        }
      }
    }
    if (typeof predicate === 'string') {
      for (let key in collection) {
        if (key === predicate) {
          return true
        }
      }
    }
  } else if (typeof collection === 'object' && collection !== null) {
    if (Array.isArray(predicate)) {
      for (let item in collection) {
        let obj = Object.fromEntries([predicate])
        for (let key in obj) {
          if ((key === item) || obj[key] === collection[item]) {
            return true
          }
        }
      }
    }
    if (Object.prototype.toString.call(predicate) === '[object Object]') {
      for (let item in collection) {
        for (let key in predicate) {
          if ((item === key) && collection[item] === predicate[key]) {
            return true
          }
        }
      }
    }
    if (Object.prototype.toString.call(predicate) === '[object String]') {
      for (let item in collection) {
        if (item === predicate || collection[item] === predicate) {
          return true
        }
      }
    }
  }
  return false
}

console.log(some([null, 0, 'yes', false], Boolean)) // true
var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred',   'active': false }
]
console.log(some(users, { 'user': 'barney', 'active': false })) // false
console.log(some(users, ['active', false])) // true

var persons = { 'name': 'zhangsan',  'age': 18 }
console.log(some(persons, ['name', 'zhangsan']), '1111') // true
console.log(some(persons, { 'name': 'lisi' }), '2222') // false
console.log(some(persons, 'name'), '3333') // ture
