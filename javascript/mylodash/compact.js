/**
 * 剔除`'' undefined NaN null false`
 * @param {Array} arg 
 * @returns {Array} return a new array not incluede `'' undefined null false NaN `
 */
function compact(arg) {
  let res = []
  let index = 0
  if (arg === null) {
    return res  
  }
  for (let val of arg) {
    // 布尔判定真假
    val && (res[index++] = val)
  }
  return res
}
let ary1 = [0, 1, false, 2, '', 3]
console.log(compact(ary1))