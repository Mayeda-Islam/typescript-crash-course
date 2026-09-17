// generic function
// <T> or <V>
function add<T,V>(a:T,b:V):void{
    // console.log(a+b);কারণ T এবং V যেকোনো type হতে পারে,
    // হতে পারে boolean, object, array ইত্যাদি। এসব type-এর সাথে + করা যায় না। TypeScript তাই নিশ্চিত হতে পারছে না যে a + b valid হবে।
    console.log(a,b);
}

add("1",2)
add("1","2")
add(1,2)

// generic interface
interface GenericInterface<T>{
    name:T
}
class cat implements GenericInterface<number>{
    name: number=0 ;
    // constructor(name:string){
    //     this.name=name
    // }
}

const cat1=new cat()
console.log(cat1);

class genericClass<T,V>{
    name:T;
    age:V;
    constructor(name:T,age:V){
        this.name=name;
        this.age=age;
    }
}
const cat2=new genericClass<string,number>("cat",2)
console.log(cat2);