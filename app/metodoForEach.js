const elementoParaInserirLivro = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponivel = document.getElementById('')

function exibirLivrosNaTela(listaDeLivros){
  elementoParaInserirLivro.innerHTML = "";
    listaDeLivros.forEach(livro => {
     
      let diponibilidadeLivro = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' 

        elementoParaInserirLivro.innerHTML += ` <div class="livro">
        <img class="${diponibilidadeLivro}" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" />
        <h2 class="livro__titulo">
          ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
        <div class="tags">
          <span class="tag">${livro.categoria}</span>
        </div>
      </div>`

    });

}
exibirLivrosNaTela(livrosFiltrados)