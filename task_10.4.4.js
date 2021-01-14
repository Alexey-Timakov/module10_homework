// Задаем диапазон значений:
let minValue = 0;
let maxValue = 100;

function generateRandom (minV, maxV){
    let randomValue = Math.random();
    // console.log(randomValue);
    // Функция генерации случайного числа из заданного диапазона, включая границы:
    return Math.floor(randomValue * (maxV-minV+1)) + minV;
}

console.log(generateRandom(minValue,maxValue));