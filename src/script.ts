const nome = "Sara";

function dizOla(nome: string): string {
    return `Ola ${nome}`;
}

const dizOlaNome = dizOla(nome);
console.log(dizOlaNome);

function multiplicar(primeiroValor: number, segundoValor: number): number {
    const resultadoMultiplicar = primeiroValor * segundoValor;
    return resultadoMultiplicar;
}

const resultado = multiplicar(1994, 2025);
console.log(resultado);
