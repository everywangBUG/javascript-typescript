/**
 * 数组拼接数组或剩余参数
 * @param {Array} ary 
 * @param  {...any} values 
 * @returns {Array} return a new concat array
 */
function concat(ary, ...values) {
  const temp = [...values]
  let tempRes = []
  for (let val of temp) {
    if (!Array.isArray(val)) {
      tempRes.push(val)
    } else {
      tempRes.push(...val)
    }
  }
  let res = [...ary]
  res.push(...tempRes)
  return res
}
let ary = [1]
console.log(concat(ary, [2, [3], [[4]]]))
console.log(concat(ary, 2, [3], [[4]]))
console.log(concat(ary, 'a', [3], [[4]]))