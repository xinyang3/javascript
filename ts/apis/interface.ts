// 可选属性
interface SquareConfig {
    color?: string;
    width?: number;
  }
  
function createSquare(config: SquareConfig): { color: string; area: number } {
let newSquare = {color: "white", area: 100};
if (config.color) {
    // Error: Property 'clor' does not exist on type 'SquareConfig'
    newSquare.color = config.color;
}
if (config.width) {
    newSquare.area = config.width * config.width;
}
return newSquare;
}
/**属性检查 */
// let mySquare = createSquare(<SquareConfig>{color: "black", a: ""});  // 断言
  
//   let squareOptions = { colour: "red", width: 100 }; // 变量重新赋值跳过检查
//   let mySquare = createSquare(squareOptions);

/**只读属性 */

/**函数类型 */
interface SearchFunc {
    (source: string, subString: string): boolean;
  }
let mySearch: SearchFunc;
mySearch = function(src: string, s: string) {
    let result = src.search(s);
    return result > -1;
}

let mySearch2: SearchFunc;
mySearch2 = function(src) {
    // let result = src.search(sub);
    return false;
}

/**索引类型 */
class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
    [x: number]: Dog; // number类型会被转成string类型
    [x: string]: Animal;
}

interface NumberDictionary {
    [index: string]: number | string;
    length: number;    // ok, length is a number
    name: string;      // error, the type of 'name' is not a subtype of the indexer 等价于obj[name] 所以类型转换错误
}

/** class 静态的和实例的区别 */
// interface ClockConstructor {
//     new (hour: number, minute: number) : ClockInterface; // 需要返回一个实例
// }

// interface ClockInterface {
//     tick();
// } 
// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

interface ClockConstructor {
    new (hour: number, minute: number);
  }
  
  interface ClockInterface {
    tick();
  }
  
  const Clock: ClockConstructor = class Clock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log("beep beep");
    }
  }

  /** 接口的继承 */
  interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

/**接口继承类 */
class Control {
    // private state: any;
    state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    constructor () {
        super();
    }
    select() {
     }
}

class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//      state: any;
//     select() { 
//         // this.state
//     }
// }

let button = new Button();
button.select


class Father {
     a: string;
}

class Sub extends Father {
    select () {
        this.a
    }
}


/**
    疑问
    class 内private protected的详细用法和区别
    extends 和 implements的一些区别和用法

 */