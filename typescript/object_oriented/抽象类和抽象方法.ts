abstract class Shape {
  // getArea只有声明没有实现体，实现体由子类自己实现
  // 抽象类中必须放抽象方法
  abstract getArea()
  running() {
    console.log('keep running')
  }
}

class Reactangle extends Shape {
  constructor(public width: number, public height: number) {
    super()
  }

  getArea() {
      return this.width * this.height
  }
}

class Cicle extends Shape {
  constructor(public radius: number) {
    super()
  }

  getArea() {
      return this.radius ** 2 * Math.PI
  }
}

// 多态
function calcArea(shap: Shape) {
  return shap.getArea()
}

calcArea(new Reactangle(10, 10))
calcArea(new Cicle(10))

// 抽象类不能被实例化
// new Shap
