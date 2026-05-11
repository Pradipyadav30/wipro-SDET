// =========================================
// 1. VARIABLES & DATA TYPES
// =========================================

// 1. Swap Two Numbers

let a = 10;
let b = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(a);
console.log(b);


// 2. Check Data Type

let value = true;

if(typeof value === "number"){
    console.log("Number");
}
else if(typeof value === "string"){
    console.log("String");
}
else if(typeof value === "boolean"){
    console.log("Boolean");
}
else if(value === null){
    console.log("Null");
}
else{
    console.log("Undefined");
}


// 3. Celsius to Fahrenheit

let celsius = 30;

let fahrenheit = (celsius * 9/5) + 32;

console.log(fahrenheit);


// 4. Simple Calculator

let num1 = 20;
let num2 = 10;

console.log("Addition =", num1 + num2);
console.log("Subtraction =", num1 - num2);
console.log("Multiplication =", num1 * num2);
console.log("Division =", num1 / num2);


// 5. Age Calculator

let birthYear = 2002;
let currentYear = 2026;

let age = currentYear - birthYear;

console.log(age);



// =========================================
// 2. STRINGS
// =========================================

// 1. Reverse a String

let str = "hello";

let reversed = "";

for(let i = str.length - 1; i >= 0; i--){

    reversed += str[i];
}

console.log(reversed);


// 2. Count Vowels

let text1 = "javascript";

let count = 0;

for(let i = 0; i < text1.length; i++){

    if(
        text1[i] === 'a' ||
        text1[i] === 'e' ||
        text1[i] === 'i' ||
        text1[i] === 'o' ||
        text1[i] === 'u'
    ){
        count++;
    }
}

console.log(count);


// 3. Palindrome String

let text2 = "madam";

let reverse = "";

for(let i = text2.length - 1; i >= 0; i--){

    reverse += text2[i];
}

if(text2 === reverse){

    console.log("Palindrome");

}else{

    console.log("Not Palindrome");
}


// 4. Capitalize First Letter

let sentence = "hello world";

let words = sentence.split(" ");

for(let i = 0; i < words.length; i++){

    words[i] =
        words[i][0].toUpperCase() +
        words[i].slice(1);
}

console.log(words.join(" "));


// 5. Longest Word

let line = "I love javascript programming";

let arr = line.split(" ");

let longest = arr[0];

for(let i = 1; i < arr.length; i++){

    if(arr[i].length > longest.length){

        longest = arr[i];
    }
}

console.log(longest);



// =========================================
// 3. NUMBERS & MATH
// =========================================

// 1. Random Number

let random = Math.floor(Math.random() * 100) + 1;

console.log(random);


// 2. Prime Number

let num = 7;

let isPrime = true;

for(let i = 2; i < num; i++){

    if(num % i === 0){

        isPrime = false;
        break;
    }
}

if(isPrime){

    console.log("Prime");

}else{

    console.log("Not Prime");
}


// 3. Factorial

let number = 5;

let fact = 1;

for(let i = 1; i <= number; i++){

    fact = fact * i;
}

console.log(fact);


// 4. Fibonacci Series

let n = 10;

let first = 0;
let second = 1;

console.log(first);
console.log(second);

for(let i = 3; i <= n; i++){

    let next = first + second;

    console.log(next);

    first = second;
    second = next;
}


// 5. Armstrong Number

let arm = 153;

let temp = arm;

let sum = 0;

while(temp > 0){

    let digit = temp % 10;

    sum += digit * digit * digit;

    temp = Math.floor(temp / 10);
}

if(sum === arm){

    console.log("Armstrong");

}else{

    console.log("Not Armstrong");
}



// =========================================
// 4. ARRAYS
// =========================================

// 1. Largest and Smallest Number

let numbers = [10, 50, 90, 20];

let largest = numbers[0];
let smallest = numbers[0];

for(let i = 1; i < numbers.length; i++){

    if(numbers[i] > largest){

        largest = numbers[i];
    }

    if(numbers[i] < smallest){

        smallest = numbers[i];
    }
}

console.log("Largest =", largest);
console.log("Smallest =", smallest);


// 2. Remove Duplicates

let nums = [1,2,2,3,4,4,5];

let unique = [];

for(let i = 0; i < nums.length; i++){

    if(!unique.includes(nums[i])){

        unique.push(nums[i]);
    }
}

console.log(unique);


// 3. Bubble Sort

let data = [5,2,8,1,9];

for(let i = 0; i < data.length; i++){

    for(let j = 0; j < data.length - 1; j++){

        if(data[j] > data[j+1]){

            let temp1 = data[j];

            data[j] = data[j+1];

            data[j+1] = temp1;
        }
    }
}

