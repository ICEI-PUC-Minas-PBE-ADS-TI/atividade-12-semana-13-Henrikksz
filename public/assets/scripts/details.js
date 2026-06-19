const params = new URLSearchParams(window.location.search);

const id = params.get("id");

const container = document.getElementById("details");

if (!id) {
    container.innerHTML = "<h2>ID não informado.</h2>";
} else {
    fetch(`http://localhost:3000/produtos/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error();
            }

            return response.json();
        })
        .then(item => {
            container.innerHTML = `
                <img src="${item.imagem}" width="300">

                <h1>${item.nome}</h1>

                <p><strong>Categoria:</strong> ${item.categoria}</p>

                <p><strong>Preço:</strong> R$ ${item.preco}</p>

                <p>${item.descricaoCompleta}</p>

                <h3>Tags</h3>

                <ul>
                    ${item.tags.map(tag => `<li>${tag}</li>`).join("")}
                </ul>
            `;
        })
        .catch(() => {
            container.innerHTML =
                "<h2>Produto não encontrado.</h2>";
        });
}