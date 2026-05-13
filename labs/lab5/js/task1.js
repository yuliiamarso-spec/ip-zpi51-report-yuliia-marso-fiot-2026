
function labTask1Matrix(){ 

    function getProductDetails (productId, successCallback, errorCallback) {
        const products = [
            { id: 1, name: "Ноутбук", price: 25000 },
            { id: 2, name: "Смартфон", price: 15000 },
            { id: 3, name: "Навушники", price: 3000 }
        ];

        const product = products.find(item => item.id === productId);

        if (product) {
            successCallback(product);
        } else {
            errorCallback("Помилка: товар не знайдено.");
        }
    }

        function showProduct(product) {
            console.log("Товар знайдено:");
            console.log(product);
        }


        function showError(message) {
            console.log(message);
        }

getProductDetails(2, showProduct, showError);
getProductDetails(10, showProduct, showError);

}