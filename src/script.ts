const nome = "Sara";

function dizOla(nome: string): string {
    return `Ola ${nome}`;
}

const dizOlaNome = dizOla(nome);
console.log(dizOlaNome);

function somar(primeiroValor: number, segundoValor: number): number {
    const resultadoSomar = primeiroValor + segundoValor;
    return resultadoSomar;
}

const resultado = somar(1994, 2025);
console.log(resultado);
