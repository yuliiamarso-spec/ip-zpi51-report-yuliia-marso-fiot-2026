function labTask8Matrix(){ 

let rows = Number(prompt("Введіть кількість рядків"));
let columns = Number(prompt("Введіть кількість стовпців"));

function createMatrix(rows, columns) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = [];

        for (let j = 0; j < columns; j++) {
            let randomNumber = Math.floor(Math.random() * 199) - 99;
            row.push(randomNumber);
        }

        matrix.push(row);
    }

    return matrix;
}

let filledMatrix = createMatrix(rows, columns); 

// -----------------------------------------------------------------------------------//

function firstAndLastElement(matrix) {
    let firstElement = matrix[0][0];

    let lastRow = matrix[matrix.length - 1];
    let lastElement = lastRow[lastRow.length - 1];

    return {
        first: firstElement,
        last: lastElement
    };
}

// -----------------------------------------------------------------------------------//

function insertAfterSecondElement(matrix){
    matrix[0].splice(2, 0, 25);
    return matrix;
}

console.log("Початковий двовимірний масив:", filledMatrix);

let matrixElements = firstAndLastElement(filledMatrix);
console.log("Перший і останній елементи масиву:", matrixElements);

insertAfterSecondElement(filledMatrix);
console.log("Масив після вставки 25:", filledMatrix);

} 