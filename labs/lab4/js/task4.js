function getShippingMessage(country, price, deliveryFee) {
    let totalPrice = price + deliveryFee;
    return `Shipping to ${country} will cost ${totalPrice} credits`;
}

function lab4Task4() {
    console.log(getShippingMessage("Norway", 120, 50));
    alert(getShippingMessage("Norway", 120, 50));
}