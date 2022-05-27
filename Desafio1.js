/*
Calcular a soma dos números de um array
*/

// Declaração da função e do parametro
function somarArray(ar) {

  // Declaração e inicialização com o valor 0
  var soma = 0;

  // Loop de declaração
  for (var i = 0; i < ar.length; i++) {
    soma += ar[i];
  }
  return soma;
}

// Declaração de valores dentro de uma variavel 
var ar = [2, 3, -1, 5, 7, 9, 11, 15, 95];
var soma = somarArray(ar);

console.log(soma);
