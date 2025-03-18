var nome = "Sara";
function dizOla(nome) {
    return "Ola ".concat(nome);
}
var dizOlaNome = dizOla(nome);
console.log(dizOlaNome);
function somar(primeiroValor, segundoValor) {
    var resultadoSomar = primeiroValor + segundoValor;
    return resultadoSomar;
}
var resultado = somar(1994, 2025);
console.log(resultado);
