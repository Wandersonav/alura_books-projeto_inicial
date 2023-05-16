let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPrecos);


function ordenarLivrosPorPrecos() {

    let livrosOrdenados = livros.sort((a , b) => a.preco - b.preco) // ordenando do menor para o maior
    exibirLivrosNaTela(livrosOrdenados)
}