console.log(data);


// 4. Second Largest Number

let values = [10,50,90,20,80];

let max = Math.max(...values);

let secondLargest = -Infinity;

for(let i = 0; i < values.length; i++){

    if(
        values[i] > secondLargest &&
        values[i] !== max
    ){

        secondLargest = values[i];
    }
}

console.log(secondLargest);


// 5. Merge Arrays and Remove Duplicates

let arr1 = [1,2,3];
let arr2 = [3,4,5];

let merged = [...arr1, ...arr2];

let result = [];

for(let i = 0; i < merged.length; i++){

    if(!result.includes(merged[i])){

        result.push(merged[i]);
    }
}

console.log(result);



// =========================================
// 5. OBJECTS
// =========================================

// 1. Student Object

let student = {

    name: "Pradip",
    age: 23,
    course: "BTech"
};

for(let key in student){

    console.log(key, student[key]);
}


// 2. Count Number of Keys

console.log(Object.keys(student).length);


// 3. Merge Two Objects

let obj1 = {a:1, b:2};

let obj2 = {c:3, d:4};

let mergedObj = {...obj1, ...obj2};

console.log(mergedObj);


// 4. Convert Object into Array

console.log(Object.entries(student));


// 5. Shopping Cart Total

let cart = {

    item1: 500,
    item2: 1000,
    item3: 700
};

let total = 0;

for(let item in cart){

    total += cart[item];
}

console.log(total);




// =========================================
// 6. LOOPS
// =========================================

// 1. Star Pyramid Pattern

for(let i = 1; i <= 5; i++){

    let star = "";

    for(let j = 1; j <= i; j++){

        star += "*";
    }

    console.log(star);
}


// 2. Multiplication Tables from 1 to 10

for(let i = 1; i <= 10; i++){

    for(let j = 1; j <= 10; j++){

        console.log(i + " x " + j + " = " + i*j);
    }
}


// 3. Sum of Even Numbers from 1 to 100

let evenSum = 0;

for(let i = 1; i <= 100; i++){

    if(i % 2 === 0){

        evenSum += i;
    }
}

console.log(evenSum);


// 4. Prime Numbers from 1 to 100

for(let num = 2; num <= 100; num++){

    let prime = true;

    for(let i = 2; i < num; i++){

        if(num % i === 0){

            prime = false;
            break;
        }
    }

    if(prime){

        console.log(num);
    }
}


// 5. Number Guessing Game

let secret = 7;

let guess = 7;

while(guess !== secret){

    console.log("Wrong Guess");

    break;
}

if(guess === secret){

    console.log("Correct Guess");
}



// =========================================
// 7. FUNCTIONS
// =========================================

// 1. Greatest of Three Numbers

function greatest(a,b,c){

    return Math.max(a,b,c);
}

console.log(greatest(10,50,30));


// 2. Number Palindrome

function palindrome(num){

    let original = num;
    let reverse = 0;

    while(num > 0){

        let digit = num % 10;

        reverse = reverse * 10 + digit;

        num = Math.floor(num / 10);
    }

    return original === reverse;
}

console.log(palindrome(121));


// 3. Currency Conversion

function convert(rupees){

    return rupees / 83;
}

console.log(convert(8300));


// 4. Return Even Numbers from Array

function evenNumbers(arr){

    return arr.filter(num => num % 2 === 0);
}

console.log(evenNumbers([1,2,3,4,5,6]));


// 5. Calculator using Functions

function add(a,b){

    return a+b;
}

function subtract(a,b){

    return a-b;
}

function multiply(a,b){

    return a*b;
}

function divide(a,b){

    return a/b;
}

console.log(add(10,5));
console.log(subtract(10,5));
console.log(multiply(10,5));
console.log(divide(10,5));



// =========================================
// 8. SCOPE & HOISTING
// =========================================

// 1. Variable Hoisting

console.log(x);

var x = 10;


// 2. Block Scope using let

{
    let name = "Pradip";

    console.log(name);
}


// 3. Closure Example

function outer(){

    let count = 0;

    function inner(){

        count++;

        console.log(count);
    }

    return inner;
}

let result = outer();

result();
result();


// 4. Nested Functions

function parent(){

    let message = "Hello";

    function child(){

        console.log(message);
    }

    child();
}

parent();


// 5. Incorrect Variable Scope

function test(){

    if(true){

        let value = 100;

        console.log(value);
    }
}

test();



// =========================================
// 9. CALLBACK FUNCTIONS & setTimeout
// =========================================

// 1. Delayed Greeting

setTimeout(() => {

    console.log("Hello Pradip");

}, 2000);


// 2. Countdown Timer

let count = 5;

