// não precisa de parametros
function somar(){
    let v1 = 0;
    let v2 = 0;
    const resultado = v1 + v2;
    console.log(resultado);
}

somar(); //invocando a função

//função com parametros (nao tem o return)
function somar(v1, v2){
    const resultado = v1 + v2;
    console.log(resultado);
}

console.log(somar(1, 2));

//retornando o valor do calculo (com return)
function somar(v1, v2){
    const resultado = v1 + v2;
    return resultado;
}

console.log(somar(1, 2));

//retornando valor informado no parametro versao simplificada
function somar(v1, v2){
    return v1 + v2;
}

// criando uma função com o html de soma

function somar(){
    const v1 = document.getElementById('valor-01').value;
    const v2 = document.getElementById('valor-02').value;
    somar(v1, v2);
    document.getElementById.('resultado').textContent = `${somar()}` //o textcontent coloca dentro de uma tag 
}

//resolução porcentagem - função normal
//função que retorna a % de um valor
function porcentagem(valor, taxa){
    return valor * (taxa / 100);
}

//resolução porcentagem - função de seta
let porcentagem = (valor, taxa) =>{
    return valor * (taxa / 100);
}

//resolução compra prazo - função normal
//função que retorna o valor de uma compra a prazo
function compraPrazo(valor, taxa){
    return valor + (valor * taxa / 100);
}

//resolução compra prazo - função de seta
let compraPrazo = (valor, taxa) =>{
    return valor + (valor * taxa / 100);
}

//resolução compra vista - função normal
//função que retorna o valor de uma compra a vista
function compraVista(valor, taxa){
    return valor - (valor * taxa / 100);
}

//resolução compra vista - função de seta
let compraVista = (valor, taxa) => {
    return valor - (valor * taxa / 100);
}

// opção ultra mega comprimida
let compraVista = (valor, taxa) => valor - (valor * taxa / 100);
