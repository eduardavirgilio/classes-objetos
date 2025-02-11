//uma classe define como um objeto deve ser
class Senai{
    codigo;
    cidade;

    descreverEscola(){
        console.log(`O código ${this.codigo} pertence a escola SENAI de ${this.cidade}`)}
};

const senaiAqa = new Senai();
senaiAqa.codigo = 603;
senaiAqa.cidade = 'Araraquara';

const senaiMat = new Senai();
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão';

senaiAqa.descreverEscola();
senaiMat.descreverEscola();