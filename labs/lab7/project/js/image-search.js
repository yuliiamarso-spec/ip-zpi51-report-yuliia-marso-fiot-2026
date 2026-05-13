function initImageSearch() {

    const form = document.querySelector(".search-form");
    const gallery = document.querySelector(".search-gallery");
    const loader = document.querySelector(".loader");

    const API_KEY = "32876609-921db117914980b4f2474b1de";
    const BASE_URL = "https://pixabay.com/api/";

    const lightbox = new SimpleLightbox(".search-gallery a");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const query = form.elements.searchQuery.value.trim();

        if (query === "") {
            iziToast.error({
                message: "Please enter a search query",
            });
            return;
        }

        gallery.innerHTML = "";
        showLoader();

        fetchImages(query)
            .then(function(data) {
                if (data.hits.length === 0) {
                    iziToast.error({
                        message: "Sorry, there are no images matching your search query. Please try again!",
                    });
                    return;
                }

                renderImages(data.hits);
                lightbox.refresh();
            })
            .catch(function() {
                iziToast.error({
                    message: "Something went wrong. Please try again later.",
                });
            })
            .finally(function() {
                hideLoader();
                form.reset();
            });
    });

    function fetchImages(query) {
        const url = `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

        return fetch(url).then(function(response) {
            if (!response.ok) {
                throw new Error(response.status);
            }

            return response.json();
        });
    }

    function renderImages(images) {
        let markup = "";

        images.forEach(function(image) {
            markup += `
                <li class="search-gallery-item">
                    <a href="${image.largeImageURL}">
                        <img src="${image.webformatURL}" alt="${image.tags}">
                    </a>

                    <div class="image-info">
                        <p><b>Likes</b><br>${image.likes}</p>
                        <p><b>Views</b><br>${image.views}</p>
                        <p><b>Comments</b><br>${image.comments}</p>
                        <p><b>Downloads</b><br>${image.downloads}</p>
                    </div>
                </li>
            `;
        });

        gallery.innerHTML = markup;
    }

    function showLoader() {
        loader.classList.remove("hidden");
    }

    function hideLoader() {
        loader.classList.add("hidden");
    }
}

initImageSearch();