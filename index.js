// 1 Combining Arrays
let euroCountries = ["Germany", "France", "Spain", "England", "Poland"];
let asianCountries = ["Singapore", "Japan", "China", "Ukraine"];

console.log([...euroCountries, ...asianCountries]);

let euroCountries2 = ["Germany", "France", "Spain", "England", "Poland"];
let asianCountries2 = ["Singapore", "Japan", "China", "Ukraine"];

const worldCities = [...euroCountries2, ...asianCountries2];
console.log(worldCities);

// 2 Copying Arrays
let eurasianCountries = [...worldCities];
console.log(eurasianCountries);

// 3 Find the Largest...
const numArr = [1, 2, 3, 4, 1001, 7];
function biggestNumber(arr) {
  console.log(Math.max(...arr));
}
biggestNumber(numArr);
// 4 Find the Smallest
function smallestNumber(arr) {
  console.log(Math.min(...arr));
}
smallestNumber(numArr);

// 5 Clone and Merge
const person = { name: "John" };
const job = { role: "Teacher" };

const person2 = person;
const employee = { ...person, ...job };
// console.log(employee);
employee.name = "Ted";
console.log(employee);
console.log(person2);
// was not sure what the question was asking me to do on #5

// Bonus: 6. Is the average a whole number?
function wholeNumCheck(num1, num2, num3, num4) {
  if ((num1 + num2 + num3 + num4) % 4 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}
wholeNumCheck(1, 2, 3, 4);
wholeNumCheck(9, 2, 2, 5);
wholeNumCheck(5, 5, 5, 5);
wholeNumCheck(...[3, 2, 3, 4]);
