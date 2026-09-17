type customer = {
  name: string;
  age: number;
};
const customer1: customer = {
  name: "John Doe",
  age: 25,
};
console.log(customer1);

interface customer2 {
  name: string;
  age: number;
}
const customer3: customer2 = {
  name: "John Doe",
  age: 25,
};
console.log(customer3);