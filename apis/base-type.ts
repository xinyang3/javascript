
// boolean
let isDone: boolean = false;

// number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// string
let name1: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name1 }`

// array
let list: number[] = [1, 2, 3];
let list2: Array<string> = ['1', '2', '3'];

// enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
enum Color2 {Red = 1, Green, Blue};
let c2: Color2 = Color2.Green;

// any
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.

let list3: any[] = [1, true, "free"];
list[1] = 100;

// void
function warnUser(): void {
    console.log("This is my warning message");
}
// null undefined
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// object
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error

// assert
let someValue1: any = "this is a string";
let strLength1: number = (<string>someValue1).length;

let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;