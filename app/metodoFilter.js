const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click',filtrarLivros))

function filtrarLivros(){
const elementoBtn = document.getElementById(this.id)
const categoria = elementoBtn.value
let livrosFiltrados = categoria ==''?livros.filter(livro => livro.quantidade > 0) : livros.filter(livro => livro.categoria == categoria)
exibirLivrosNaTela(livrosFiltrados)
//console.log(livrosFiltrados)
console.log(categoria)
}
if (categoria ==''){

    
}

