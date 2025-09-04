// Crie um script Node que receba números via linha de comando e imprima: 
// lista de pares, lista de ímpares, mínimo, máximo e média com 2 casas.
// Uso esperado: 
// node main.js 10 3 7 8 2 11
// node main.js "10,3,7,8,2,11"
// node main.js --ordenar 10 3 7 8 2 11
// node main.js 1.5 2.5 4 a b

// declarações
const numeros = [];
const numerosPar = [];
const numerosImpar = [];
let numeroMenor;
let numeroMaior;
let numeroMedia;


// process.argv com filtro na entrada do cli
const raw = process.argv.slice(2);
const ordenar = raw.includes("--ordenar");
const tokens = raw
    .filter(x => x !== "--ordenar")
    .flatMap(x => x.includes(",") ? x.split(",") : [x])
    .map(x => x.trim())
    .filter(x => x.length > 0);

// joga os números filtrados para dentro da array numeros
for (const t of tokens) {
    const n = Number(t);
    if (Number.isFinite(n)) numeros.push(n);
    else console.warn(`Ignorado: "${t}" (não numérico.)`);
};

// verifica se numeros.length é igual a zero
if (numeros.length === 0) {
    console.log("Nenhum número válido");
    process.exit(0);
};

// imprimir texto em ordem crescente
if (ordenar) {
    const ordenados = [...numeros].sort((a, b) => a - b);
    console.log("Ordenado:", ordenados.join(" "));
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

// função iterar sobre array. Procurar maior número. Adicionar a variável à declaração numeroMaior 
function maior(numeros) {
    let maior = numeros[0];
    for (const n of numeros) if (n > maior) {
        maior = n;
    };
    numeroMaior = maior;
};

// função iterar sobre array. Adicionar números: somando cada iteração na variável total. Dividir total pelo .length da array. Adicionar o resultado à declaração numeroMedia
function media(numeros) {
    let total = 0;
    for (let i = 0; i < numeros.length; i++) {
        total += numeros[i];
    };
    numeroMedia = total / numeros.length;
};

// chamar funções
par(numeros);
impar(numeros);
menor(numeros);
maior(numeros);
media(numeros);

// imprimir no console o resultado
console.log(`Os números são: ${numeros.join(' ')}`);
console.log(`Os números pares são: ${numerosPar.join(' ')}`);
console.log(`Os números ímpares são: ${numerosImpar.join(' ')}`);
console.log(`O menor número é: ${numeroMenor}`);
console.log(`O maior número é: ${numeroMaior}`);
console.log(`A média dos números é: ${numeroMedia.toFixed(2)}`);
