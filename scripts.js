let carrinho = [];
const carrinhoCounter = document.getElementById('carrinho');

const produtos = [
    { id: 1, nome: 'Body Unissexo 1', preco: 49.90, imagem: 'img/produto1.jpg' },
    { id: 2, nome: 'Body Unissexo 2', preco: 59.90, imagem: 'img/produto2.jpg' },
    { id: 3, nome: 'Body Unissexo 3', preco: 39.90, imagem: 'img/produto3.jpg' },
    // Adicione mais produtos aqui até 120
];

function carregarProdutos() {
    const container = document.getElementById('produtos-container');
    produtos.forEach(produto => {
        const produtoDiv = document.createElement('div');
        produtoDiv.classList.add('produto');
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <p>${produto.nome}</p>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="comprar('${produto.nome}', ${produto.preco})">Comprar</button>
        `;
        container.appendChild(produtoDiv);
    });
}

function comprar(produto, preco) {
    carrinho.push({ produto, preco });
    atualizarCarrinho();
    alert(`Você adicionou "${produto}" ao carrinho!`);
}

function atualizarCarrinho() {
    const totalItens = carrinho.length;
    carrinhoCounter.textContent = `Carrinho (${totalItens})`;
}

document.addEventListener('DOMContentLoaded', carregarProdutos);
