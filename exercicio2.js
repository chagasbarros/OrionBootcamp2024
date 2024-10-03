"use strict";
const lista = [
    { "id": 1,
        "name": "Ada Lovelace",
        "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2,
        "name": "Alan Turing",
        "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3,
        "name": "Nikola Tesla",
        "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4,
        "name": "Nicolau Copérnico",
        "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
//A) CRIE UMA FUNÇÃO QUE RETORNE A BIO DO ID PASSADO
// Paradigma Imperativo
function buscarBio(lista){
    let inputBio = parseInt(document.getElementById("inputBio").value);
    
    for(const identificador of lista ){
        if(identificador.id === inputBio ){

            document.getElementById("respostaBio").innerHTML = "Bio solicitada:" + identificador.bio;
            return identificador.bio
}
    }
    return document.getElementById("respostaBio").innerHTML = 'Id não encontrado'

}

document.getElementById("buttonBio").addEventListener('click', () => buscarBio(lista));


// //Paradigma Funcional
// const encontrarbio = (listaDeNomes: Array<Pessoa>, identificador: number): string | undefined => {
//     const pessoa = lista.find(pessoa => pessoa.id === identificador);
//     return pessoa ? pessoa.bio:undefined;
// }
// const bioResposta = encontrarbio(lista, 2);
// if(bioResposta){
//     console.log(`Bio: ${bioResposta}`)
// }else {
//     console.log("Id não encontrado")
// }


// B) CRIE UMA FUNÇÃO QUE RETORNE O NOME DO ID PASSADO
// Paradigma Imperativo
function buscarNome(lista){
    let inputName = parseInt(document.getElementById("inputName").value);
    let verificarId = false;

    for(const identificador of lista ){
        if(identificador.id === inputName ){
            let verificarId = true;
            document.getElementById("respostaNome").innerHTML = identificador.name
            return
}
    }
    if(!verificarId){
        document.getElementById("respostaNome").innerHTML = "Id não encontrado"
    }
}

document.getElementById("buttonName").addEventListener('click', () => buscarNome(lista))


// //Paradigma Funcional
// const encontrarNome = (listaDeNomes: Array<Pessoa>, identificador: number): string | undefined => {
//     const pessoa = listaDeNomes.find(pessoa => pessoa.id === identificador)
//     return pessoa ? pessoa.name:undefined
// }
// const nomeEncontrado = encontrarNome(lista, 5)
// if(nomeEncontrado){
//     console.log(`Nome encontrado: ${nomeEncontrado}`)
// }else{
//     console.log('Nome não encontrado')
// }
// //C) CRIE UMA FUNÇÃO QUE APAGUE UM ITEM DA LISTA A PARTIR DE UM ID PASSADO
// // Paradigma Imperativo
function apagarItem(lista){
    let inputItem = parseInt(document.getElementById("inputItem").value);
    for(let i =0; i < lista.length; i++){
        if(lista[i].id === inputItem){
            lista.splice(i, 1);
            break;
        }
    }
    novaLista(lista);
}

function novaLista(lista){
    const mostrarLista = lista.map(item => `<li>ID: ${item.id} - ${item.name} - ${item.bio}</li>`)
    document.getElementById("novaLista").innerHTML = `<ul>${mostrarLista}</ul>`;
}
document.getElementById("deletarItem").addEventListener('click', () => apagarItem(lista))
novaLista(lista)


//Paradigma Funcional
// const deletarItem = (listadeNomes: Array<Pessoa>, identificador: number): Array<Pessoa> => {
//     const novaLista = lista.filter(pessoa => pessoa.id !== identificador)
//     return novaLista
// }
// const testeDeNovaLista = deletarItem(lista, 4)
// for(let i = 0; i < testeDeNovaLista.length; i++){
//     console.log(`Id: ${testeDeNovaLista[i].id}, Nome: ${testeDeNovaLista[i].name}, Bio: ${testeDeNovaLista[i].bio}`)
// }
//D) CRIE UMA FUNÇÃO QUE ALTERE A BIO OU O NOME A PARTIR DE UM ID PASSADO
// Paradigma Imperativo
function alterarNomeOuBio(){
    
    let alterarId = parseInt(document.getElementById("alterarId").value);
    let inputAlterarNome = document.getElementById("inputAlterarNome").value
    let inputAlterarBio = document.getElementById("inputAlterarBio").value

    let verificarId = false;

    for(let i = 0; i < lista.length; i++){
        if(lista[i].id === alterarId){
            let verificarId = true;

            if(inputAlterarNome){
                lista[i].name = inputAlterarNome;
            }
            if(inputAlterarBio){
                lista[i].bio = inputAlterarBio;
            }
            novaLista(lista)
            
        }
    }
    if(!verificarId) {
        document.getElementById('respostaAlterar').innerHTML = "Id não encontrado"
    }
    
}

document.getElementById("alterar").addEventListener('click', alterarNomeOuBio);
novaLista(lista)
// //verificando se a função alterou a bio 
// alterarNomeOuBio(1, undefined, "estudante back-end")
// const mudarNomeouBio = (listaDeNomes, identificador, nome, bio) => {
//     const novaLista = listaDeNomes.map(pessoa => {
//         if (pessoa.id === identificador) {
//             return Object.assign(Object.assign({}, pessoa), { name: nome ? nome : pessoa.name, bio: bio ? bio : pessoa.bio });
//         }
//         return pessoa;
//     });
//     return novaLista;
// };
// const testeDeNovaLista = mudarNomeouBio(lista, 1, "chagas", "aprendendo typescript");
// for (let i = 0; i < testeDeNovaLista.length; i++) {
//     console.log(`Id: ${testeDeNovaLista[i].id}, Nome: ${testeDeNovaLista[i].name}, Bio: ${testeDeNovaLista[i].bio}`);
// }
