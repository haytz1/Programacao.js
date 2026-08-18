// Aula 04 Converter variaveis
let prompt = require("prompt-sync")()

/*
let numero1 = prompt("Digite um numero: ")
numero1 = parseInt(numero1)        //parseint() para numeros inteiros  e parsefloat para numeros quebrados ex (4.5, 99.00)

let numero2 = parseInt( prompt("Digite outro numero: " ) )

let soma = numero1 + numero2

console.log("O resultado é: "+soma)
*/
//-------------------------------------------------------------

//Atovodade 1

let ano = parseInt ( prompt("Digite o ano que voce nasceu: ") )
soma = 2026 - ano

console.log("Voce tem "+soma+" anos")

//Atividade 2

let nota1 = parseFloat(prompt("Digite uma nota: "))
let nota2 = parseFloat(prompt("Digite outra nota: "))
let nota3 = parseFloat(prompt("Digite mais uma nota: "))

soma = (nota1 + nota2 + nota3) / 3

console.log("Sua media é: "+soma)

// Atividade 3

let produto = prompt("Digite o nome de um produto: ")
let preco = parseFloat( prompt("Digite um preco: ") )
let estoque = parseInt ( prompt("Digite a quantidade do estoque: ") )

let fatura = preco * estoque

console.log("Voce ira faturar: "+fatura)