function makeTransaction(quantity, pricePerDroid, customerCredits) {
    
    let totalPrice = quantity * pricePerDroid;

    if(totalPrice > customerCredits){
        return "Insufficient funds!";
    }

    else{
        return `Your ordered ${quantity} droids worth ${totalPrice} credits`;
    }
}

function lab4Task5() {
    console.log(makeTransaction(3, 10, 40));
    alert(makeTransaction(3, 10, 40));

    console.log(makeTransaction(3, 10, 20));
    alert(makeTransaction(3, 10, 20));
}