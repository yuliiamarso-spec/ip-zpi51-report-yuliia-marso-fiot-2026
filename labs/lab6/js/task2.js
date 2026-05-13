function initTask2() {
    const square = document.querySelector(".task2-square");
    const decreaseBtn = document.querySelector("#decreaseBtn");
    const increaseBtn = document.querySelector("#increaseBtn");

    let size = 100;
    
    decreaseBtn.addEventListener("click", function () {
        size = size - 15;
        square.style.width = size + "px";
        square.style.height = size + "px";

    });

    increaseBtn.addEventListener("click", function () {
        size = size + 15;
        square.style.width = size + "px";
        square.style.height = size + "px";

    });
}