const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];
const allPeople = [];
// เริ่มเขียนโค้ดตรงนี้
allPeople.push(...techupPeople, ...techcoolPeople);
const peopel20 = allPeople
  .map((number) => number)
  .filter((numberAge) => numberAge.age < 20);
console.log(peopel20);
