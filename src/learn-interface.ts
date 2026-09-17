interface Employee {
  name: string;
  age: number;
  isManager: boolean;
}

const employee: Employee = {
  name: "John Doe",
  age: 25,
  isManager: true,
};

console.log(employee);

interface Employee {
  address?: string;
}

const employee2: Employee = {
  name: "John Doe",
  age: 25,
  isManager: true,
};

console.log(employee2);

interface Employee {
  name: string;
  age: number;
  isManager: boolean;
  address?: string;
}

const employee3: Employee = {
  name: "John Doe",
  age: 25,
  isManager: true,
};

console.log(employee3);

interface Account {
  readonly id: number;
  username: string;
}

const account: Account = {
  id: 101,
  username: "john",
};
console.log(account, account.id, account.username);
// account.id = 202; // Error: Cannot assign to 'id' because it is a read-only property

interface Person {
  name: string;
  age: number;
}

interface ManagerEmployee extends Person {
  salary: number;
  isManager: boolean;
}

const employee4: ManagerEmployee = {
  name: "Karim",
  age: 30,
  salary: 50000,
  isManager: true,
};
console.log(employee4);

//array of interfaces
interface Student {
  name: string;
  roll: number;
}

const students: Student[] = [
  { name: "Rahim", roll: 1 },
  { name: "Karim", roll: 2 },
];
console.log(students);

// funtion interface
interface Add {
  (a: number, b: number): number;
}

const add: Add = (a, b) => {
  return a + b;
};
console.log(add(1, 2));

// class interface
interface Vehicle {
  brand: string;
  start(): void;
}

//implementing interface meaning the class will have to implement all the properties and methods of the interface
class Car implements Vehicle {
  brand: string;
  constructor(brand: string) {
    console.log(brand);
    console.log;
    this.brand = brand;
  }

  start(): void {
    console.log(`${this.brand} is starting`);
  }
}

const car = new Car("Toyota");
car.start();
