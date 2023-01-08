type MyReadonly<T> = {
  readonly [P in keyof T] : T[P]
}


// 接收一个范型参数,返回一样的类型,所有属性都是只读
function myReadonly(obj) {
  const result = {}

  for (const key in obj) {
    result['readonly'+ key] = obj[key]
  }

  return result
}

// 1. 返回一个对象
// 2. 遍历 obj (js 里面是对像 ts 里面是接口) in -> mapped keyof -> lookup
// 3. 加上 readonly 关键字
// 4. 通过 key 来获取 obj (接口) 里面的值