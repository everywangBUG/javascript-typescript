class Person {
  public name: string
  public age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
// 1.创建实例对象
// 2.Person类作为实例p的类型
const p: Person = new Person('zhangsan', 18)
// 3.类作为构造签名的函数
function printPerson(p: Person){}
function factory(ctor: new (...arg: any[]) => void) {}
factory(Person)