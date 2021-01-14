let inputString = "Тестовая строка";
console.log(inputString);
let workArray = inputString.split("");

let reverseArray = workArray.reverse();

console.log(reverseArray.join(""));
// И обратно:
// console.log(reverseArray.join("").split("").reverse().join(""));

