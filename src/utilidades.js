export const catalogo = [
    {
        id: "1",
        nome: "kit de pintua a óleo por números",
        descricao: "Princesas Disney estilo Vitrais",
        preco: 80,
        imagem: "foto-01-alice.jpg",
        disney: true,

    },
    {
        id: "2",
        nome: "kit de pintua a óleo por números",
        descricao: "chapeleiro louco",
        preco: 80,
        imagem: "foto-02-chapeleiro.jpg",
        disney: true,

    },
    {
        id: "3",
        nome: "kit de pintua a óleo por números",
        descricao: "Disney Darkness",
        preco: 80,
        imagem: "foto-03-disney.jpg",
        disney: true,

    },
    {
        id: "4",
        nome: "kit de pintua a óleo por números",
        descricao: "Pequena Sereia",
        preco: 80,
        imagem: "foto-04-pequenaSereia.jpg ",
        disney: true,

    },
    {
        id: "5",
        nome: "kit de pintua a óleo por números",
        descricao: "Casal Disney",
        preco: 80,
        imagem: "foto-05-princesas.jpg",
        disney: true,

    },
    {
        id: "6",
        nome: "kit de pintua a óleo por números",
        descricao: "Corujas",
        preco: 80,
        imagem: "foto-06-corujas.jpg ",
        disney: false,

    },
    {
        id: "7",
        nome: "kit de pintua a óleo por números",
        descricao: "Frutas",
        preco: 80,
        imagem: "foto-07-frutas.jpg",
        disney: false

    },
    {
        id: "8",
        nome: "kit de pintua a óleo por números",
        descricao: " Golfinhos",
        preco: 80,
        imagem: "foto-08-golfinhos.jpg",
        disney: false,

    },
    {
        id: "9",
        nome: "kit de pintua a óleo por números",
        descricao: "Leões e Tigres",
        preco: 80,
        imagem: "foto-09-leao-tigres.jpg",
        disney: false,

    },
    {
        id: "10",
        nome: "kit de pintua a óleo por números",
        descricao: "Mar",
        preco: 80,
        imagem: "foto-10-mar.jpg",
        disney: false,

    },
];

export function salvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao))
}

export function lerLocalStorage(chave) {
   return JSON.parse(localStorage.getItem(chave));
}

export function apagarDoLocalStorage(chave) {
    localStorage.removeItem(chave);
} 

export function desenharProdutoCarrinhoSimples(idProduto, idCantainerHtml, quantidadeProduto) {
    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutosCarrinho = document.getElementById(idCantainerHtml);

    const elementoArticle = document.createElement("article");
    const articleClasses = ["flex", "bg-stone-200", "rounded-lg", "p-1", "relative", "mb-2", "w-96",];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }
    const cartaoProdutoCarrinho = `<img src="./assets/imagem/${produto.imagem}" alt="Carrinho: 
    ${produto.nome}" class="h-24 rounded-lg">        
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm">${produto.nome}</p>
      <p class="text-slate-400 text-xs">${produto.descricao}</p>
      <p class="text-green-700 text-lg">$ ${produto.preco}</p>
    </div>
    <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">        
        <p id="quantidade-${produto.id}" class="ml-2">${quantidadeProduto}</p>        
    </div>`;
    elementoArticle.innerHTML = cartaoProdutoCarrinho;
    containerProdutosCarrinho.appendChild(elementoArticle); 
}