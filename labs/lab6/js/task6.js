function initTask6() {

    const button = document.querySelector("button.change-color");    
    const colorText = document.querySelector("span.color");
    const taskBox = document.querySelector(".task-box");
    

    button.addEventListener("click", () => {

        const color = getRandomHexColor();
        taskBox.style.backgroundColor = color;        
        colorText.textContent = color;

    });
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}