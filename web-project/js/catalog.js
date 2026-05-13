function initCatalog() {

    const tableBody = document.querySelector(".donations-table tbody");

    tableBody.addEventListener("click", event => {

        const row = event.target.closest("tr");

        if (!row) {
            return;
        }

        const title = row.querySelector("td").textContent;

        const description = row.dataset.description;

        openModal(title, description);
    });
}