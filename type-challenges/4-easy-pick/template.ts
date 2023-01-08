// ts 联合类型 union  'title' | 'completed' | 'invalid'

// keyof 获取所有属性
// ts 中遍历用的是 in
// extends 是约束


type MyPick<T, K extends keyof T> = {
  [P in K] : T[P]
}

// js实现方式
function myPick(todo, keys) {
  const obj = {}

  keys.forEach(key => {
    if(key in todo) {
      obj[key] = todo[key]
    }
  });
  
  return obj
}

// 1. 返回一个对像
// 2. 遍历foreach
// 3. todo[key]取值
// 4. 看看 key 在不在 todo 里面