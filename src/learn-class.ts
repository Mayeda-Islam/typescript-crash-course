class Student {
   private name: string;
   protected age: number;
   course:Array<string>

    constructor(name: string, age: number,course:Array<string>) {
        this.name = name;
        this.age = age;
       this.course=course //array of courese
    }
}

// const student = new Student("John Doe", 25,["Maths","Physics"]);
// console.log(student);

// student.name = "Jane Doe"; // Error: Property 'name' is private and only accessible within class 'Student'.
// student.age = 30; // Error: Property 'age' is protected and only accessible within class 'Student' and its subclasses.


class Teacher extends Student {
    constructor(name: string, age: number,course:Array<string>) {
        super(name, age,course); //super keyword is used to call the constructor of the parent class
    }
}

const teacher = new Teacher("Jane Doe", 30,["Chemistry","Biology"]  );
console.log(teacher);
