// 类型参数化
function useState<T>(initialVal: T): [T, (val: T) => void] {
  let state = initialVal
  function setState(newVal: T) {
    state = newVal
  }
  return [state, setState]
}

// 可以省略尖括号中的类型，ts自动类型推导
const [count, setCount] = useState<number>(100)
const [message, setmessage] = useState<string>('Hello World!')
const [array, setArray] = useState<(number | string)[]>([123, '123'])

setCount(222)
