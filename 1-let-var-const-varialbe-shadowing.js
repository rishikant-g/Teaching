// console.log(a); // undefined
// var a = 5;


// console.log(x); // Reference error
// let x = 10;


/* Block level vs functional level score */
// 1 block level score
// if (true) {
//     var a = 10;
//     let x = 100;
// }
// console.log(a); // a value will be printed
// console.log(x); // Throw the reference error

// Functional scope

// const printData = () => {
//     var a = 10;
//     let i = 100;
// }
// console.log(a); //Reference error
// console.log(i); // Reference error
// printData();

// for (var i = 0; i <= 10; i++) { // var will move to global score and 11 will be printed 11 times
//     setTimeout(() => {
//         console.log(i);
//     }, 100)
// }

// var can be redeclare multiple time in same score but let can't be

// for (let i = 0; i <= 10; i++) { // let will in block scope means 11 times i referes to new variable and it will print 0 to 10
//     setTimeout(() => {
//         console.log(i);
//     }, 100)
// }

// var a = 10
// var a = 20;
// var a = 100;
// console.log(a);

// let x = 10;
// let x = 20;
// let x = 100;

//Const can't be redeclare or we can't update the value of it for premitive data types

// const func = () => {
//     let a = "Risheekant";
//     if (true) {
//         let a = "Vishwakarma"; // New value assigned
//         console.log(a);
//     }
//     console.log(a);
// }
// func(); // output: Vishwakarma Risheekant

// //let update the code with var and value will be overiden
// const func1 = () => {
//     var a = "Risheekant";
//     if (true) {
//         var a = "Vishwakarma"; // New value assigned
//         console.log(a);
//     }
//     console.log(a);
// }
// func1(); // output: Vishwakarma Vishwakarma

// //################################################

// const test = () => {
//     var a = "Risheekant";
//     let b = "Vishwakarma";

//     if (true) {
//         let a = "Testing"; // Legal Shadowing
//         //var b = "Hello"; // Illegal Shadowing
//         console.log(a); // It will print 'Testing'
//         console.log(b); // It will print error 
//         //VM441:7 Uncaught SyntaxError: Identifier 'b' has already been declared
//     }
//     // console.log(a);
//     // console.log(b); // Here if you try to print b it will be confusing which b should be printed here outer or inner that's why it's illegal shadowing
// }
// test();

//The Shadow DOM is a web standard that creates a little bubble around a part of the DOM,
//keeping it separate from the rest.

(function () {
    var a = b = 3;
})();
console.log(a); // will be error because a is inside the functional score 
console.log(b); // output 3 because will is declared without andy keyworkd so it will move to the global scope