type myNumber = number;

const sallary: myNumber = 10;

type employee = {
  name: string;
  age: number;
  isManager: boolean;
  address?: string //optional
};
// type alias is used to create a new name for a type.
//  It is used to create a new name for a type that is already defined.
// It is better to use interface instead of type alias when you want to create a new name for a type that is not yet defined.
const employee1: employee = {
  name: "John Doe",
  age: "25 years" as unknown as number, //type assertion is used to tell the compiler that we know the type of a variable better than it does. It is used to convert a variable from one type to another. It is also used to tell the compiler that we know the type of a variable better than it does. It is used to convert a variable from one type to another.
  isManager: true,
  address: "123 Main Street",
};

const employee2: employee = {
  name: "Jane Doe",
  age: 30,
  isManager: false,
};
// console.log(employee1, employee2, sallary);

// nested type
type company = {
  name: string;
  employees: employee[];
};

const company1: company = {
  name: "ABC Company",
  employees: [employee1, employee2],
};
// console.log(company1);

// composed type
type person = {
  name: string;
  age: number;
};

// intersection type,works like and operator
type employee2 = person & {
  isManager: boolean;
};

const employee3: employee2 = {
  name: "John Doe",
  age: 25,
  isManager: true,
};
console.log(employee3);

// union type,works like or operator
type employee3 = person | {
  isManager: boolean | string;
};
const employee4: employee3 = {
  name: "Jane Doe",
  age: 30,
    isManager: "yes",
};
const employee5: employee3 = {
  name: "John Smith",
  age: 35,
  isManager: true,
};
const employee6: employee3 = {
  name: "Jane Smith",
  age: 28};
    
console.log(employee4);
console.log(employee5);
console.log(employee6);
// or operator is used to combine two or more types into a single type. It is used to create a new type that can be any of the types mentioned in the union.
//  It is better to use intersection type instead of union type, because intersection type is more strict and it will give error if the object does not have all the properties of the type.
//  Union type is more flexible and it will allow the object to have any of the properties of the type.
// it is better to use intersection type instead of union type, because intersection type is more strict and it will give error if the object does not have all the properties of the type. Union type is more flexible and it will allow the object to have any of the properties of the type.

// template literal type
type myString = `${string}`;
const name: myString = "John Doe";
console.log(name);
type startWithLWK=`LWK${string}`
// const myString2:startWithLWK="LWjk123"; //error becuase it does not start with LWK
const myString2:startWithLWK="LWK123";
console.log(myString2);
// template literal rules for strict mode of string checking.
// TypeScript-এর template literal type হলো string-এর নির্দিষ্ট pattern তৈরি করার type।

type Direction = "top" | "bottom";
type Position = `${Direction}-left` | `${Direction}-right`;

let position: Position = "top-left";
// let position: Position = "center"; // Error