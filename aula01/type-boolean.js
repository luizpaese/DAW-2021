//Type Boolean
const primeiroValor = true;
const segundoValor = false;
const valorIgual = primeiroValor === segundoValor;
console.log(`${primeiroValor} === ${segundoValor}: ${valorIgual}`);

//Trusthy e Falsy
const terceiroValor = 0;
const quartoValor = '';

console.log(`Terceiro valor: ${terceiroValor == false }`);
console.log(`Terceiro valor: ${quartoValor == false }`);