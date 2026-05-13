function labTask9Array(){ 

    function sortUsersByAge(){ 

        const users = [
            { name: "John", age: 27 },
            { name: "Jane", age: 31 },
            { name: "Bob", age: 19 },
        ];

        const result = users.sort((a, b) => a.age - b.age)

        return result;
    }

    console.log(sortUsersByAge());
}