async function loadPage(page, clickedLink = null) {
    try {
        let response = await fetch("pages/" + page);
        let text = await response.text();

        const output = document.getElementById("output");
        output.innerHTML = text;

        // Тільки для мобільної версії переносимо відповідь під натиснуте завдання
        if (window.innerWidth <= 768 && clickedLink !== null) {
            clickedLink.parentElement.appendChild(output);
        }

        const iframe = document.querySelector('#output iframe');
        if (iframe) {
            iframe.src = '../../web-project/index.html';
        }

    } catch (err) {
        document.getElementById("output").innerHTML = "<p>Помилка завантаження файлу!</p>";
        console.error(err);
    }
}
