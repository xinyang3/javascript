/**
 * 构造函数
 */
// eg1
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// let greeter: Greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet());
// eg2
class Greeter {
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}
Greeter.standardGreeting = "Hello, there";
let greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
let greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
console.log(typeof Greeter);
let greeter2 = new greeterMaker();
console.log(greeter2.greet());
