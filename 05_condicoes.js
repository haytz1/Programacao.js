let prompt = require("prompt-sync")()

console.log("Bem vindo ao DETRAN")
let idade = prompt("Digite Sua Idade: ")

// Comparadores 
// > maior
// < menor
// == engual
// >= maior ou engual
// != diferente

if(idade >= 18){
    console.log("Voce ja tem idade para tirar cnh")
} else{
    console.log("Voce ainda nao pode tirar sua cnh, volte ate completar 18 anos")
}