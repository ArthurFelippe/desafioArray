/*
Criar uma função que receba como parâmetro um array de números e retorne um array
contendo somente números positivos. 
*/

// Declaração da função e do parametro
function retornarPositivos(ar) {

    // Declaração da função
    var ar2 = [];

    // Loop de declaração
    for (var i = 0; i < ar.length; i++) {
        var el = ar[i];

        // Condição
        if (el >= 0) {
            ar2.push(el);
        }
    }
    return ar2;
}

// Declaração de valores dentro de uma variavel 
var ar = [-5, 10, 12, -9, 5, 90, 0, 1];
var ar2 = retornarPositivos(ar);

console.log("Os números positivos dentro do array são:", ar2);