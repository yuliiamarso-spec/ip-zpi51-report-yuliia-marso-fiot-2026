function lab4Task3() {

    let user1Password = "QW12as";
    let user2Password = "QE12as";
    let user3Password = "QR12as";

    let login = (prompt("Введіть логін"));

    while (login === "" || login === null) {
        login = prompt("Введіть логін користувача");
    }

    if (login === "User1" || login === "User1" || login === "User1") {
 
        let password = (prompt("Введіть пароль")); 
    
        if (login === "User1" && password === user1Password) {
            console.log("Hello, User1");
            alert("Hello, User1");
        }
        else if (login === "User2" && password === user2Password) {
            console.log("Hello, User2");
            alert("Hello, User2");
        }
        else if (login === "User3" && password === user3Password) {
            console.log("Hello, User3");
            alert("Hello, User3");
        }
        else {
            console.log("Неправильний пароль");
            alert("Неправильний пароль");
        }

    } else {
        console.log("I don't know you");
        alert("I don't know you");
    }   
}
 