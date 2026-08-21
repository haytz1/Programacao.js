let prompt = require("prompt-sync")()

let peso = parseFloat(prompt("Me fale seu peso: "))
let altura = parseFloat(prompt("Me fale sua altura: "))
let soma = peso / (altura * altura)

console.log("O seu imc é: "+soma)

if (soma <= 18.5){
    console.log("Voce tem que ganhar peso")
} else if (soma >= 18.5 && soma <= 25){
    console.log("Peso ideal")
} else if (soma > 25 ) {
    console.log("Voce esta acima do peso")
}