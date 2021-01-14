let initialArray = [0,2,4,6,8,10,20,50,100];

let arrayLen = initialArray.length;

console.log(`Количество элементов - ${arrayLen}`);

// Перебираем массив. Выполняется операция умножения случайного числа на квадрат элемента массива
let newArray = initialArray.map(function(x) {
    return Math.ceil(Math.random()*(x**2));
});
console.log(initialArray);
console.log(newArray);