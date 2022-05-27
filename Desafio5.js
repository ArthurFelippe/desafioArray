/*
Criar uma função para inverter um array 
*/

// Declaração da função e do parametro
function inverterArray(ar) {

    // Declaração da função
    var ar2 = [];

    // Loop de declaração
    for (var i = ar.length - 1; i >= 0; i--) {
        ar2.push(ar[i]);
    }
    return ar2;
}

// Declaração de valores dentro de uma variavel 
var ar = [1, 2, 3, 4, 5];
var ar2 = inverterArray(ar);

console.log(ar2); 