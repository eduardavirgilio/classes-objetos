// Classe é uma definição. Como um objeto deve ser. 
function relatorio(){

    //obter os elementos e pegar o valor digitado
    const codigoEscolaA = parseInt(document.getElementById('cod-escola').value);
    console.log(`${codigoEscolaA}`)

    const codigoEscolaB = parseInt(document.getElementById('cod-escola-1').value);
    console.log(`${codigoEscolaB}`)

    const cidadeEscolaA = parseInt(document.getElementById('nome-cidade').value);
    console.log(`${cidadeEscolaA}`)

    const cidadeEscolaB = parseInt(document.getElementById('nome-cidade-1').value);
    console.log(`${cidadeEscolaB}`)

    const anoEscolaA = parseInt(document.getElementById('ano-construcao').value);
    console.log(`${anoEscolaA}`)

    const anoEscolaB = parseInt(document.getElementById('ano-construcao-1').value);
    console.log(`${anoEscolaB}`)

    const comparaCursosA = parseInt(document.getElementById('qnt-cursos').value);
    console.log(comparaCursosA);

    const comparaCursosB = parseInt(document.getElementById('qnt-cursos-1').value);
    console.log(comparaCursosB);
}

    class Senai {
    codigo;
    cidade;
    anoConstrucao;
    qtdeCursos;
    calcularIdade;

    constructor(codigo, cidade, anoConstrucao, quant_cursos) {
        this.codigo = codigo;
        this.cidade = cidade;
        this.anoConstrucao = anoConstrucao;
        this.quant_cursos = quant_cursos;
        this.calcularIdade = anoAtual - anoConstrucao;
    }

    calcularIdade() {
        const novaData = new Date().getFullYear();
        return novaData = anoAtual;
    }

    dadosEscola() {

        document.getElementById('resultado-comparacao').style.display = 'flex';
        const resultado = document.getElementById('resultado-comparacao');
        resultado.innerHTML = `
        <p><strong>#Relatorio Cadastro</strong>
        <br>
        <br>O código ${this.codigo} pertence a Escola SENAI de ${this.cidade}.
        <br>A escola SENAI de ${this.cidade} foi construída em ${this.anoConstrucao} e possui ${this.calcularIdade} anos.
        <br>
        <br><strong>#Fim do Relatório Cadastro</strong>`
    }
}

// criando instâncias das escolas

const escolaA = new Senai(codigoEscolaA, cidadeEscolaA, anoEscolaA, comparaCursosA);
const escolaB = new Senai(codigoEscolaB, cidadeEscolaB, anoEscolaB, comparaCursosB);

function compararEscolas() {

    if (escolaA.comparaCursosA > escolaB.comparaCursosB){
        document.getElementById('resultado-comparacao').style.display = 'flex';
        const resultado = document.getElementById('resultado-comparacao');
        resultado.innerHTML = `
        <br><strong>#Relatório de Cursos</strong>
        <br>
        <br>O SENAI de ${cidadeEscolaA} tem mais cursos que o SENAI de ${cidadeEscolaB}.
        <br>${cidadeEscolaA}: ${comparaCursosA} cursos vs ${cidadeEscolaB}: ${comparaCursosB} cursos.
        <br>
        <br><strong>#Fim Relatório de Cursos</strong>
        </p>`
    }
        
    else{
        document.getElementById('resultado-comparacao').style.display = 'flex';
        const resultado = document.getElementById('resultado-comparacao');
        resultado.innerHTML = `
        <br><strong>#Relatório de Cursos</strong>
        <br>
        <br>O SENAI de ${cidadeEscolaA} tem menos cursos que o SENAI de ${cidadeEscolaB}.
        <br>${cidadeEscolaA}: ${comparaCursosA} cursos vs ${cidadeEscolaB}: ${comparaCursosB} cursos.
        <br>
        <br><strong>#Fim Relatório de Cursos</strong>
        </p>`
    }
}


function limparRelatorio(){
    document.getElementById('cod-escola').value = '';
    document.getElementById('nome-cidade').value = '';
    document.getElementById('ano-construcao').value = '';
    document.getElementById('qnt-cursos').value = '';
    
    document.getElementById('cod-escola-1').value = '';
    document.getElementById('nome-cidade-1').value = '';
    document.getElementById('ano-construcao-1').value = '';
    document.getElementById('qnt-cursos-1').value = '';

    document.getElementById('resultado-comparacao').style.display = 'none';
}

