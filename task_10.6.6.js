let testArray = [2,2,2,2,2,2,2,1];
let checkEqualStatus;

// Перебираем все элементы массива, начиная с первого. Каждый раз количество элементов для сравнения уменьшается на 1 элемент.
// Т.е. сначала перебираем, например, с [0 по 10]. Потом со [2 по 10]... и последний цикл [9 по 10]
for (let i = 0; i < testArray.length-1; i++){
    checkArray(i);
    // для отладки - console.log(`${i+1} count -  status is ${checkEqualStatus}`);
    // Если получаем от функции сравнения false, то можно смело считать, что не все элементы в массиве одинаковые и прекращаем проверку:
    if (checkEqualStatus !=true) break;
}

function checkArray (index){
    let i = index;
    // Задаем значение для проверки и выполняем цикл проверки с последующими значениями: 
    let tempEqual = testArray[index];
    do {
        checkEqualStatus = (tempEqual == testArray[i+1])? true:false;
        // для отладки - console.log(tempEqual, testArray[i+1], checkEqualStatus, testArray.length);
        i++;
        // Если получаем неравенство элементов, то завершаем цикл:
        }while (checkEqualStatus && i < testArray.length-1);
    return checkEqualStatus;
}
console.log(`Result is - ${checkEqualStatus}`);