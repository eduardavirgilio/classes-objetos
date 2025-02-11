// Classe é uma definição. Como um objeto deve ser. 
class Senai {
    codigo;
    cidade;
    // Dentro de uma classe não precisa da palavra function. 

    constructor(codigo, cidade) {
        this.codigo = codigo;
        this.cidade = cidade;
    }
    dadosEscola() {
        console.log(`O código ${this.codigo} pertence a Escola SENAI de ${this.cidade}.`)
    }
}


// Instância é uma ocorrência. Criação de um novo objeto, utilizando a palavra reservada NEW.

// Criando uma instância(uma nova escola)
const escolaA = new Senai(603, 'Araraquara');
const escolaB = new Senai(145, 'São Carlos');
const escolaC = new Senai(545, 'Américo Brasiliense');

// Exbibindo dados da nova escola
escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();