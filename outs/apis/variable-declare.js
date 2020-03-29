// let
/* 块作用域 */
// eg1
// function f(input: boolean) {
//     let a = 100;
//     if (input) {
//         // Still okay to reference 'a'
//         let b = a + 1;
//         return b;
//     }
//     // Error: 'b' doesn't exist here
//     return b;
// }
// let b;
// eg2
// function foo() {
//     // okay to capture 'a'
//     return a;
// }
// foo();
// let a;
/* 重定义及屏蔽 */
// eg1
function f(condition, x) {
    if (condition) {
        let x = 100;
        return x;
    }
    return x;
}
f(false, 0); // returns 0
f(true, 0); // returns 100
// eg2 屏蔽 for循环有自己的作用域
function sumMatrix(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }
    return sum;
}
/**  块级作用域变量的获取 */
// eg1 
function theCityThatAlwaysSleeps() {
    let getCity;
    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        };
    }
    return getCity();
}
// eg2 在循环里引入了一个新的变量环境，而是针对 每次迭代都会创建这样一个新作用域
for (let i = 0; i < 10; i++) {
    setTimeout(function () { console.log(i); }, 100 * i); // 0-9
}
// 数组结构
// let o = {
//     a: "foo",
//     b: 12,
//     c: "bar"
// };
// let { a, b } = o;
/** 对象解构 */
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b } = o;
// 缺省值
function keepWholeObject(wholeObject) {
    let { a, b = 1001 } = wholeObject;
}
// 展开
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = Object.assign(Object.assign({}, defaults), { food: "rich" }); // {food: "spicy", price: "$$", ambiance: "noisy"}
// 它仅包含对象 自身的可枚举属性
class C {
    constructor() {
        this.p = 12;
    }
    m() {
    }
}
let c1 = new C();
let clone1 = Object.assign({}, c1);
clone1.p; // ok
//   clone1.m(); // error!
