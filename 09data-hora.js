const novaData = new Date();

console.log(novaData.getFullYear()); //ano

console.log(novaData.getDate()); //dia

console.log(novaData.getDay()); //mês

console.log(novaData.getHours()); //hora

setInterval(() => {
    console.log(new Date().toLocaleTimeString()); //hora local e converte em uma string
}, 1000); //obtem a cada 1 segundo

setInterval(() => {
    
})