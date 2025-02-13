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
        console.log('★ relatorio de cadastro')
        console.log()
        console.log(`O código ${this.codigo} pertence à Escola SENAI de ${this.cidade}.`);
        console.log(`A escola SENAI de ${this.cidade} foi construída em ${this.ano_construcao} e tem ${2025 - this.ano_construcao} anos.`);
        console.log()
        console.log('★ relatorio sobre os cursos')
        console.log()
        if (escolaA.quant_cursos > escolaB.quant_cursos) { 
            console.log(`A escola de ${escolaA.cidade} possui mais cursos que a escola de ${escolaB.cidade}.`);
            console.log(`Escola A: ${escolaA.quant_cursos} cursos vs Escola B: ${escolaB.quant_cursos} cursos.`)
        }
    
        else if (escolaB.quant_cursos > escolaA.quant_cursos) {
            console.log(`A escola de ${escolaB.cidade} possui mais cursos que a escola de ${escolaA.cidade}.`);
            console.log(`Escola B: ${escolaB.quant_cursos} cursos vs Escola A: ${escolaA.quant_cursos} cursos.`)
        }

        else{
            console.log(`A escola de ${escolaA.cidade} tem a mesma quantidade de cursos que a Escola de ${escolaB.cidade}`)
            console.log(`Escola A: ${escolaA.quant_cursos} cursos vs Escola B: ${escolaB.quant_cursos} cursos.`)
        }
    }
    
}

// Instância é uma ocorrência. Criação de um novo objeto, utilizando a palavra reservada NEW.

// Criando uma instância(uma nova escola)
const escolaA = new Senai(603, 'Araraquara', 1989, 50);
const escolaB = new Senai(145, 'São Carlos', 1998, 40);

// Exbibindo dados da nova escola
console.log();
escolaA.dadosEscola();
console.log();
escolaB.dadosEscola();
console.log();