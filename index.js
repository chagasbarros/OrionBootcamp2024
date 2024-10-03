"use strict";

function contarVogais() {
    event.preventDefault();
    let palavra = document.getElementById("palavra").value;

    const vogais = /[a,e,i,o,u,A,E,I,O,U,á,é,í,ó,ú,Á,É,Í,Ó,Ú,à,è,ì,ò,ù,À,È,Ì,Ò,Ù,ã,õ,Ã,Õ,â,ê,î,ô,û,Â,Ê,Î,Ô,Û,ä,ë,ï,ö,ü,Ä,Ë,Ï,Ö,Ü]/;

    let contador = 0;

    for (let vogal of palavra) {
        if (vogais.test(vogal)) {
            contador++;
        }
    }
    document.getElementById("resposta").innerHTML = "a palavra digitada tem " + contador + " vogais";
    return contador;
}
document.getElementById("pesquisar").addEventListener('click', contarVogais)




