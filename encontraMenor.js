const lista1 = require ('./lista1');

function encontraMenor (array) {
    let menorValorIndex = 0;
    for (i =0; i < array.length; i++) {
        if (array[i].preco < array[menorValorIndex].preco) {
            menorValorIndex = i;
        }
    }
    return menorValorIndex;
}

module.exports = encontraMenor;