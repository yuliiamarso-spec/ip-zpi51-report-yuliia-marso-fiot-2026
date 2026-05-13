function initTask7() {

    const input = document.querySelector("#controls input");
    const createButton = document.querySelector("[data-create]");
    const destroyButton = document.querySelector("[data-destroy]");
    const boxes = document.querySelector("#boxes");

    createButton.addEventListener("click", () => {

        const amount = Number(input.value);

        if (amount < 1 || amount > 100) {
            alert("Введіть число від 1 до 100");
            return;
        }

        destroyBoxes();
        createBoxes(amount);

        input.value = "";
    });

    destroyButton.addEventListener("click", () => {
        destroyBoxes();
    });

    function createBoxes(amount) {

        let size = 30;

        for (let i = 0; i < amount; i++) {

            const box = document.createElement("div");

            box.style.width = `${size}px`;
            box.style.height = `${size}px`;

            box.style.backgroundColor = getRandomHexColor();

            boxes.append(box);

            size += 10;
        }
    }

    function destroyBoxes() {
        boxes.innerHTML = "";
    }

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
    }
}