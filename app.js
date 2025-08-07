/**********************************************************************************************
* Objetivo: Manipular a entrada e saída de dados de uma aplicação.
* Autor: Gabriel Lacerda 
* Data: 05/07/2025
* Versão: 1.0
***********************************************************************************************/

const EMPTY_FIELD_ERROR = 'ERRO: Nenhum dado foi inserido.'
const INVALID_CHARACTER_ERROR = 'ERRO: Um caractere inválido foi inserido.'
const NON_POSITIVE_NUMBER_ERROR = 'ERRO: O sistema não aceita zero ou números negativos nesta entrada.'


const juros = require('./modulo/juros')
const mensagem = require('./modulo/mensagem')
const readline = require('readline')

const formatador = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

const entradaDeDados = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
})



entradaDeDados.question('Digite o nome do cliente: ', function(nome) {
    const nomeCliente = nome

    if (nomeCliente == '') {
        console.log(EMPTY_FIELD_ERROR)
        entradaDeDados.close()
    } else if (!isNaN(nomeCliente)) {
        console.log(INVALID_CHARACTER_ERROR)
        entradaDeDados.close()
    } else {
        entradaDeDados.question('Digite o nome do produto: ', function(nome) {
            const nomeProduto = nome

            if(nomeProduto == '') {
                console.log(EMPTY_FIELD_ERROR)
                entradaDeDados.close()
            } else if (!isNaN(nomeCliente)){
                console.log(INVALID_CHARACTER_ERROR)
                entradaDeDados.close()
            } else {
                entradaDeDados.question('Digite o valor do produto: ', function(valor){
                    const valorProduto = valor

                    if(valorProduto == '') {
                        console.log(EMPTY_FIELD_ERROR)
                        entradaDeDados.close()
                    } else if (isNaN(valorProduto)) {
                        console.log(INVALID_CHARACTER_ERROR)
                        entradaDeDados.close()
                    } else if (valorProduto <= 0){
                        console.log(NON_POSITIVE_NUMBER_ERROR)
                        entradaDeDados.close()
                    } else { 
                        entradaDeDados.question('Qual a taxa de juros anual? ', function(taxa) {
                            const taxaJuros = taxa/100

                            if(taxaJuros == '') {
                                console.log(EMPTY_FIELD_ERROR)
                                entradaDeDados.close()
                            } else if (isNaN(taxaJuros)) {
                                console.log(INVALID_CHARACTER_ERROR)
                                entradaDeDados.close()
                            } else if (valorProduto <= 0){
                                console.log(NON_POSITIVE_NUMBER_ERROR)
                                entradaDeDados.close()
                            } else { 

                                entradaDeDados.question('Qual a quantidade de parcelas que o cliente deseja pagar por ano?: ', function(parcelas) {
                                    const qtdParcelas = parcelas
                                    if(qtdParcelas == '') {
                                        console.log(EMPTY_FIELD_ERROR)
                                        entradaDeDados.close()
                                    } else if (isNaN(qtdParcelas)) {
                                        console.log(INVALID_CHARACTER_ERROR)
                                        entradaDeDados.close()
                                    } else if (valorProduto <= 0){
                                        console.log(NON_POSITIVE_NUMBER_ERROR)
                                        entradaDeDados.close()
                                    } else { 
                                        entradaDeDados.question('Em quantos anos o cliente deseja pagar essa divida? ', function(anos) {
                                            const anosDeDivida = anos
        
                                            if(anosDeDivida == '') {
                                                console.log(EMPTY_FIELD_ERROR)
                                                entradaDeDados.close()
                                            } else if (isNaN(anosDeDivida)) {
                                                console.log(INVALID_CHARACTER_ERROR)
                                                entradaDeDados.close()
                                            } else if (valorProduto <= 0){
                                                console.log(NON_POSITIVE_NUMBER_ERROR)
                                                entradaDeDados.close()
                                            } else { 
                                                
                                                const resultado = juros.calcularJurosCompostos(valorProduto, taxaJuros, qtdParcelas, anosDeDivida)
                                                mensagem.exibirMensagem(nomeCliente, nomeProduto, formatador.format(valorProduto), qtdParcelas, anosDeDivida, resultado)
                                                
                                                entradaDeDados.close()



                                            }

                                        }) 

                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
    }
})
