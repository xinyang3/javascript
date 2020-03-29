function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.clor) {
        // Error: Property 'clor' does not exist on type 'SquareConfig'
        newSquare.color = config.clor;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySearch;
mySearch = function (src, s) {
    let result = src.search(s);
    return result > -1;
};
let mySearch2;
mySearch2 = function (src) {
    // let result = src.search(sub);
    return false;
};
/**索引类型 */
class Animal {
}
class Dog extends Animal {
}
const Clock = class Clock {
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
};
let square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
/**接口继承类 */
class Control {
}
class Button extends Control {
    constructor() {
        super();
    }
    select() {
    }
}
class TextBox extends Control {
    select() { }
}
// Error: Property 'state' is missing in type 'Image'.
class Image {
    select() {
        // this.state
    }
}
let button = new Button();
button.select;
class Father {
}
class Sub extends Father {
    select() {
        this.a;
    }
}
/**
    疑问
    class 内private protected的详细用法和区别
    extends 和 implements的一些区别和用法

 */ 
