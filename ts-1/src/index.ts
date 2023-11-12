// Lecture  Typescript 1 & 8 

// console.log(Math.floor(10.5));

// ...........................................

// Lecture 4

// let num = 10;
// num = "Elzero";
// console.log(num);

// let age = 40;
// if (age > 30) {
//   console.log("Good");
// } else {
//   console.log(age.repeat(3));
// }

// ...........................................

// Lecture 5  Type Annotations

// let theName: string = "aya";
// let theAge: number =26;
// let hire: boolean =true;
// let all: any;
//  all ="aya";
//  all =26;

// function add(n1:number, n2:number) {
//   return n1 + n2;
// }
// console.log(add(10,20));
// console.log(typeof add(10, 20));

// ...........................................

// Lecture 6   Type Annotations With Arrays

// let all: string | number | boolean ="aya";
// all = "a";
// all = 100;
// all =true;

// let myFriends: string[] =["osama", "aya", "ahmed"];
// for (let i = 0; i < myFriends.length; i++){
//   console.log(myFriends[i].repeat(3));
// }

// ...........................................................

// Lecture 7    Type Annotations With Multidimensional Arrays

// let arrayOne: number[] = [1, 2, 3, 4, 5];
// let arrayTwo: string[] = ["A", "B", "C"];
// let arrayThree: (string | number)[] = [1, 2, 3, 4, "A", "B", "C"];
// let arrayFour: (string | number | string[] | boolean)[] = [1, 2, 3, 4, "A", "B", ["C", "D"], true, false];


// ................................................................

// Lecture 8      Type Annotations With Functions

/*
  - noImplicitAny
  - noImplicitReturns
  - Will Check All Code Paths In A Function To Ensure They Return A Value
  - noUnusedLocals
  - Report Errors On Unused Local Variables
  - noUnusedParameters
  - Report Errors On Unused Parameters In Functions.
*/
let showMsg = true;
function showDetails(name: string, age: number, salary: number) : string {
  let test = 10;
  if (showMsg) {
    return `hello ${name}, Age is ${age}, salary is ${salary}, test variable ${test}`;
  }
  return `no data to show`;
}
console.log(showDetails("aya" , 26 , 6000))