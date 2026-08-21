let prompt = require("prompt-sync")()

let peixe = parseFloat(prompt("Quantos kg de peixe voce pescou? : "))
let multa = 4.25


if ( peixe > 50 ){
    let excesso = (peixe - 50) * multa
    let multa = excesso
    console.log("Voce tera que pagar: R$ "+multa+" de multa")
} else {
    let valor = peixe * multa
    console.log("Voce nao excedeu o limite o valor final sera de: R$ "+valor)
}