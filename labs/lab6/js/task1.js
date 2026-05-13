function initTask1() {
    const swapBtn = document.querySelector("#swapBtn");
    const firstInput = document.querySelector("#firstInput");
    const secondInput = document.querySelector("#secondInput");

    swapBtn.addEventListener("click", function () {
        const temp = firstInput.value;

        firstInput.value = secondInput.value;
        secondInput.value = temp;
    });
}