function initTask3() {

    const list = document.querySelector(".task3-list");
    const items = document.querySelectorAll(".task3-list li");
    const double = document.querySelector("#doubleBtn");
    
    doubleBtn.addEventListener("click", function () {

        items.forEach(item => {
            item.textContent = item.textContent * 2;
        });

    });

}