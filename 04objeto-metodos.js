const senai = {
    codigo: 603,
    cidade: 'Araraquara',

    descreverEscola: function(){
        console.log(`O código ${this.codigo} pertence a escola SENAI de ${this.cidade}.`) //o this indica que eu vou utilizar o codigo do proprio objeto
    }
}

senai.descreverEscola();

senai.codigo = 715
senai.cidade = 'sp';

senai.descreverEscola();

//acessando os dados de forma dinamica
console.log(senai['codigo']);

console.log(senai.codigo);
