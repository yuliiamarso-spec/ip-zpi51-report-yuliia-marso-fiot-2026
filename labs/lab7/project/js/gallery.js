function initGallery() {
    const images = [
    {
        preview: "https://picsum.photos/id/1015/300/200",
        original: "https://picsum.photos/id/1015/1200/800",
        description: "Mountain landscape",
    },
    {
        preview: "https://picsum.photos/id/1016/300/200",
        original: "https://picsum.photos/id/1016/1200/800",
        description: "River in the mountains",
    },
    {
        preview: "https://picsum.photos/id/1025/300/200",
        original: "https://picsum.photos/id/1025/1200/800",
        description: "Dog portrait",
    },
    {
        preview: "https://picsum.photos/id/1035/300/200",
        original: "https://picsum.photos/id/1035/1200/800",
        description: "Forest road",
    },
    {
        preview: "https://picsum.photos/id/1043/300/200",
        original: "https://picsum.photos/id/1043/1200/800",
        description: "Lake view",
    },
    {
        preview: "https://picsum.photos/id/1050/300/200",
        original: "https://picsum.photos/id/1050/1200/800",
        description: "City street",
    },
];

    const galleryContainer = document.querySelector(".gallery");

    function renderGallery() {
    let markup = "";

    images.forEach(function(image) {
        markup += `
            <li class="gallery-item">
                <img 
                    class="gallery-image"
                    src="${image.preview}" 
                    data-original="${image.original}"
                    alt="${image.description}"
                >
            </li>
        `;
    });

    galleryContainer.innerHTML = markup;
}

    function openModal(originalImage, description) {
    const instance = basicLightbox.create(`
        <div class="modal-content">
            <img src="${originalImage}" alt="${description}">
            <p>${description}</p>
        </div>
    `);

    instance.show();
}

    galleryContainer.addEventListener("click", function(event) {
        if (event.target.tagName !== "IMG") {
            return;
        }

    const originalImage = event.target.dataset.original;
    const description = event.target.alt;

    console.log(originalImage);

    openModal(originalImage, description);
    });

    renderGallery();
}

initGallery();