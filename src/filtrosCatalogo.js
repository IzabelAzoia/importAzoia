const cartalogoProdutos = document.getElementById("container-produto");

function exibirTodos() {
    const produtosEscondidos = Array.from (cartalogoProdutos.getElementsByClassName("hidden"));

    for (const produto of produtosEscondidos) {
        produto.classList.remove('hidden');
    }
}

function esconderHuacan() {
    exibirTodos()
    const produtosHuacan =
    Array.from(cartalogoProdutos.getElementsByClassName("huacan"));

    for(const produto of produtosHuacan) {
        produto.classList.add("hidden");
    }
}

function esconderDisney() {
    exibirTodos()
    const produtosDisney =
    Array.from(cartalogoProdutos.getElementsByClassName("disney"));

    for(const produto of produtosDisney) {
        produto.classList.add("hidden");
    }
}
 

export function inicializarFiltros() {
    document.getElementById('exibir-todos').addEventListener("click", exibirTodos);
    document.getElementById('exibir-disney').addEventListener("click", esconderHuacan);
    document.getElementById('exibir-huacan').addEventListener("click", esconderDisney);

} 