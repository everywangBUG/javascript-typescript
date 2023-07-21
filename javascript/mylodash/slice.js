/**
 * slice浅拷贝一个数组
 * @param {Array} ary
 * @param {Number} start
 * @param {Number} end
 * @returns {Array} return a new slice `ary`
 * @example 
 * let ary1 = [1, 2, 3, 4, 5]
 * slice(ary1, -3, 3)
 */
function slice(ary, start, end) {
  let length = ary === null ? 0 : ary.length
  if (!length) {
    return []
  }
  start = start === null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = -start > length ? 0 : start + length
  }

  end = end > length ? length : end
  if (end < 0) {
    end = -end > length ? 0 : end + length
  }

  length = start > end ? 0 : ((end - start) >>> 0)

  start >>> 0

  let index = -1
  const res = new Array(length)
  while(++index < length) {
    res[index] = ary[index + start]
  }
  return res
}

let ary1 = [1, 2, 3, 4, 5]
console.log(slice(ary1, 1, 3))
console.log(slice(ary1, null, 3))
console.log(slice(ary1, null))
console.log(slice(ary1, -3, 3))


export default slice