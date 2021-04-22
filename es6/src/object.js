// 解构对象
let obj = {a: {b: 1}}

let {...x} = obj;
x.a.b = 2;

console.log(obj)
