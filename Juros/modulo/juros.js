/**********************************************************************************************
* Objetivo: Fazer calculo da aplicação
* Autor: Gabriel Lacerda 
* Data: 05/07/2025
* Versão: 1.0
***********************************************************************************************/

const formatador = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
})

function calcularJurosCompostos(capitalInicial, taxaDeJurosAnual, parcelasAnuais, tempoEmAnos) {

    const resultado = capitalInicial * (1 + taxaDeJurosAnual/parcelasAnuais) ** (parcelasAnuais * tempoEmAnos)

    return formatador.format(resultado)
}

module.exports = {
    calcularJurosCompostos
}