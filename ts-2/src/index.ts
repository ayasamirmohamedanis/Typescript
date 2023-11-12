// Lecture  Typescript 9 & 22

// Lecture 10

// /*
// function 
// 1- rest parameter
// 2- what about float => all is under type number
// */
// function addAll(...nums: number[]) : number {
//   let result = 0;
//   // for (let i = 0; i < nums.length; i++){
//   //   result += nums[i];
//   // }
//   nums.forEach((num) => result += num);
//   return result;
// }
// console.log(addAll(10, 20, 30, 100, 10.5, +true));

// ...........................................

// Lecture 11

// /*
//   Function
//   - Anonymous Function
//   - Arrow Function
// */
// const add = function(num1: number, num2: number) : number {
//   return num1 + num2;
// }
// console.log(add(10, 20));

// const addWithArrow = (num1: number, num2: number) :number => num1 + num2;
// console.log(addWithArrow(10, 20));

// ...........................................

// Lecture 12

// /*
//   Data Types
//   - Type Alias
// */

// type st =string;
// let theName: st = "aya";
// theName = "samir";

// type standnum = string | number;
// let all: standnum = 10;
// all = 100;
// all = "aya";

// ...........................................

// // Lecture 13

// /*
//   Data Types
//   - Advanced Type Alias
// */
// type Buttons = {
//   up: string;
//   right: number;
//   down: string;
//   left: number;
// }
// type last = Buttons & {
//   x: boolean
// }
// function getActions(btns: last) {
//   console.log(`Action For Button Up Is ${btns.up}`);
//   console.log(`Action For Button Right Is ${btns.right}`);
//   console.log(`Action For Button Down Is ${btns.down}`);
//   console.log(`Action For Button Left Is ${btns.left}`);
// }

// getActions({ up: "Jump", right: 2, down: "Go Down", left: 3, x: true });

// ...........................................

// // Lecture 14

// /*
//   Data Types
//   - Literal Types
// */

// type nums = 0 | 1 | -1;

// function compare(num1: number, num2: number) : nums {
//   if (num1 === num2) {
//     return 0;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return -1;
//   }
// }

// console.log(compare(20, 20)); // 0
// console.log(compare(20, 15)); // 1
// console.log(compare(20, 30)); // -1

// let myNumber: nums = 1;

// ...........................................

// // Lecture 15
// /*
//   Data Types
//   - Tuple
//   --- Is Another Sort Of Array Type
//   --- We knows Exactly How Many Elements It Contains
//   --- We Knows Which Types It Contains At Specific Positions
// */

// let article: readonly [number, string, boolean] = [11, "Title One", true];
// article = [12, "Title Two", false];
// // article.push(100);
// console.log(article);

// const [id, title, published] = article;
// console.log(id);
// console.log(title);
// console.log(published);

// ...........................................

// Lecture 17
// /*
//   Data Types
//   - Void
//   --- Function That Will Return Nothing
//   --- Function In JavaScript That Not Return A Value Will Show undefined
//   --- undefined is not void
//   - Never
//   --- Return Type Never Returns
//   --- The Function Doesn't Have A Normal Completion
//   --- It Throws An Error Or Never Finishes Running At All "Infinite Loop"
// */

// function logging(msg: string) : void {
//   console.log(msg);
//   return;
// }

// console.log(logging("Iam A Message"));
// console.log("Test");

// const fail = (msg: string) => {
//   throw new Error(msg);
//   // return 10;
// }

// function alwaysLog(name: string) : never {
//   while(true) {
//     console.log(name);
//   }
// }

// alwaysLog("Osama");
// // console.log("Test");

// ...........................................

//  // Lecture 16

// /*
//   Data Types
//   - Enums => Enumerations
//   --- Allow Us To Declare A Set Of Named Constants
//   --- Used For Logical Grouping Collection Of Constants "Collection Of Related Values"
//   --- It Organize Your Code
//   --- By Default Enums Are Number-Based, First Element Is 0
//   --- Theres A Numeric Enums
//   --- Theres A String-Based Enums
//   --- Theres Heterogeneous Enums [String + Number]
// */

// const KIDS = 15;
// const EASY = 9;
// const MEDIUM = 6;
// const HARD = 3;

