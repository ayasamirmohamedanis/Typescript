// Lecture  Typescript 31 & 38


//  // Lecture 31

//  /*
//   Class
//   - Implement Interface
// */
// interface settings{
//   theme: boolean;
//   font?: string;
//   save(): void;
// }
// class User implements settings {

//   constructor(public username: string, public theme: boolean, public font:string) {}
//   save(): void {
//     console.log(`saved`);
//   }
//   update(): void {
//     console.log(`updated`)
//   }
// }
// let userOne = new User("aya", true, "open Sans");

// console.log(userOne.username);
// console.log(userOne.font);

// userOne.save();
// userOne.update();


// // ........................................................................
//  // Lecture 32
 
//  /*
//   Class
//   - Abstract Classes And Members
//   --- We Cannot Create An Instance Of An Abstract Class
// */

// abstract class Food {
//   constructor(public title: string) {}
//   abstract getCookingTime() : void;
// }

// class Pizza extends Food {
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime() : void {
//     console.log(`Cooking Time For Pizza Is 1 Hour`);
//   }
// }

// class Burger extends Food {
//   constructor(title: string, public price: number) {
//     super(title);
//   }
//   getCookingTime() : void {
//     console.log(`Cooking Time For Burger Is Half Hour`);
//   }
// }

// let pizzaOne = new Pizza("Awesome Pizza", 100);

// console.log(pizzaOne.title);
// console.log(pizzaOne.price);
// pizzaOne.getCookingTime();

// // ........................................................................

//  // Lecture 33
//  /*
//   Class
//   - Polymorphism & Method Override

//   - Polymorphism
//   --- Classes Have The Same Methods But Different Implementations

//   - Method Override
//   --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
//   --- A Method In Child Class Must Have Same Name As Parent Class

//   --- noImplicitOverride
// */
// class player {
//   constructor(public name: string) {}
//   attack() : void {
//     console.log("Attacking Now")
//   }
// }
// class Amazon extends player {
//   constructor(name: string, public spears: number) {
//     super(name);
//   }
//   override attack(): void {
//     // super.attack();
//     console.log("Attacking With Spear");
//     this.spears -= 1;
//   }
// }

// class Barbarian extends player {
//   constructor(name: string, public axeDurability: number) {
//     super(name);
//   }
//   override attack(): void {
//     // super.attack();
//     console.log("Attacking With Axe");
//     this.axeDurability -= 1;
//   }
// }

// let barOne = new Barbarian("Elzero", 100);

// console.log(barOne.name);
// barOne.attack();
// console.log(barOne.axeDurability);


// // ........................................................................

// // Lecture 34

// /*
//   Generics
//   - Help Write A Reusable Code
//   - Allow To Pass Type As A Parameter To Another Type
//   - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
//   - We Can Create:
//   --- Generic Classes
//   --- Generic Functions
//   --- Generic Methods
//   --- Generic Interfaces
// */

// function returnNumber(val: number) : number {
//   return val;
// }
// function returnString(val: string) : string {
//   return val;
// }
// function returnBoolean(val: boolean) : boolean {
//   return val;
// }

// console.log(returnNumber(100));
// console.log(returnString("Elzero"));
// console.log(returnBoolean(true));

// function returnType<T>(val: T) : T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));
// console.log(returnType<boolean>(true));
// console.log(returnType<number[]>([1, 2, 3, 4]));

// // ........................................................................

// // Lecture 35

// /*
//   Generics
//   - Arrow Function
//   - Multiple Types
//   - Discussion
// */

// function returnType<T>(val: T): T {
//   return val;
// }

// console.log(returnType<number>(100));
// console.log(returnType<string>("Elzero"));

// const returnTypeArrowSyntax = <T>(val: T): T => val;

// console.log(returnTypeArrowSyntax<number>(100));
// console.log(returnTypeArrowSyntax<string>("Elzero"));

// function testType<T>(val: T): string {
//   return `The Value Is ${val} And Type Is ${typeof val}`;
// }

// console.log(testType<number>(100));
// console.log(testType<string>("Elzero"));

// function multipleTypes<T, S>(valueOne: T, valueTwo: S): string {
//   return `The First Value Is ${valueOne} And Second Value ${valueTwo}`;
// }

// console.log(multipleTypes<string, number>("Osama", 100));
// console.log(multipleTypes<string, boolean>("Elzero", true));

// // ........................................................................

// // Lecture 36

// /*
//   Generics
//   - Classes
// */

// class User<T = string> {
//   constructor(public value: T) {}
//   show(msg: T) : void {
//     console.log(`${msg} - ${this.value}`);
//   }
// }

// let userOne = new User<string>("Elzero");
// console.log(userOne.value);
// userOne.show("Message");

// let userTwo = new User<number | string>(100);
// console.log(userTwo.value);
// userTwo.show("Message");

// ........................................................................

// Lecture 37

/*
  Generics
  - Classes And Interfaces
*/

interface Book {
  itemType: string;
  title: string;
  isbn: number;
}

interface Game {
  itemType: string;
  title: string;
  style: string;
  price: number;
}

class Collection<T> {
  public data: T[] = [];
  add(item: T) : void {
    this.data.push(item);
  }
}

let itemOne = new Collection<Book>();
itemOne.add({ itemType: "Book", title: "Atomic Habits", isbn: 150510 });
itemOne.add({ itemType: "Book", title: "Follow Your Heart", isbn: 650650 });
console.log(itemOne);

let itemTwo = new Collection<Game>();
itemTwo.add({ itemType: "Game", title: "Uncharted", style: "Action", price: 150 });
console.log(itemTwo);