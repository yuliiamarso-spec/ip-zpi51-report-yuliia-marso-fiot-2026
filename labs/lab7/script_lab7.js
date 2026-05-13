async function loadPage(page) {
    try {
        let response = await fetch("pages/" + page);
        let text = await response.text();

        document.getElementById("output").innerHTML = text;

    } catch (err) {
        document.getElementById("output").innerHTML = "<p>Помилка завантаження файлу!</p>";
        console.error(err);
    }
}