// enum Level {
//   Kids = 15,
//   Easy = 9,
//   Medium = 6,
//   Hard = 3
// }

// let lvl: string = "Easy";

// if (lvl === "Easy") {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Easy}`);
// }


// ...........................................

// // Lecture 18
// /*
//   Data Types
//   - Enums => Enumerations
//   --- Enum Can Refer To Other Enum
//   --- Enum Can Refer To Same Enum
//   --- Enum Can Have Calculations
//   --- Enum Can Have Functions
// */

// function getHardSeconds() : number {
//   return 3;
// }

// enum Kids {
//   Five = 25,
//   Seven = 20,
//   Ten = 15
// }

// enum Level {
//   Kid = Kids.Ten,
//   Easy = 9,
//   Medium = Easy - 3,
//   Hard = getHardSeconds()
// }

// let lvl: string = "Easy";

// if (lvl === "Easy") {
//   console.log(`The Level Is ${lvl} And Number Of Seconds Is ${Level.Hard}`);
// }


// ...........................................

// // Lecture 19

// /*
//   Data Types
//   - Type Assertions
//   --- Sometime Compiler Doesnt Know The Information We Do
//   --- TypeScript Is Not Performing Any Check To Make Sure Type Assertion Is Valid
// */

// // let myImg = document.getElementById("my-img") as HTMLImageElement;
// let myImg = <HTMLImageElement> document.getElementById("my-img");
// console.log(myImg.src);

// let data: any = 1000;
// console.log((data as string).repeat(3));

// ...........................................

// // Lecture 20
// /*
//   Data Types
//   - Union And Intersection Types
//   --- Union Type
//   ------ The | Symbol Is Used To Create The Union => "Or"

//   --- Intersection Type
//   ------ Is A Type That Combines Several Types Into One
//   ------ The & Symbol Is Used To Create An Intersection => "And"

//   --- If A Union Is An OR, Then An Intersection Is An AND.
// */

// // let all: number | string = 100;

// type A = {
//   one: string,
//   two: number,
//   three: boolean
// }

// type B = A & {
//   four: number
// }

// type C = {
//   five: boolean
// }

// type mix = A & C;

// function getActions(btns: mix) {
//   console.log(`Hello ${btns.one}`);
//   console.log(`Hello ${btns.two}`);
//   console.log(`Hello ${btns.three}`);
//   console.log(`Hello ${btns.five}`);
// }

// getActions({ one: "String", two: 100, three: true, five: true });

// ...........................................

// // Lecture 21
// /*
//   Data Types
//   - Union And Intersection Types
//   --- Union Type
//   ------ The | Symbol Is Used To Create The Union => "Or"

//   --- Intersection Type
//   ------ Is A Type That Combines Several Types Into One
//   ------ The & Symbol Is Used To Create An Intersection => "And"

//   --- If A Union Is An OR, Then An Intersection Is An AND.
// */

// // let all: number | string = 100;

// type A = {
//   one: string,
//   two: number,
//   three: boolean
// }

// type B = A & {
//   four: number
// }

// type C = {
//   five: boolean
// }

// type mix = A & C;

// function getActions(btns: mix) {
//   console.log(`Hello ${btns.one}`);
//   console.log(`Hello ${btns.two}`);
//   console.log(`Hello ${btns.three}`);
//   console.log(`Hello ${btns.five}`);
// }

// getActions({ one: "String", two: 100, three: true, five: true });

// ...........................................

// // Lecture 22

/*
  Interface
  - Interface Declaration
  --- Serve Like Types
  --- The Interface Describes The Shape Of An Object
  --- It Defines The Syntax To Follow

  --- Use With Object
  --- Use With Function
  --- Use Read Only And Optional Operator
*/

interface User {
  id?: number,
  readonly username: string,
  country: string
}

let user: User = {
  id: 100,
  username: "Elzero",
  country: "Egypt"
}

user.country = "Syria";

console.log(user);

function getData(data: User) {
  console.log(`Id Is ${data.id}`);
  console.log(`Username Is ${data.username}`);
  console.log(`Country Is ${data.country}`);
}

getData({ id: 200, username: "Osama", country: "KSA" });