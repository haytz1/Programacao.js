// Aula 5 : Exe,plos de Condiçoes
let prompt = require("prompt-sync")()

let usuario = prompt("Digite o seu usuario: ")
if ( usuario == "Miguelsito" ){
    console.log("Bem vindo "+usuario)
} else {
    console.log("Va embora "+usuario)
}

let idade = parseInt( prompt("Me fala sua idade: ") )
if ( idade > 99 ){
    console.log("Idade invalida")
}

console.log("")