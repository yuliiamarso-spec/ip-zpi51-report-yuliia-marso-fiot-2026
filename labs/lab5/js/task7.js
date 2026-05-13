function labTask7Array(){ 

    function personAge(){ 
        const people =[
            { name: "John", age: 27 },
            { name: "Jane", age: 31 },
            { name: "Bob", age: 19 },
        ];
        
        const result = people.some(person => person.age < 20);

        return result;
    }

    console.log(personAge());
}