let timer = setInterval(() => {

    console.log(count);

    count--;

    if(count < 0){

        clearInterval(timer);
    }

}, 1000);


// 3. Callback Calculator

function calculator(a,b,callback){

    callback(a,b);
}

function addition(x,y){

    console.log(x+y);
}

calculator(10,20,addition);


// 4. Food Ordering System

function orderFood(callback){

    console.log("Food Ordered");

    callback();
}

function foodReady(){

    console.log("Food Delivered");
}

orderFood(foodReady);


// 5. Sequential Execution

function first(callback){

    console.log("First Function");

    callback();
}

function second(){

    console.log("Second Function");
}

first(second);



// =========================================
// 10. ARROW FUNCTIONS
// =========================================

// 1. Normal Function to Arrow Function

const greet = () => {

    console.log("Hello");
};

greet();


// 2. One-line Arrow Function

const square = num => num * num;

console.log(square(5));


// 3. Arrow Function with map()

let nums = [1,2,3];

let doubled = nums.map(num => num * 2);

console.log(doubled);


// 4. Even/Odd Checker

const check = num =>
    num % 2 === 0 ? "Even" : "Odd";

console.log(check(7));


// 5. Student Grade Calculator

const grade = marks => {

    if(marks >= 90) return "A";
    else if(marks >= 70) return "B";
    else return "C";
};

console.log(grade(85));



// =========================================
// 11. map(), filter(), forEach()
// =========================================

// 1. Double Numbers using map()

let values = [1,2,3,4];

let ans = values.map(num => num * 2);

console.log(ans);


// 2. Filter Students above 80

let marks = [60,90,75,85];

let topStudents =
    marks.filter(mark => mark > 80);

console.log(topStudents);


// 3. Print Array using forEach()

let fruits = ["apple","banana","mango"];

fruits.forEach(fruit => {

    console.log(fruit);
});


// 4. Convert Names into Uppercase

let names = ["ram","shyam"];

let upper = names.map(name =>
    name.toUpperCase()
);

console.log(upper);


// 5. Extract Even Numbers

let even = [1,2,3,4,5,6]
    .filter(num => num % 2 === 0);

console.log(even);



// =========================================
// 12. PRIMITIVE vs REFERENCE TYPES
// =========================================

// 1. Primitive Copying

let a = 10;

let b = a;

b = 20;

console.log(a);
console.log(b);


// 2. Object Reference

let obj1 = {name:"Pradip"};

let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name);


// 3. Clone Object

let person = {age:23};

let copy = {...person};

copy.age = 30;

console.log(person.age);
console.log(copy.age);


// 4. Compare Arrays

let arr1 = [1,2];
let arr2 = [1,2];

console.log(arr1 === arr2);


// 5. Shallow Copy

let original = {city:"Patna"};

let shallow = {...original};

console.log(shallow);



// =========================================
// 13. STACK & HEAP MEMORY
// =========================================

// 1. Stack Memory Example

let x = 10;

let y = x;

y = 20;

console.log(x);
console.log(y);


// 2. Heap Memory Example

let user1 = {name:"Pradip"};

let user2 = user1;

user2.name = "Aman";

console.log(user1.name);


// 3. Object Mutation

let data = {value:100};

function change(obj){

    obj.value = 500;
}

change(data);

console.log(data.value);


// 4. Memory Output Prediction

let p = {num:10};

let q = p;

q.num = 50;

console.log(p.num);


// 5. Memory Allocation Diagram

console.log("Primitive -> Stack");
console.log("Objects -> Heap");



// =========================================
// 14. CALL STACK
// =========================================

// 1. Nested Function Calls

function first(){

    console.log("First");

    second();
}

function second(){

    console.log("Second");

    third();
}

function third(){

    console.log("Third");
}

first();


// 2. Recursive Factorial

function factorial(n){

    if(n === 1){

        return 1;
    }

    return n * factorial(n-1);
}

console.log(factorial(5));


// 3. Recursive Fibonacci

