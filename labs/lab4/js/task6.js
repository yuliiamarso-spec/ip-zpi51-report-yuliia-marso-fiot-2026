
function makeArray(firstArray, secondArray, maxLength ) {

    let newArray = firstArray.concat(secondArray);

    if(newArray.length >  maxLength){
        return newArray.slice(0, maxLength);
    }

    else{
        return newArray;
    }
}


function lab4Task6() {
    console.log(makeArray([1, 2], [3, 4], 3));
    alert(makeArray([1, 2], [3, 4], 3));

    console.log(makeArray([5, 6, 7], [8, 9], 5));
    alert(makeArray([5, 6, 7], [8, 9], 5));
}