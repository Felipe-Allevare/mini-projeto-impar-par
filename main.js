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

// função iterar sobre array. Procurar menor número. Adicionar a variável à declaração numeroMenor 
function menor(numeros) {
    let menor = numeros[0];
    for (const n of numeros) if (n < menor) {
        menor = n;
    };
    numeroMenor = menor;
};

// função iterar sobre array. Procurar maior número. Adicionar a variável à declaração numerMaior 
function maior(numeros) {
    let maior = numeros[0];
    for (const n of numeros) if (n > maior) {
        maior = n;
    };
    numeroMaior = maior;
};

// chamar funções
par(numeros);
impar(numeros);
menor(numeros);
maior(numeros);

// imprimir no console o resultado
console.log(`Os números são: ${numeros.join(' ')}`);
console.log(`Os números pares são: ${numerosPar.join(' ')}`);
console.log(`Os números ímpares são: ${numerosImpar.join(' ')}`);
console.log(`O menor número é: ${numeroMenor}`);
console.log(`O maior número é: ${numeroMaior}`);