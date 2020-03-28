// boolean
let isDone = false;
// number
let decLiteral = 6;
let hexLiteral = 0xf00d;
let binaryLiteral = 0b1010;
let octalLiteral = 0o744;
// string
let name1 = `Gene`;
let age = 37;
let sentence = `Hello, my name is ${name}`;
// array
let list = [1, 2, 3];
let list2 = ['1', '2', '3'];
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
;
let c2 = Color2.Green;
// any
let notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
let prettySure = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
let list3 = [1, true, "free"];
list[1] = 100;
// void
function warnUser() {
    console.log("This is my warning message");
}
// null undefined
// Not much else we can assign to these variables!
let u = undefined;
let n = null;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// assert
let someValue1 = "this is a string";
let strLength1 = someValue1.length;
let someValue2 = "this is a string";
let strLength2 = someValue2.length;
