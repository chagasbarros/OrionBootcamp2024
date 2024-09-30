"use strict";
//"for..of" itera sobre os valores dos objetos iteráveis(como arrays, strings, mapas, set,etc)
//"for..in" itera sobre as chaves (ou índices) de um objeto ou array.
//O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string,
// retornando true ou false
function contarVogais(palavra) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let contador = 0;
    for (let vogal of palavra) {
        if (vogais.includes(vogal))
            contador++;
    }
    return contador;
}
let palavra = 'chagas';
let numeroDeVogais = contarVogais(palavra);
console.log(`O número de vogais da palavra ${palavra} é ${numeroDeVogais}`);
let palavraInput = prompt('Digite uma palavra');
if (palavraInput !== null) {
    let contandoVogais = contarVogais(palavraInput);
    alert(`Você digitou ${palavraInput}, ela contém ${contandoVogais} vogais`);
}
else {
    alert('Nenhuma palavra foi digitada');
}
