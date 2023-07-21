function findIndex(ary, predicate, formIndx) {
  if (predicate.constructor === Function) {
    for (let i = 0; i < ary.length; i++) {
      if(predicate(ary[i])) {
        return i
      }
    }
  }
  if (typeof predicate === 'object') {
    for (let i = 0; i < ary.length; i++) {
      if (JSON.stringify(ary[i]) === JSON.stringify(predicate)) {
        return i
      }
    }
  }
  if (Object.prototype.toString.call(predicate) === '[object Array]') {
    for (let i = 0; i < ary.length; i++) {
      let obj = Object.fromEntries([predicate])
      for (let item in ary[i]) {
        let keys = Object.keys(obj)
        if (( keys[0]=== item) || (predicate[keys[0]] === item)) {
          return i
        }
      }
    }
  }
  if (typeof predicate === 'string') {
    for (let i = 0; i < ary.length; i++) {
      for (let key in ary[i]) {
        if (ary[i][predicate]) {
          return i
        }
      }
    }
  }
 return -1
}
const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
]
console.log(findIndex(users, function(o) { return o.user == 'barney' })) // 0
console.log(findIndex([1, 2, 3], (val) => {return val % 2 === 0})) // 1
console.log(findIndex(users, { 'user': 'fred', 'active': false })) // 1
console.log(findIndex(users, ['active', false])) // 0
console.log(findIndex(users, 'active')) // 2