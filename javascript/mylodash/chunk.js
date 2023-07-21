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

function chunk(ary, size) {
  let length = ary === null ? 0 : ary.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let temp = 0
  let res = new Array(Math.ceil(length/size))
  while (index < length) {
    res[temp++] = slice(ary, index, (index += size))
  }
  return res
}
const a = chunk(['a', 'b', 'c', 'd'], 2)
const a1 = chunk(['a', 'b', 'c', 'd', 'e'], 2)
const a2 = chunk(['a', 'b', 'c', 'd', 'e', 'f'], 2)
console.log(a)
console.log(a1)
console.log(a2)

export default chunk