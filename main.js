// Crie um script Node que receba números via linha de comando e imprima: 
// lista de pares, lista de ímpares, mínimo, máximo e média com 2 casas.
// Uso esperado: node main.js 10 3 7 8 2 11

// declarações
const numeros = [];
const numerosPar = [];
const numerosImpar = [];
let numeroMenor;
let numeroMaior;

// lê args e preenche números
const args = process.argv.slice(2);
for (const a of args) {
    const n = Number(a);
    if (Number.isFinite(n)) numeros.push(n);
};

// função iterar sobre array principal e puxar para outra array números pares
function par(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (Number.isInteger(numeros[i]) && numeros[i] % 2 === 0) {
            numerosPar.push(numeros[i]);
        };
    };
};

// função iterar sobre array principal e puxar para outra array números ímpares
function impar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (Number.isInteger(numeros[i]) && numeros[i] % 2 !== 0) {
            numerosImpar.push(numeros[i]);
        };
    };
};

par(numeros);
impar(numeros);

console.log(numeros);
console.log(numerosPar);
console.log(numerosImpar);

// numeros transformar em array
// declarar funções

// funcao criar array com par
// funcao criar array com impar
// funcao imprimir menor numero
// funcao imprimir maior numero
// funcao media


