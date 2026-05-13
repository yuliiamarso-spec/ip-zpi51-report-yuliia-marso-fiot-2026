function lab4Task1() {

    let hour = prompt("Введіть час у форматі год:хв");

    console.log(`Введений час: ${hour}`);

    let parts = hour.split(":");
    let minutes = Number(parts[1]);

    if (minutes >= 0 && minutes < 15) {
        console.log("Перша чверть години");
        alert("Перша чверть години");
    }
    else if (minutes >= 15 && minutes < 30) {
        console.log("Друга чверть години");
        alert("Друга чверть години");
    }
    else if (minutes >= 30 && minutes < 45) {
        console.log("Третя чверть години");
        alert("Третя чверть години");
    }
    else if (minutes >= 45 && minutes < 60) {
        console.log("Четверта чверть години");
        alert("Четверта чверть години");
    }
}