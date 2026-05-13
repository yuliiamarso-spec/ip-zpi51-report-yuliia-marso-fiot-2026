function lab4Task2() {

    let day = Number(prompt("Введіть номер дня тижня"));
    
    console.log(`Введений номер дня тижня: ${day}`);
    
    let finish;

    switch (day) {
        case 1:
            finish = "Понеділок";
            break;
        case 2:
            finish = "Вівторок";
            break;
        case 3:
            finish = "Середа";
            break;
        case 4:
            finish = "Четвер";
            break;    
        case 5:
            finish = "П'ятниця";
            break; 
        case 6:
            finish = "Субота";
            break;
        case 7:
            finish = "Нелідя";
        default:
            finish = "Неправильний номер дня тижня";
    }

    console.log(`День тижня: ${finish}`);
    alert(`День тижня: ${finish}`);
}