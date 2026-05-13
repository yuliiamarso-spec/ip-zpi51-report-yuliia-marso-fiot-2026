function labTask8Array(){ 

    function squareNumbers(){ 

    const numbers = [1, 2, 3, 4, 5];

    const result = numbers.map(number => number * number);

        return result;
    }

    console.log(squareNumbers());
}