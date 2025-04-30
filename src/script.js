const alunos = [
    { nome: "Lucas Ferreira", nota: 9.8 },
    { nome: "Amanda Oliveira", nota: 7.5 },
    { nome: "Rafael Souza", nota: 4.3 },
    { nome: "Camila Mendes", nota: 8.3 },
    { nome: "Gabriel Costa", nota: 5.5 },
    { nome: "Juliana Almeida", nota: 7.3 },
    { nome: "Thiago Martins", nota: 3.9 },
    { nome: "Vanessa Rocha", nota: 2.7 },
    { nome: "Eduardo Lima", nota: 4.7 },
    { nome: "Beatriz Cavalcanti", nota: 8 },
];


const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);


const mediaNotas = alunosAprovados.reduce((soma, aluno) => soma + aluno.nota, 0) / alunosAprovados.length;


console.log("Alunos aprovados:", alunosAprovados);
console.log("Média das notas dos aprovados:", mediaNotas.toFixed(2));
console.log("Alunos que não encontrarem seus nomes nas listas deverão procurar a secretaria em período comercial acompanhados dos pais, grato A Direção")
