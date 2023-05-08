let livros = []


const EndPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscaLivrosDaAPI ();

async function getBuscaLivrosDaAPI(){ //Função assíncrona
 const res = await fetch (EndPointDaAPI)
 livros = await res.json()
 let livrosComDesconto = aplicarDesconto(livros)
 exibirLivrosNaTela(livrosComDesconto)
}

