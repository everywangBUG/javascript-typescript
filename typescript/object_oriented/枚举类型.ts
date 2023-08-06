enum EDirection {
  // 默认赋值
  LEFT,
  RIGHT
}

const d1: EDirection = EDirection.LEFT

function turnDirection(der: EDirection) {
  switch(der) {
    case EDirection.LEFT:
      console.log('向左移动')
      break
    case EDirection.RIGHT:
      console.log('向右移动')
      break
  }
}

turnDirection(d1)