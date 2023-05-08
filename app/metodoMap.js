function aplicarDesconto(livros){

    const desconto = 0.3;

    livrosComDesconto = livros.map(livro => {

        return {...livro, preco: livro.preco - (livro.preco * desconto) }
        //...Faz uma cópia de tudo que você tem de livro, mas vou precisar alterar o preço dele.
    }  )

    return livrosComDesconto

}
