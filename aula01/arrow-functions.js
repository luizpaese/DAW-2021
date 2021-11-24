//Função com dois function params
const processa = (func1, func2) => {
    func1();

    const variavel = 'Excutando processo';
    console.log(variavel);

    func2();
}

processa(() => {

}, () => {

});