function labTask7Arrays(){ 

let firstArray = [];
let secondArray = [];

let firstArrayLength = Number(prompt("Введіть кількість елементів першого масиву"));
for (let i = 0; i < firstArrayLength; i++) {

    let element = Number(prompt(`Введіть ${i + 1} елемент першого масиву`));
    firstArray.push(element);
}

let secondArrayLength = Number(prompt("Введіть кількість елементів другого масиву"));
for (let i = 0; i < secondArrayLength; i++) {

    let element = Number(prompt(`Введіть ${i + 1} елемент другого масиву`));
    secondArray.push(element);

}

function findSameElements(firstArray, secondArray) {
    let sameElements = [];

    for (let i = 0; i < firstArray.length; i++) {
        if (secondArray.includes(firstArray[i])) {
            sameElements.push(firstArray[i]);
        }
    }

    return sameElements;
}

let sameElements = findSameElements(firstArray, secondArray);

function findMinElement(sameElements) {
    if (sameElements.length === 0) {
        return "Співпадаючих елементів немає";
    }

    return Math.min(...sameElements);
}

let minElement = findMinElement(sameElements);

console.log("Перший масив:", firstArray);
console.log("Другий масив:", secondArray);
console.log("Спільні елементи:", sameElements);
console.log("Найменший спільний елемент:", minElement);


// -----------------------------------------------------------------------------------//

function bubbleSort(array) {
    let sortedArray = array.slice();

    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - 1 - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                let temp = sortedArray[j];
                sortedArray[j] = sortedArray[j + 1];
                sortedArray[j + 1] = temp;
            }
        }
    }

    return sortedArray;
}

let sortedFirstArray = bubbleSort(firstArray);
let sortedSecondArray = bubbleSort(secondArray);


function printArray(message, array) {
    console.log(message, array);
}

printArray("Перший вхідний масив:", firstArray);
printArray("Перший відсортований масив:", sortedFirstArray);

printArray("Другий вхідний масив:", secondArray);
printArray("Другий відсортований масив:", sortedSecondArray);

}