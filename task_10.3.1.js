let inputValue=prompt("Введите число",0);

let testValue =+inputValue;

let typeTestValue = typeof(testValue);
//Это вывод в консоль для тренировки и проверки значений
//let typeInputValue = typeof(inputValue);
//console.log(`Input - ${inputValue}, Type - ${typeInputValue}\nTest - ${testValue}, Type - ${typeTestValue}`);
//console.log(Number.isNaN(testValue));

// 1. Проверка на нажатие конпки Отмена, пустую строку и всего остального, что не является числом, соответственно:
if (inputValue != null && inputValue !="" && !Number.isNaN(testValue)) {
// 2. Проверка типа данных на соответствие "number", по идее уже все лишнее отсекли на первом этапе, но по заданию нужно проверить:
    if (typeTestValue == "number"){

        if (testValue % 2 == 0) console.log("Четное число");
        else console.log("Нечетное число");
    }
    else console.log("Упс, кажется, вы ошиблись");
}
    else console.log("Упс, кажется, вы ошиблись");