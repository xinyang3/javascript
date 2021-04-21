var a;
function f() {
    // var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = f();
g(); // returns 11;
console.log(a) // undefined 1

a = 10;
g(); // 11 a是引用传递