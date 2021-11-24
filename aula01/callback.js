//Função sem retorno
function inicio() {
    const variavel = 'Inicio da execução';
    console.log(variavel);
}

const init = function() {
    console.log('Inicio alternativo')
}

//Função com dois function params
function processa(func1, func2) {
    func1();

    const variavel = 'Excutando processo';
    console.log(variavel);

    func2();
}

//Função sem retorno
function fim() {
    const variavel = 'Finalizando execucao processo';
    console.log(variavel);
}

processa(init, fim);


processa(function(){
    console.log('Funcao init')
}, function(){
    console.log('Funcao init')
})