function labTask2ObjArray(){ 

    const concerts = {
        Київ: new Date("2020-04-01"),
        Умань: new Date("2027-07-02"),
        Вінниця: new Date("2020-04-21"),
        Одеса: new Date("2027-03-15"),
        Хмельницький: new Date("2020-04-18"),
        Харків: new Date("2027-07-10"),
    };

    let cities = Object.keys(concerts);
    console.log(cities);

    const actualConcerts = cities.filter(city => concerts[city] > new Date());

    for (let i = 0; i < actualConcerts.length - 1; i++) {
        for (let j = 0; j < actualConcerts.length - 1 - i; j++) {
            if (concerts[actualConcerts[j]] > concerts[actualConcerts[j + 1]]) {
                
            let temp = actualConcerts[j];
            actualConcerts[j] = actualConcerts[j + 1];
            actualConcerts[j + 1] = temp;
            }
        }
    }
    console.log(actualConcerts);

}