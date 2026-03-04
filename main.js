// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log();
// for (let i = 0; i < 10; i++) {
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }
// console.log();

// count = 0
// for (let i = 0; i < 10; i++){
//     count = count + i
// }
// console.log(count);

// let count = 0;

// while (count < 3) {
//     console.log("Count:", count);
//     count++;
// }

// let number = 5;

// while (number >= 0) {
//     console.log(number)
//     number--
// }

// let doValue = 0;

// do{
//     console.log("Value",doValue)
//     doValue++;
// } while (doValue < 3);

// for (let i = 0; i < 10; i++){
//     if (i === 5){
//         break
//     }
//     console.log(i);
// }

// for (let i = 0; i < 10; i++){
//     if (i === 5){
//         continue
//     }
//     if (i === 8){
//         break
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 3; i++){
//     for (let j = 1; j <= 3; j++){
//         console.log(`i = ${i}, j = ${j}`)
//     }
// }

// for (let i = 1; i <= 4; i++) {
//     let string = "";
//     for (let j = 1; j <= i; j++) {
//         string += "*";
//     }
//     console.log(string);
// }

// function sum(a, b) {
//     return a + b;
// }

// console.log(sum(3, 5));

// function multiply(a, b) {
//     return a * b;
// }

// console.log(multiply(3,5))

// function printInfo(name,age){
//     console.log(`Меня зовут ${name}, мне ${age}`)
// }

// printInfo("Никита", 18)

// function calculateDiscount(price, persent = 10.00){
//     return price * (persent / 100)
// }

// console.log(calculateDiscount(1000, 2))

// const add = function (a, b) {
//     return a + b;
// };

// console.log(add(2, 3)); 

// function makeCounter() {
//     let count = 0; // Локальная переменная
//     return function () {
//         count++; // Функция "помнит" count
//         return count;
//     };
// }

// const counter = makeCounter();
// console.log(counter()); // 1
// console.log(counter()); // 2
// console.log(counter()); // 3

// Обычная функция
// function sumFunc(a, b) {
//     return a + b;
// }

// const sumFunc2 = (a, b) => a + b;

// const double = x => x * 2;

// const sumFunc3 = (a, b) => a + b;

// const sayGreeting = () => console.log("Hello");

// const square = x => x * x; // return автоматически

// const calculate = (a, b) => {
//     let result = a + b;
//     return result * 2;
// };

// console.log(calculate(1,2))

// let numbersArr = [1, 2, 3, 4, 5];
// console.log(numbersArr);

// console.log(numbersArr[0]); 
// console.log(numbersArr[1]); 

// let colors = ["Red","Green","Blue"]
// console.log(colors[0]);
// console.log(colors.slice(-1)[0]);
// colors[1] = "White"
// console.log(colors);

// console.log(numbersArr.length);

// numbersArr.push(10);
// console.log(numbersArr);

// numbersArr.pop();
// console.log(numbersArr);

// let student = [];
// student.push("Имя1");
// student.push("Имя2");
// student.push("Имя3");
// student.pop();
// console.log(student);

// let numbers2 = [10, 20, 30];
// for (let i = 0; i < numbers2.length; i++) {
//     console.log(numbers2[i]);
// }

// for (let value of numbers2) {
//     console.log(value);
// }

// let mixedArray = [1, "text", true, 3.14];
// console.log(mixedArray);

// console.log(numbersArr.indexOf(2)); 

// let fruits = ["яблоко", "банан", "апельсин"];
// console.log(fruits.includes("яблоко"));
// console.log(fruits.includes("манго"));

// let city = ["Москва","Питер","Екатеринбург"]

// function search(CityForSearch,arr = city){
//     if (arr.includes(CityForSearch)){
//         return arr.indexOf(CityForSearch)
//     }
//     return "Error" 
// }

// console.log(search());

// let user2 = {
//     name: "Ivan",
//     age: 20,
//     isStudent: true,
// };

// console.log(user2);

// // Через точку:
// console.log(user2.name);  // "Ivan"
// console.log(user2.age);   // 20

// console.log(user2["name"]); // "Ivan"

// let book = {
//     title: "test",
//     author: "test",
//     year: 2026
// }
// console.log(book.title, book.author, book.year);
// book.year = 2027
// console.log(book.title, book.author, book.year);

// user2.age = 30;
// user2.name = "Кирилл";
// delete user2.isStudent;
// console.log(user2);



// let user2 = {
//     name: "Ivan",
//     age: 20,
//     isStudent: true,
//     sayHello: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// user2.sayHello();

// let car = {
//     brand: "BMW",
//     year: 2016,
//     getInfo: function(){
//         console.log(this.brand, this.year);
//     }
// }

// car.getInfo()

// for (let key in user2) {
//     console.log(key + ":" + user2[key]);
// }

// let product = {
//     first: "1111",
//     second: 1111
// }
// for (let i in product){
//     console.log(product[i]);
// }

// let student = {
//     name: "Григорий",
//     skills: ["HTML", "CSS", "JS"],
//     address: {
//         city: "Волжский",
//         street: "Пушкина",
//     },
// };

// console.log(student.skills[0]);   
// console.log(student.address.city);    