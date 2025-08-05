/**********************************************************************************************
* Objetivo: Manipular a entrada e saída de dados de uma aplicação.
* Autor: Gabriel Lacerda 
* Data: 05/07/2025
* Versão: 1.0
***********************************************************************************************/

//Menssagens de erros

const INPUT_ERROR = "ERRO: A Entrada não pode estar vazia."
const TYPE_ERROR = "ERRO: Valor inserido inválido."

const readline = require('readline')

const entradaDeDados = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o nome do cliente: ', function(nome) {
    const nomeCliente = nome

    if (nomeCliente == '') {
        console.log(INPUT_ERROR)
        entradaDeDados.close()
    } else {

        entradaDeDados.question('Digite o nome do produto: ', function(nome) {
            const nomeProduto = nome
            if (nomeProduto == '') {
                console.log(INPUT_ERROR)
                entradaDeDados.close()
            } else {

                entradaDeDados.question('Digite o valor do produto: ', function(valor) {
                    const valorProduto = valor

                    if (valor < 0 || isNaN(valorProduto)) {
                        console.log(TYPE_ERROR)
                        entradaDeDados.close()
                    } else {
                        entradaDeDados.question('O cliente deseja parcelar a compra dele? (S/N)', function(resposta) {
                            const respostaCliente = resposta
                            if (respostaCliente == 'S') {
                                entradaDeDados.question('Digite a taxa de juros anual: ', function(taxa) {
                                    const taxaJuros = taxa

                                    if (taxaJuros == '' || isNaN(taxaJuros) || taxaJuros < 0) {
                                        console.log(INPUT_ERROR)
                                        entradaDeDados.close()
                                    } else {
                                        entradaDeDados.question('Digite o numero de acréscimo de juros compostos desejados durante o ano: ', function(juros) {
                                            const quantidadeJuros = juros
                                            
                                            if(quantidadeJuros <= 0 || isNaN(quantidadeJuros) || quantidadeJuros == '' ) {
                                                console.log(INPUT_ERROR)
                                                entradaDeDados.close()
                                            } else {
                                                entradaDeDados.question('Digite o tempo que sera pago em meses: ', function(meses) {
                                                    const quantidadeMeses = meses 

                                                    if (quantidadeMeses == '' || isNaN(quantidadeMeses) || quantidadeMeses <= 0) {
                                                        console.log(INPUT_ERROR)
                                                        entradaDeDados.close()
                                                    } else {

                                                        const resultado = `
                                                            Nome: ${nomeCliente}
                                                            Produto: ${nomeProduto}
                                                            Valor: ${valorProduto}
                                                            Taxa de juros: ${taxaJuros}
                                                            Juros anual: ${quantidadeJuros}
                                                            Tempo para pagar: ${quantidadeMeses} Meses
                                                            `

                                                        console.log(resultado)


                                                        entradaDeDados.close()


                                                    }

                                                })
                                            }
                                        })
                                    }
                                })
                            } else {
                                entradaDeDados.close()
                            }
                        })
                    }

                })

            }

        })

    }
})