// 类里面的成员参数限定，类型参数化
class Point<T = number> {
  public x: T
  public y: T
  constructor(x: T, y: T) {
    this.x = x
    this.y = y
  }
}

const p = new Point(1, 2)
const p1 = new Point('1', '2')

export {}