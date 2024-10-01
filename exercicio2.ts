// Usando Array<Object>, o que significa que cada item em lista é do tipo genérico Object.
// No entanto, Object em Typescript é muito genérico e não garante que o objeto tenhas as 
// propriedades id, name e bio. A interface confirma pelo contrato que existe as propriedades.
interface Pessoa {
    id: number;
    name: string;
    bio: string
}

let lista: Array<Pessoa> = [
    {"id" : 1, 
        "name": "Ada Lovelace", 
        "bio" : "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina"},
    {"id" : 2, 
        "name": "Alan Turing", 
        "bio" : "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial"},
    {"id" : 3, 
        "name": "Nikola Tesla", 
        "bio" : "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada."},
    {"id" : 4,
         "name": "Nicolau Copérnico", 
         "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar."}
];


//A) CRIE UMA FUNÇÃO QUE RETORNE A BIO DO ID PASSADO

// Paradigma Imperativo
function buscarBio(id: number, lista: Array<Pessoa>): string{
    for(const identificador of lista ){
        if(identificador.id === id ){
            return identificador.bio
}
    }
    return 'Id não encontrado'
}

var testeID: string = buscarBio(4, lista)
console.log(testeID)

//Paradigma Funcional
const encontrarbio = (listaDeNomes: Array<Pessoa>, identificador: number): string | undefined => {
    const pessoa = lista.find(pessoa => pessoa.id === identificador);
    return pessoa ? pessoa.bio:undefined;
}

const bioResposta = encontrarbio(lista, 2);
if(bioResposta){
    console.log(`Bio: ${bioResposta}`)
}else {
    console.log("Id não encontrado")
}

//B) CRIE UMA FUNÇÃO QUE RETORNE O NOME DO ID PASSADO

//Paradigma Imperativo
function buscarNome(id: number, lista: Array<Pessoa>): string{
    for(const identificador of lista ){
        if(identificador.id === id ){
            return identificador.name
}
    }
    return 'Nome não encontrado'
}

var testeName: string = buscarNome(3, lista)
console.log(testeName)

//Paradigma Funcional
const encontrarNome = (listaDeNomes: Array<Pessoa>, identificador: number): string | undefined => {
    const pessoa = listaDeNomes.find(pessoa => pessoa.id === identificador)
    return pessoa ? pessoa.name:undefined
}

const nomeEncontrado = encontrarNome(lista, 5)

if(nomeEncontrado){
    console.log(`Nome encontrado: ${nomeEncontrado}`)
}else{
    console.log('Nome não encontrado')
}


//C) CRIE UMA FUNÇÃO QUE APAGUE UM ITEM DA LISTA A PARTIR DE UM ID PASSADO

// Paradigma Imperativo
function apagarItem(id: number, lista: Array<Pessoa>): void{
    for(let i =0; i < lista.length; i++){
        if(lista[i].id === id){
            lista.splice(i, 1);
        }
    }
}

apagarItem(2, lista)
// verificando se o item foi deletado.
for(let i = 0; i < lista.length; i++){
    console.log(`Id: ${lista[i].id}, Nome: ${lista[i].name}`)
}

//Paradigma Funcional
const deletarItem = (listadeNomes: Array<Pessoa>, identificador: number): Array<Pessoa> => {
    const novaLista = lista.filter(pessoa => pessoa.id !== identificador)
    return novaLista
    
}

const testeDeNovaLista = deletarItem(lista, 4)
for(let i = 0; i < testeDeNovaLista.length; i++){
    console.log(`Id: ${testeDeNovaLista[i].id}, Nome: ${testeDeNovaLista[i].name}, Bio: ${testeDeNovaLista[i].bio}`)
}

//D) CRIE UMA FUNÇÃO QUE ALTERE A BIO OU O NOME A PARTIR DE UM ID PASSADO

//Paradigma Imperativo
function alterarNomeOuBio(id: number, mudarNome?: string, mudarBio?: string): void{
    for(let i = 0; i < lista.length; i++){
        if(lista[i].id === id){
            if(mudarNome){
                lista[i].name = mudarNome;
            }
            if(mudarBio){
                lista[i].bio = mudarBio;
            }
            return;
        }
    }
    console.log('O id não foi encontrado')
}
//verificando se a função alterou a bio 
alterarNomeOuBio(1, undefined, "estudante back-end")

//Paradigma Funcional
const mudarNomeouBio = (listaDeNomes: Array<Pessoa>, identificador: number, nome?: string, bio?: string): Array<Pessoa> => {
    const novaLista = listaDeNomes.map(pessoa => {
        if(pessoa.id === identificador){
            return {
                ...pessoa,
                name: nome ? nome : pessoa.name,
                bio: bio ? bio : pessoa.bio
            };
        }
        return pessoa;
    })
    return novaLista
}

const verificarNovaLista = mudarNomeouBio(lista, 1, "chagas", "aprendendo typescript")
for(let i = 0; i < verificarNovaLista.length; i++){
    console.log(`Id: ${verificarNovaLista[i].id}, Nome: ${verificarNovaLista[i].name}, Bio: ${verificarNovaLista[i].bio}`)
}
