const fruits: string[] = ["apple", "banana", "orange"];
const fruits2: Array<string> = ["apple", "banana", "orange"]; // this is the same as above, but it is better to use the first way of declaring an array, because it is more readable and easier to understand.
//generic type means that the type of the array can be any type, but it is better to use the first way of declaring an array, because it is more readable and easier to understand.
//example of generic type is Array<T>, where T is the type of the array. It can be any type, but it is better to use the first way of declaring an array, because it is more readable and easier to understand.
console.log(fruits);
console.log(fruits2);

const numbers: number[] = [1, 2, 3, 4, 5];

console.log(numbers);
//this is mixed array, it can contain any type of data, 
const mixed: (string | number)[] = ["apple", 2, "orange", 4,4];


console.log(mixed);
//this is multidimensional array, it can contain any type of data,
const nested: string[][] = [["apple", "banana"], ["orange", "grape"]];
const nested2: Array<Array<string>> = [["apple", "banana"], ["orange", "grape"]]; // this is the same as above, but it is better to use the first way of declaring an array, because it is more readable and easier to understand.
const nested3:number [][] = [[1, 2], [3, 4]];
const nested4:Array<Array<number>> = [[1, 2], [3, 4]]; // this is the same as above, but it is better to use the first way of declaring an array, because it is more readable and easier to understand.
const nested5:(string|number) [][] = [["apple", 2], [3, "grape"]];
const nested6:Array<Array<string|number>> = [["apple", 2], [3, "grape"]];
let data: [number[], string[]] = [
  [1, 2, 3],
  ["John", "Jane"],
];
const nested7: [number[], string[]] = [
  [1, 2, 3],
  ["John", "Jane"],
];
const nested8: Array<[number[], string[]]> = [
  [[1, 2, 3], ["John", "Jane"]],
]; //this is three dimenstional array

console.log(nested);