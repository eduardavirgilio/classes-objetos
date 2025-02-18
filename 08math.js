//Função anônima para gerar um número aleatório entre 1 e 15

// const gerarNumeroAleatorio = () => {

//     // Math.random() gera um número entre 0 e 1 (exclusivo)
//     let numeroAleatorio = Math.random();
//     console.log(`Sorteio: ${numeroAleatorio}`);
    
//     // Multiplicamos por 15 para obter um número entre 0 e 14 (exclusivo)
//     numeroAleatorio *= 15; // numeroAleatorio = numeroAlatorio * 15;
//     console.log(`Multiplicar: ${numeroAleatorio}`);

//     //Math.floor() para arredondar para baixo para um número inteiro
//     numeroAleatorio = Math.floor(numeroAleatorio);
//     console.log(`Arredondar: ${numeroAleatorio}`);

//     // Somamos 1 para obter um número entre 1 e 15 (inclusivo)
//     numeroAleatorio += 1;
//     console.log(`Somar 1: ${numeroAleatorio}`);
   
//     // Retorna o número aleatório
//     return numeroAleatorio;
//   }
  
//   // Atribuindo a Função a uma variável
//   let numeroSorteado = gerarNumeroAleatorio();
  
//   //Exibindo o número sorteado
//   console.log(`Número sorteado: ${numeroSorteado}`);

//////////////////////////////////////////////////////////////////////////////////////////////

// refatorando o codigo
  
//Função anônima para gerar um número aleatório entre 1 e 15

const gerarNumeroAleatorio = (numero) => {

    // Math.random() gera um número entre 0 e 1 (exclusivo)
    let numeroAleatorio = Math.random();
    console.log(`Sorteio: ${numeroAleatorio}`);
    
    // Multiplicamos por 15 para obter um número entre 0 e 14 (exclusivo)
    numeroAleatorio *= numero; // numeroAleatorio = numeroAlatorio * 15;
    console.log(`Multiplicar: ${numeroAleatorio}`);

    //Math.floor() para arredondar para baixo para um número inteiro
    numeroAleatorio = Math.floor(numeroAleatorio);
    console.log(`Arredondar: ${numeroAleatorio}`);

    // Somamos 1 para obter um número entre 1 e 15 (inclusivo)
    numeroAleatorio += 1;
    console.log(`Somar 1: ${numeroAleatorio}`);
   
    // Retorna o número aleatório
    return numeroAleatorio;
  }
  
  // Atribuindo a Função a uma variável
  let numeroSorteado = gerarNumeroAleatorio(100);
  
  //Exibindo o número sorteado
  console.log(`Número sorteado: ${numeroSorteado}`);


// codigo reduzido

const numeroSorteadov2 = (numero) => Math.floor(Math.random() * numero) + 1;
console.log(numeroSorteadov2(10));

const gerarNumeroAleatoriov2 = (min, max) => Math.floor(Math.random() * (max - 1)) + min;
console.log(gerarNumeroAleatoriov2(200, 400));