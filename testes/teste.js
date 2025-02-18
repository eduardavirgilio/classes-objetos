//introdução do objeto
console.log(Math.PI); //valor do pi
console.log(Math.E); //constante de euler
console.log(Math.SQRT2); //raiz quadrada do 2

//arredondamento de valores
console.log(Math.round(4.7)); //arredonda para o mais proximo
console.log(Math.floor(4.9)); //arredonda para baixo
console.log(Math.ceil(4.1)); //arredonda para cima

//função para arredondar o troco para o multiplo de 5 centavos
const arredondarTroco = (valor) => Math.round(valor * 20) / 20;
console.log(arredondarTroco(2.87));

//valores aleatorios entre 0 e 1
console.log(Math.random());

//oq vem depois da seta é o return

//valores aleatorios entre 1 e 10 (para aumentar o max é so mudar o numero da multiplicação    )
const numeroSorteado = () => Math.floor(Math.random() * 10) + 1;
console.log(numeroSorteado());

//valores aleatorios entre 1 e 6 (como se fosse um dado)
const numeroSorteadoDado = () => {
    return Math.floor(Math.random() * 6) + 1;
}
console.log(numeroSorteadoDado());

//potencia, raiz quadrada e módulo
console.log(Math.pow(2, 3)); // potencia
console.log(2 ** 3); // potencia
console.log(Math.sqrt(25)); // raiz quadrada
console.log(Math.abs(-50)); // modulo

//calcular juros compostos

//logica do ivo
const jurosCompostos = (capital, taxa_juros, meses) => capital * Math.pow(1 + taxa_juros, meses)
console.log(jurosCompostos(1500, 0.05, 5))

//minha logica
const jurosCompostosV2 = (capital, taxa_juros, meses) => capital * (1 + taxa_juros) ** meses
console.log(jurosCompostosV2(1500, 0.05, 5))

//encontrando o maior e menos numero
console.log(Math.max(25, 32, 19, 27)); //maior numero
console.log(Math.min(25, 32, 19, 27)); //menor numero

//temperatura max e min da semana

const temperaturas = [22, 18, 25, 30, 21, 19, 27];
console.log(Math.max(...temperaturas))
console.log(Math.min(...temperaturas))

// verifica par e impar
const verificaNumero = () => {

    let numero = Math.floor(Math.random() * 10) + 1;

    if (numero % 2 === 0){
        console.log(`o numero ${numero} é par`)
    }

    else{
        console.log(`o numero ${numero} é impar`)
    }
}

verificaNumero()



