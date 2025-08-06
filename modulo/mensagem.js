/**********************************************************************************************
* Objetivo: Retorna mensagem para o cliente.
* Autor: Gabriel Lacerda 
* Data: 05/07/2025
* Versão: 1.0
***********************************************************************************************/

const exibirMensagem = function(nomeCliente, nomeProduto, valorProduto, parcelas, anos, total) {
    const totalParcelas = parcelas*anos
    
    console.log(`
******************* Viva Moda *************************
Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.
A compra do produto ${nomeProduto}, tem um valor de: ${valorProduto}.
A sua compra será parcelada em ${totalParcelas} vezes e o Sr(a) pagará: ${total}
Muito obrigado por escolher a Viva Moda.
*******************************************************
        `)
}

module.exports = {
    exibirMensagem
}