function fibonacci(n){

    if(n <= 1){

        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

console.log(fibonacci(6));


// 4. Stack Overflow Simulation

function test(){

    test();
}

// test();


// 5. Call Stack Flow

function one(){

    two();
}

function two(){

    three();
}

function three(){

    console.log("End");
}

one();



// =========================================
// 15. JSON PROBLEMS
// =========================================

// 1. JSON String to Object

let jsonData = '{"name":"Pradip","age":23}';

let object = JSON.parse(jsonData);

console.log(object);


// 2. Object to JSON String

let student = {

    name:"Pradip",
    age:23
};

let json = JSON.stringify(student);

console.log(json);


// 3. Parse API-like JSON

let apiData =
'{"id":1,"title":"JavaScript"}';

let result1 = JSON.parse(apiData);

console.log(result1.title);


// 4. JSON Array of Employees

let employees = [

    {id:1,name:"Ram"},
    {id:2,name:"Shyam"}
];

console.log(employees);


// 5. Filter JSON Data

let filtered =
    employees.filter(emp => emp.id === 1);

console.log(filtered);



// =========================================
// MINI PROJECTS
// =========================================



// =========================================
// 1. STUDENT GRADE CALCULATOR
// =========================================

let marks = 85;

if(marks >= 90){

    console.log("Grade A");

}
else if(marks >= 70){

    console.log("Grade B");

}
else if(marks >= 50){

    console.log("Grade C");

}
else{

    console.log("Fail");
}



// =========================================
// 2. ATM WITHDRAWAL SIMULATOR
// =========================================

let balance = 10000;

let withdraw = 3000;

if(withdraw <= balance){

    balance = balance - withdraw;

    console.log("Withdrawal Successful");

    console.log("Remaining Balance =", balance);

}else{

    console.log("Insufficient Balance");
}



// =========================================
// 3. TO-DO LIST USING ARRAYS
// =========================================

let todo = [];

todo.push("Study JavaScript");

todo.push("Practice Coding");

todo.push("Complete Assignment");

console.log(todo);

todo.pop();

console.log(todo);



// =========================================
// 4. PASSWORD GENERATOR
// =========================================

let chars =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

let password = "";

for(let i = 0; i < 8; i++){

    let randomIndex =
        Math.floor(Math.random() * chars.length);

    password += chars[randomIndex];
}

console.log(password);



// =========================================
// 5. QUIZ APPLICATION
// =========================================

let correctAnswer = "JavaScript";

let userAnswer = "JavaScript";

if(userAnswer === correctAnswer){

    console.log("Correct Answer");

}else{

    console.log("Wrong Answer");
}



// =========================================
// LOGIC BUILDING CHALLENGES
// =========================================



// =========================================
// 1. FIND MISSING NUMBER IN ARRAY
// =========================================

let numbers = [1,2,3,5];

let n = 5;

let total = (n * (n + 1)) / 2;

let sum = 0;

for(let i = 0; i < numbers.length; i++){

    sum += numbers[i];
}

console.log("Missing Number =", total - sum);



// =========================================
// 2. CHECK ANAGRAM STRINGS
// =========================================

let str1 = "listen";
let str2 = "silent";

let s1 = str1.split("").sort().join("");
let s2 = str2.split("").sort().join("");

if(s1 === s2){

    console.log("Anagram");

}else{

    console.log("Not Anagram");
}



// =========================================
// 3. ROTATE ARRAY BY K POSITIONS
// =========================================

let arr = [1,2,3,4,5];

let k = 2;

for(let i = 0; i < k; i++){

    let last = arr.pop();

    arr.unshift(last);
}

console.log(arr);



// =========================================
// 4. FIND DUPLICATE ELEMENTS
// =========================================

let nums = [1,2,3,2,4,5,1];

let duplicate = [];

for(let i = 0; i < nums.length; i++){

    for(let j = i + 1; j < nums.length; j++){

        if(nums[i] === nums[j]){

            if(!duplicate.includes(nums[i])){

                duplicate.push(nums[i]);
            }
        }
    }
}

console.log(duplicate);



// =========================================
// 5. FLATTEN NESTED ARRAYS
// =========================================

let nested = [1,[2,3],[4,5]];

let flat = [];

for(let i = 0; i < nested.length; i++){

    if(Array.isArray(nested[i])){

        for(let j = 0; j < nested[i].length; j++){

            flat.push(nested[i][j]);
        }

    }else{

        flat.push(nested[i]);
    }
}

console.log(flat);



// =========================================
// DEBUGGING CHALLENGES
// =========================================



// =========================================
// 1. FIX INFINITE LOOP
// =========================================

let i = 1;

while(i <= 5){

    console.log(i);

    i++;
}



// =========================================
// 2. FIX UNDEFINED RETURN
// =========================================

function add(a,b){

    return a + b;
}

console.log(add(10,20));



// =========================================
// 3. FIX ARRAY SORTING
// =========================================

let values = [10,5,40,25];

values.sort((a,b) => a - b);

console.log(values);



// =========================================
// 4. FIX VARIABLE SCOPE ISSUE
// =========================================

function test(){

    let message = "Hello";

    console.log(message);
}

test();



// =========================================
// 5. FIX CALLBACK EXECUTION ORDER
// =========================================

function first(callback){

    console.log("First");

    callback();
}

function second(){

    console.log("Second");
}

first(second);