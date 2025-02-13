class Senai {

    codigo;
    cidade;
    ano_construcao;
    quant_cursos;

    constructor(codigo, cidade, ano_construcao, quant_cursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.ano_construcao = ano_construcao;
        this.quant_cursos = quant_cursos;
    }

    dadosEscola() {
        console.log(`O código ${this.codigo} pertence à Escola SENAI de ${this.cidade}.`);
        console.log(`A escola SENAI de ${this.cidade} foi construída em ${this.ano_construcao} e tem ${2025 - this.ano_construcao} anos.`);
        console.log();
    }
}

// criando instâncias das escolas
const escolaA = new Senai(603, 'Araraquara', 1989, 50);
const escolaB = new Senai(145, 'São Carlos', 1998, 50);

// função para exibir um relatório único
function relatorioGeral() {
    console.log();
    console.log('★ Relatório de Cadastro');
    console.log();
    escolaA.dadosEscola();
    escolaB.dadosEscola();

    console.log('★ Relatório sobre os Cursos');
    console.log();
    
    if (escolaA.quant_cursos > escolaB.quant_cursos) { 
        console.log(`A escola A de ${escolaA.cidade} possui mais cursos que a escola B de ${escolaB.cidade}.`);
    } else if (escolaB.quant_cursos > escolaA.quant_cursos) {
        console.log(`A escola B de ${escolaB.cidade} possui mais cursos que a escola A de ${escolaA.cidade}.`);
    } else {
        console.log(`As escola A de ${escolaA.cidade} e a B de ${escolaB.cidade} possuem a mesma quantidade de cursos.`);
    }

    console.log(`Escola A: ${escolaA.quant_cursos} cursos vs Escola B: ${escolaB.quant_cursos} cursos.`);
}

// chamando a função para exibir o relatório uma única vez
relatorioGeral();
console.log();
