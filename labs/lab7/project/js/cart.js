function initCart() {
    const products = [
        { id: 1, name: "Product 1", price: 100 },
        { id: 2, name: "Product 2", price: 150 },
        { id: 3, name: "Product 3", price: 200 },
        { id: 4, name: "Product 4", price: 250 },
        { id: 5, name: "Product 5", price: 300 },
        { id: 6, name: "Product 6", price: 350 },
    ];

    const cart = [];

    const itemsPerPage = 4;
    let currentPage = 1;

    const productsContainer = document.querySelector(".products");
    const paginationContainer = document.querySelector(".pagination");
    const cartContainer = document.querySelector(".cart");

    function renderProducts() {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const visibleProducts = products.slice(start, end);

        let markup = "";

        visibleProducts.forEach(function(product) {
            markup += `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <p>Ціна: ${product.price} грн</p>
                    <button type="button" data-id="${product.id}">
                        Додати в кошик
                    </button>
                </div>
            `;
        });

        productsContainer.innerHTML = markup;
    }

    function renderPagination() {
        const pages = Math.ceil(products.length / itemsPerPage);

        let markup = "";

        for (let i = 1; i <= pages; i++) {
            markup += `
                <button type="button" class="page-btn" data-page="${i}">
                    ${i}
                </button>
            `;
        }

        paginationContainer.innerHTML = markup;
    }

    function addToCart(id) {
        const product = products.find(function(item) {
            return item.id === id;
        });

        if (product) {
            cart.push(product);
            renderCart();
        }
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        renderCart();
    }

    function renderCart() {
        if (cart.length === 0) {
            cartContainer.innerHTML = "<p>Кошик порожній</p>";
            return;
        }

        let markup = "";

        cart.forEach(function(product, index) {
            markup += `
                <div class="cart-item">
                    <p>${product.name} — ${product.price} грн</p>
                    <button type="button" data-index="${index}">
                        Видалити
                    </button>
                </div>
            `;
        });

        cartContainer.innerHTML = markup;
    }

    productsContainer.addEventListener("click", function(event) {
        if (event.target.tagName !== "BUTTON") {
            return;
        }

        const id = Number(event.target.dataset.id);
        addToCart(id);
    });

    paginationContainer.addEventListener("click", function(event) {
        if (event.target.tagName !== "BUTTON") {
            return;
        }

        currentPage = Number(event.target.dataset.page);

        renderProducts();
        renderPagination();
    });

    cartContainer.addEventListener("click", function(event) {
        if (event.target.tagName !== "BUTTON") {
            return;
        }

        const index = Number(event.target.dataset.index);
        removeFromCart(index);
    });

    renderProducts();
    renderPagination();
    renderCart();
}

initCart();