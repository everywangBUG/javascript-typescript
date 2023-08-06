function foo<T, E>(arg1: T, arg2: E): [T, E] {
  return [arg1, arg2]
}

foo<string, number>('123', 234)

export {}