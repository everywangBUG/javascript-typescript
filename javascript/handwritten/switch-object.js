function getIdTypeNumber(val) {
  let res = ''
  switch(val) {
    case '1': 
      res = '身份证'
      break
    case '2':
      res = '护照'
      break
    case '3':
      res = '台湾居民身份证'
      break
    case '4':
      res = '港澳台居民身份证'
      break
    default:
      res = ''
  }
  return res
}

console.log(getIdTypeNumber('1'))
console.log(getIdTypeNumber('2'))

let res = {
  '1': '身份证',
  '2': '护照',
  '3': '台湾居民身份证',
  '4': '港澳台居民身份证'
}
// 对象计算属性
console.log(res['1'])

function developerTypeFormatter(type) {
  switch (type) {
      case 0:
          return '';
      case 1:
          return '建设单位';
      case 2:
          return '施工单位';
      case 3:
          return '监理单位';
      case 4:
          return '勘察单位';
      case 5:
          return '设计单位';
      default:
          return;
  }
}
let res1 = {
  0: '建设单位',
  1: '施工单位'
}
console.log(developerTypeFormatter(0))
console.log(res1[0])