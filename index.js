
(async  () => {
 const database = require ('./db');
 const Produto = require ('./produto');


    try {
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Produto.create({
        nome: 'lima',
        preco: 10,
        descricao: 'Um mouse USB bonitão'
        })
        console.log(resultadoCreate);
    }catch(error){
        console.log(error);
    }
})();