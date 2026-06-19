const API_URL = "http://localhost:3000/produtos";

async function fetchItems() {
    const response = await fetch(API_URL);
    return await response.json();
}

function createCard(item) {
    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <img src="${item.imagem}">
        <h2>${item.nome}</h2>
        <p>${item.descricaoCurta}</p>
        <p>${item.categoria}</p>
        <p>R$ ${item.preco}</p>
        <a href="details.html?id=${item.id}">
            Ver detalhes
        </a>
    `;

    return card;
}

function renderCards(items) {
    const container = document.getElementById("cards");

    container.innerHTML = "";

    items.forEach(item => {
        container.appendChild(createCard(item));
    });
}

async function init() {
    const items = await fetchItems();
    renderCards(items);
}

init();