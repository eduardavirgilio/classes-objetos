//criando um objeto
const senai = {
    codigo: 603,
    cidade: 'Araraquara',
};

const pessoa = {
    nome: 'Eduarda Virgilio',
    idade: 17,
    altura: 1.63,
    peso: 10,
};

//para acessar o valor de um objeto, basta chamar o objeto e a chave
console.log(`eu me chamo ${pessoa.nome}, tenho ${pessoa.idade} anos, minha altura é ${pessoa.altura}, peso ${pessoa.peso}kg, moro em ${senai.cidade} e estudo no senai ${senai.codigo}`);

//adicionando dados de forma dinamica (fica na memoria ram)
console.log(senai);
senai.curso = 'DESENVOLVIMENTO DE SISTEMAS'
console.log(senai);
console.log(`Curso adicionado: ${senai.curso}`)

senai.curso = 'Mecatrônica';
pessoa.nome = 'Alex';
console.log(`O ${pessoa.nome} faz curso de ${senai.curso}`)