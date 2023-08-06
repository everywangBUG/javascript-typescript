import { price, date } from './utils/namespace'
const message: string = "hello World!"

function print(info: string) {
  return info
}

console.log(price.foo(100))
console.log(date.foo('10-10'))
console.log(print(message))

const bodyEl = document.querySelector('body') as HTMLBodyElement
const h2El = document.createElement('h2')
h2El.textContent = 'Hello TypeScript'
bodyEl.appendChild(h2El)
