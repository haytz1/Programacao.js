// Aula 04: INPUT

let prompt = require("prompt-sync")()

let nome = prompt("Ola, Nao diga seu nome: ")
let sobrenome = prompt("Digite Seu sobrenome: ")
let idade = prompt("Digite Sua Idade: ")
console.log("Va embora "+nome +" "+sobrenome+ " que tem "+idade+" anus 🥺🥺" ) 


console.log("\n\n")

let produto = prompt("Digite o nome de um produto: ")
let precop1 = prompt("Digite o preço de "+produto+" : R$")
let produto2 = prompt("Digite o nome de outro produto: ")
let precop2 = prompt("Digite o preço de: "+produto2+" : R$")

console.log("--------Relatorio--------")
console.log(produto+ " - R$ " +precop1)
console.log(produto2+" - R$ "+precop2)