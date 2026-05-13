// Асинхронна функція для завантаження HTML-сторінки у контейнер #output
async function loadPage(page) {
    try {
        // Завантажуємо вміст файлу через fetch
        let response = await fetch("pages/" + page);
        let text = await response.text();

        // Вставляємо отриманий HTML у контейнер #output
        document.getElementById("output").innerHTML = text;

        // Якщо в завантаженому HTML є iframe — встановлюємо правильний шлях
        const iframe = document.querySelector('#output iframe');
        if (iframe) {
            // Шлях до проєкту відносно сторінки, що викликає loadPage
            iframe.src = '../../web-project/index.html';
        }

    } catch (err) {
        // Якщо сталася помилка завантаження — показуємо повідомлення у контейнері
        document.getElementById("output").innerHTML = "<p>Помилка завантаження файлу!</p>";
        // Виводимо помилку у консоль для налагодження
        console.error(err);
    }
}