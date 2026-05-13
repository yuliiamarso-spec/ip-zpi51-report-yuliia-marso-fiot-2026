function labTask3ObjArray(){ 

    function getDiscounts () {
        const medicines = [
            {name: "Noshpa", price: 170 },
            {name: "Analgin", price: 55 },
            {name: "Quanil", price: 310 },
            {name: "Alphacholine", price: 390 },
        ];


    const filterPrices = medicines.filter(medicine => medicine.price > 300);

    const medicinesDiscounts = filterPrices.map((medicine, index) => ({
        id: index + 1,
        name: medicine.name,
        price: medicine.price * 0.7
    }))

    console.log(medicinesDiscounts);

    }
    getDiscounts();
}