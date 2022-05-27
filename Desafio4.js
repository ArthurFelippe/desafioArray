/*
Localizar o maior valor dentro de um array de números.
*/

// Declaração da função e do parametro
function LocalizarMaior(ar) {

    // Declaração da função
    var max = ar[0];

    // Loop de declaração
    for (var i = 0; i < ar.length; i++) {

        // Condição
        if (ar[i] > max) {
            max = ar[i];
        }
    }
    return max;
}

// Declaração de valores dentro de uma variavel 
var ar = [-5, 10, -3, 122, -9, 5, 90, 0, 1];
var max = LocalizarMaior(ar);

console.log("O Maior número dentro do array é:", max); 