const lista1 = require ('./lista1');
const lista2 = require ('./lista2');
const menorValor = require ('./encontraMenor');



function insereItem (arrayEntrada) {
    let arraySaida = [];
    arraySaida.push (arrayEntrada[menorValor(arrayEntrada)]);
    return arraySaida;
}

const teste = insereItem (lista1);

console.log(teste);