type address=string;

type stringOrNumber=string|number;

type movies= "The Dark Knight" | "Inception" | "Interstellar";

// interface person= "John Doe" | "Jane Doe" | "Jack Doe";
// interface-এর পরে = ব্যবহার করা যায় না।
// String union-এর জন্য type ব্যবহার করতে হয়।
//  interface দিয়ে union type লেখা যায় না। 
//  interface ব্যবহার করলে object structure দিতে হয়।


interface A{
    name:string;
    age:number;
}
interface B{
    address:string;
}   
// intersection type, works like and operator
const AB: A & B = {
    name: "John Doe",
    age: 25,
    address: "123 Main Street",
};
console.log(AB);