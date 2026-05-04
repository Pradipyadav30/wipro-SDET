// problem-1

const names = ['Alice', 'Bob', 'Charlie'];

names.forEach(name => {
  console.log("Hello, " + name);
});

// Problem-2. map() – Celsius to Fahrenheit

const tempsC = [0, 10, 20, 30];
const tempsF = tempsC.map(c => c * 1.8 + 32);
console.log(tempsF);


// problem-3
const users = [
  { name: 'Li', age: 16 },
  { name: 'Dan', age: 22 },
  { name: 'Sarah', age: 17 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);

// Problem-4

function longStrings(arr) {
  return arr.filter(str => str.length > 5);
}

console.log(longStrings(["hello", "javascript", "world", "coding"]));

// problem-5

const prices = [19.99, 5.50, 3.99, 25.00];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);

// Problem-6
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];

const count = fruits.reduce((acc, fruit) => {
  if (fruit === 'apple') {
    acc++;
  }
  return acc;
}, 0);

console.log(count);

// problem-7   
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(num => num % 2 === 0)   // even numbers
  .map(num => num * num);         // square

console.log(result);

// problem-8
const products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mouse' }
];

const titles = products.map(p => p.title);

console.log(titles);

// problem-9
const scores = [80, 90, 70, 100];

const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;

console.log(avg);

// problem-10
const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce((acc, curr) => acc.concat(curr), []);

console.log(flat);
