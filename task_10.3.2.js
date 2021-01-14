// Задаем переменную для проверки:
// let testValue = 10;
let testValue = "Hey. dude!";
// let testValue = true;
// let testValue = null;

let typeTestValue = typeof(testValue);

switch(typeTestValue){
    case "number":
        console.log(`Переменная ${testValue} - число`);
        break;
    case "string":
        console.log(`Переменная ${testValue} - строка`);
        break;
    case "boolean":
        console.log(`Переменная ${testValue} - логический тип данных`);
        break;
    default:
        console.log(`Тип ${testValue} - не определен`);
}