    // Функція для завантаження внутрішніх HTML-сторінок у правий блок
    async function loadPage(page) {
        try {
            let response = await fetch("pages/" + page); // Завантаження файлу
            let text = await response.text(); // Отримання тексту
            document.getElementById("output").innerHTML = text; // Виведення у праву панель
        } catch (err) {
            // Виведення повідомлення про помилку при збоях завантаження
            document.getElementById("output").innerHTML = "<p>Помилка завантаження файлу!</p>";
        }
    }