// Lecture  Typescript 23 & 30

 // Lecture 23

// /*
//   Interface
//   - Interface Method And Parameters
// */
// interface User {
//   id : number;
//   userName: string;
//   country: string;
//   sayHello(): string;
//   sayWelcome: () => string;
//   getDouble(num: number) : number;
// }
// let user: User = {
//   id: 50,
//   userName: "aya",
//   country:"egypt",
//   sayHello(){
//     return `Hello ${this.userName}`;
//   },
//   sayWelcome :() => {
//     return `Welcom ${user.userName}`;
//   },
//   getDouble(n) {
//     return n * 2;
//   },
// }
// console.log(user.id);
// console.log(user.sayHello());
// console.log(user.sayWelcome());
// console.log(user.getDouble(50));

// ........................................................................

// // Lecture 24

// /*
//   Interface
//   - ReOpen The Interface And Use Cases
// */
// // Homepage
// interface Settings {
//   readonly theme: boolean;
//   font: string;
// }
// // Articles Page
// interface Settings {
//   sidebar: boolean;
// }
// // Contact Page
// interface Settings {
//   external: boolean;
// }

// let userSettings: Settings = {
//   theme: true,
//   font: "Open Sans",
//   sidebar: false,
//   external: true
// }

// // ........................................................................

// // Lecture 25

// /*
//   Interface
//   - Extending Interfaces
// */
// interface User {
//   id: number;
//   userName: string;
//   country: string;
// }

// interface moderator{
// role: string | number;
// }
// interface Admin extends User,moderator {
//   protect?: boolean;
// }
// let User: Admin = {
//   id: 50,
//   userName: "aya",
//   country:"Egypt",
//   role: "mod",
//   protect: true
// }
// console.log(User)

// // ........................................................................

// // Lecture 26
// /*
//   Interface
//   - Interface vs Type Aliases
//   - Take A Look On HTMLElement Interface
// */

// // let el = document.getElementById("id") as HTMLElement;

// // Homepage
// type Settings = {
//   readonly theme: boolean;
//   font: string;
//   sidebar: boolean;
//   external: boolean;
// }

// let userSettings: Settings = {
//   theme: true,
//   font: "Open Sans",
//   sidebar: false,
//   external: true
// }
// console.log(userSettings)

// // ........................................................................

// // Lecture 27

// /*
//   Type Annotations With Class
// */

// class User {
//   u: string;
//   s: number;
//   msg: () => string ;
//   constructor(userName: string, salary: number) {
//     this.u = userName;
//     this.s = salary;
//     this.msg = function(){
//       return`Hello ${this.u} Your Salary Is ${this.s}`
//     };
//   };
//   sayMsg() {
//     return`Hello ${this.u} Your Salary Is ${this.s}`

//   };
// };

// let userOne = new User("aya", 6000);

// console.log(userOne.u);
// console.log(userOne.s);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

// // ........................................................................

// // Lecture 28

// /*
//   Class
//   - Data Access Modifiers & Parameters Properties
//   --- Public
//   ------ All Members Of A Class In TypeScript Are Public
//   ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions
//   --- Private
//   ------ Members Are Visible Only To That Class And Are Not Accessible Outside The Class
//   --- Protected
//   ------ Same Like Private But Can Be Accessed Using The Deriving Class

//   - TypeScript Is A Layer On Top Of JavaScript
//   - It Should Remove All Annotations And Although Access Modifiers "Private For Example"
// */

// class User {
//   msg: () => string;
//   constructor(private username: string, protected salary: number,public readonly address: string) {
//     this.msg = function () {
//       return `Hello ${this.username} Your Salary Is ${this.salary}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this.username} Your Salary Is ${this.salary}`;
//   }
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// // console.log(userOne.username);
// // console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

// // ........................................................................

// // Lecture 29

// /*
//   Class
//   - Get And Set Accessors
// */

// class User {
//   public get username(): string {
//     return this._username;
//   }
//   public set username(value: string) {
//     this._username = value;
//   }
//   msg: () => string;
//   constructor(private _username: string, public salary: number, public readonly address: string) {
//     this.msg = function () {
//       return `Hello ${this._username} Your Salary Is ${this.salary}`;
//     }
//   }
//   sayMsg() {
//     return `Hello ${this._username} Your Salary Is ${this.salary}`;
//   }
//   // get username() : string {
//   //   return this._username;
//   // }
//   // set username(value: string) {
//   //   this._username = value;
//   // }
// }

// let userOne = new User("Elzero", 6000, "Cairo");

// console.log(userOne.username);
// userOne.username = "Ahmed";
// console.log(userOne.username);
// console.log(userOne.salary);
// console.log(userOne.msg());
// console.log(userOne.sayMsg());

// ........................................................................

// Lecture 30
/*
  Class
  - Static Members
  --- Don't Use "name, length, call"
*/
class user {
  private static created: number = 0;
  static getCount(): void {
    console.log(`${this.created} objects created`);
  }
  constructor(public username: string) {
    user.created++;
  }
}
let u1 = new user("Elzero");
let u2 = new user("Web");
let u3 = new user("School");
// console.log(user.created);
user.getCount();