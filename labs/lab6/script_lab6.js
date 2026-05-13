// Функція для завантаження внутрішніх HTML-сторінок у правий блок
async function loadPage(page) {
    try {
        let response = await fetch("pages/" + page);
        let text = await response.text();

        document.getElementById("output").innerHTML = text;

        if (page === "task1.html") {
            initTask1();
        }

        if (page === "task2.html") {
            initTask2();
        }

        if (page === "task3.html") {
            initTask3();
        }

        if (page === "task5.html") {
            initTask5();
        }

        if (page === "task6.html") {
            initTask6();
        }

        if (page === "task7.html") {
            initTask7();
        }


    } catch (err) {
        document.getElementById("output").innerHTML = "<p>Помилка завантаження файлу!</p>";
    }
}