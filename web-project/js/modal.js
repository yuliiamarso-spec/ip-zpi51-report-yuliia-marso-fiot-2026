function openModal(title, description) {
    const modal = document.querySelector("#modal");
    const modalTitle = document.querySelector(".modal-title");
    const modalDescription = document.querySelector(".modal-description");

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modal.classList.add("is-open");
}

function initModal() {
    const modal = document.querySelector("#modal");
    const modalClose = document.querySelector(".modal-close");

    modalClose.addEventListener("click", () => {
        modal.classList.remove("is-open");
    });
}