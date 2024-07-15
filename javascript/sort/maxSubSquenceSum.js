/**
 * 最大子串的和1
 * 时间复杂度：O(n^3)
 * @param {Array} ary 
 * @returns {Number} maxSum
 */
function maxSubSquenceSum1(ary) {
  let l = ary.length
  let maxSum = 0
  for (let i = 0; i < l; i++) {
    for (let j = i; j < l; j++) {
      let thisSum = 0
      for (let k = i; k <= j; k++) {
        thisSum += ary[k]
        if (thisSum > maxSum) {
          maxSum = thisSum
        }
      }
    }
  }
  return maxSum
}

console.log(maxSubSquenceSum1([4, -1, 1, -1, 0, 0, -1, -4, -2]))

/**
 * 最大子串的和2
 * 时间复杂度：O(n^2)
 * @param {Array} ary 
 * @returns {Number} maxSum
 */
function maxSubSquenceSum2(ary) {
  let l = ary.length
  let maxSum = 0
  for (let i = 0; i < l; i++) {
    let thisSum = 0
    for (let j = i; j < l; j++) {
      thisSum += ary[j]
      if (thisSum > maxSum) {
        maxSum = thisSum
      }
    }
  }
  return maxSum
}

console.log(maxSubSquenceSum2([4, -1, 1, -1, 0, 0, -1, -4, -2]))


/**
 * 最大字串和3
 * 时间复杂度 O(nlogN)
 * 空间复杂度 O(n)
 * @param {Array} ary 
 * @returns 
 */
function maxSubSquenceSum3(ary) {
  if (ary.length === 0) {
    return 0
  }
  if (ary.length === 1) {
    if (ary[0] >= 0) {
      return ary[0]
    } else {
      return ary[0]
    }
  }

  let mid = Math.floor((ary.length / 2))
  let leftAry = ary.slice(0, mid)
  let rightAry = ary.slice(mid)

  let leftAryMax = maxSubSquenceSum3(leftAry)
  let rigthAryMax = maxSubSquenceSum3(rightAry)

  let crossMax = 0

  // 原数组中跨越中间分割的最大字串和
  let leftMax = 0
  let leftSum = 0
  for (let i = leftAry.length - 1; i >= 0 ; i--) {
    leftSum += leftAry[i]

    if (leftSum > leftMax) {
      leftMax = leftSum
    }
  }

  let rightMax = 0
  let rightSum = 0
  for (let i = 0; i < rightAry.length ; i++) {
    rightSum += rightAry[i]

    if (rightSum > rightMax) {
      rightMax = rightSum
    }
  }

  crossMax = leftMax + rightMax

  return Math.max(crossMax, leftAryMax, rigthAryMax)
}

console.log(maxSubSquenceSum3([4, -1, 1, -1, 0, 0, -1, -4, -2]))
console.log(maxSubSquenceSum3([5,4,-1,7,8]))

/**
 * 最大字串和4
 * 时间复杂度：O(n)
 * 空间复杂度：O(1)常量级别
 * @param {Array} ary 
 */
function maxSubSquenceSum4(ary) {
  let thisSum = 0, thisMax = 0
  for (let i = 0; i < ary.length; i++) {
    thisSum += ary[i]
    if (thisSum > thisMax) {
      thisMax = thisSum
    } else if (thisSum < 0) {
      thisSum = 0
    }
  }
  return thisMax
}

console.log(maxSubSquenceSum4([-2,1,-3,4,-1,2,1,-5,4]))

/**
 * leecode 53
 * @param {Array} ary
 */
function maxSubSquenceSum5(nums) {
  let maxSum = nums[0]
  let maxAry = maxSum
  for (let i = 1; i < nums.length; i++) {
      if (maxSum < 0){
          maxSum = 0
      }
      maxSum += nums[i]
      if (maxSum > maxAry) {
          maxAry = maxSum
      } 
  }
  return maxAry
}

console.log(maxSubSquenceSum5([-2, -1]))
