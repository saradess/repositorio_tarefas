// Classe abstrata Nutricao
class Nutricao {
    constructor(nome, teorNutricional, palatabilidade, teorGordura) {
        if (new.target === Nutricao) {
            throw new Error("A classe Nutricao não pode ser instanciada diretamente.");
        }
        this.nome = nome;
        this.teorNutricional = teorNutricional;
        this.palatabilidade = palatabilidade;
        this.teorGordura = teorGordura;
    }

    exibirDetalhes() {
        return `Alimento: ${this.nome}, Nutrição: ${this.teorNutricional}, Palatabilidade: ${this.palatabilidade}, Gordura: ${this.teorGordura}g`;
    }
}

// Classe herdeira 1 - UltraProcessado
class UltraProcessado extends Nutricao {
    constructor(nome, teorNutricional, palatabilidade, teorGordura) {
        super(nome, teorNutricional, palatabilidade, teorGordura);
    }
}

// Classe herdeira 2 - Processado
class Processado extends Nutricao {
    constructor(nome, teorNutricional, palatabilidade, teorGordura) {
        super(nome, teorNutricional, palatabilidade, teorGordura);
    }
}

// Classe herdeira 3 - InNatura
class InNatura extends Nutricao {
    constructor(nome, teorNutricional, palatabilidade, teorGordura) {
        super(nome, teorNutricional, palatabilidade, teorGordura);
    }
}

// Criando instâncias
const batataFrita = new UltraProcessado("Batata Frita", "Baixo", "Alta", 20);
const queijo = new Processado("Queijo", "Médio", "Média", 15);
const maca = new InNatura("Maçã", "Alto", "Média", 0.5);

// Exibindo detalhes dos alimentos
console.log(batataFrita.exibirDetalhes());
console.log(queijo.exibirDetalhes());
console.log(maca.exibirDetalhes());
