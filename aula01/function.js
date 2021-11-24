//Função sem retorno
function inicio() {
    const variavel = 'Inicio da execução';
    console.log(variavel);
}

//Função com retorno
function processa() {
    const variavel = 'Excutando processo';
    return variavel;
}

//Função sem retorno
function fim() {
    const variavel = 'Finalizando execucao processo';
    console.log(variavel);
}

//Executa todas as funções
function run() {
    inicio();

    const retorno = processa();
    console.log(retorno);

    fim();
}

run();
