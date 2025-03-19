"use strict";
const nome = "Sara";
function dizOla(nome) {
    return `Ola ${nome}`;
}
const dizOlaNome = dizOla(nome);
console.log(dizOlaNome);
function multiplicar(primeiroValor, segundoValor) {
    const resultadoMultiplicar = primeiroValor * segundoValor;
    return resultadoMultiplicar;
}
const resultado = multiplicar(1994, 2025);
console.log(resultado);
