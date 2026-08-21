// Aula 5
let prompt = require("prompt-sync")() // importar

let valor = parseFloat( prompt("Digite o valor: "))
let desconto = parseFloat(prompt("Escolha o desconto: "))
desconto = desconto / 100
let total = valor * desconto
let valorcomdesconto = valor - total

console.log(valorcomdesconto)