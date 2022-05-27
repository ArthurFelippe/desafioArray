/*
Calcular a média de todos os números de um array 
*/

// Declaração da função e do parametro
function mediaArray(ar) {

    // Declaração da função
    var n = ar.length;
    var soma = 0;

    // Loop de declaração
    for (var i = 0; i < n; i++) {
        soma += ar[i];
    }
    return soma / n;
}

// Declaração de valores dentro de uma variavel 
var ar = [5, 5, 4, 6, 5];
var media = mediaArray(ar);
console.log("mediaArray: ", media);