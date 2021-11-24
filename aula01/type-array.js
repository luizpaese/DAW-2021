//Array de valores
const vetor = ['banana', 'maçã', 'pêssego'];
console.log(vetor);

//Adiciona um item/elemento ao vetor
vetor.push('abacate');

console.log(vetor);


//Vetor de objetos
const frutas = [
    {nome: 'Banana', paisOrigem: 'Brasil'},
    {nome: 'Maça', paisOrigem: 'Argentina'},
    {nome: 'Pêssego', paisOrigem: 'Chile'}
];
console.log('Vetor original \n', frutas);
console.table(frutas);

console.log('Item 2 do Vetor \n', frutas[1]);
console.log('Atibuto paisOrigem do Item 2 do Vetor \n', frutas[1]['paisOrigem']);
console.log('Atibuto paisOrigem do Item 2 do Vetor \n', frutas[1].paisOrigem);

