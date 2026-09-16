function divide(a:number,b:number):number{ //:number is the return type.but can return void if we don't want to return anything
    if(b===0){
        throw new Error("Division by zero is not allowed.")
    }
    return a/b
}

console.log(divide(10,2))
const result = divide(10,2) //this will return 5
// console.log(divide("sds",2)) //this will throw error because "sds" is not a number and the function expects a number type for both parameters
const pointresult= result.toFixed(2) //this will return 5.00,string value because toFixed returns string
console.log(pointresult)