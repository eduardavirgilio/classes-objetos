// Classe é uma definição. Como um objeto deve ser. 
class Senai {
    codigo;
    cidade;
    ano_construcao;
    quant_cursos;

    // Dentro de uma classe não precisa da palavra function. 

    constructor(codigo, cidade, ano_construcao, quant_cursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.ano_construcao = ano_construcao;
        this.quant_cursos = quant_cursos;
    }
    dadosEscola() {
        console.log(`O código ${this.codigo} pertence a Escola SENAI de ${this.cidade}.`)
        console.log(`A escola SENAI de ${this.cidade} foi construida em ${this.ano_construcao} e tem ${2025 - this.ano_construcao} anos.`)
    }
}


// Instância é uma ocorrência. Criação de um novo objeto, utilizando a palavra reservada NEW.

// Criando uma instância(uma nova escola)
const escolaA = new Senai(603, 'Araraquara', 1989);
const escolaB = new Senai(145, 'São Carlos', 1998);

// Exbibindo dados da nova escola
console.log();
escolaA.dadosEscola();
console.log();
escolaB.dadosEscola();
console.log();
