let myName: string = "John Doe";
let age: number = 25;
let isStudent: boolean = true;
const countries: string[] = ["USA", "Canada", "UK"];

console.log(myName);
console.log(age);
console.log(isStudent);
console.log(typeof myName); // Output: string   

let xb:any=true //dont use any type in typescript, it will defeat the purpose of using typescript. It is better to use unknown type instead of any type.

let x:string|number|boolean|undefined|null; //union type, it can be any of the types mentioned in the union. It is better to use unknown type instead of any type.
x="Hello"; // x is a string
x=1; // x is a number
x=true; // x is a boolean
x=undefined; // x is undefined
x=null; // x is null

class Car {
        name: string;
        constructor(input: string) {
            this.name = input;
        }
    }
class Human {
    name: string;
    constructor(input: string) {
        this.name = input;
    }
}
let BMW=new Car("BMW");
console.log(BMW.name); // Output: BMW

if(BMW instanceof Car){ //instanceof operator is used to check if an object is an instance of a class
    console.log("yes");
}else{
    console.log("No");
}

//type assertion is used to tell the compiler that we know the type of a variable better than it does. It is used to convert a variable from one type to another. It is also used to tell the compiler that we know the type of a variable better than it does. It is used to convert a variable from one type to another.
let str:any="Hello World";
str=34
//console.log(indexOf("e")); // Output: -1, because str is a number now and indexOf is not a function of number type. It is a function of string type. It is better to use unknown type instead of any type.

console.log((str as string).indexOf("e")); // Output: 1
console.log((<string>str).indexOf("e")); // Output: 1, this is another way of type assertion, but it is not recommended to use this way because it can cause confusion with JSX syntax. It is better to use the first way of type assertion.