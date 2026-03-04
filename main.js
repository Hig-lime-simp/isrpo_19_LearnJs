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

