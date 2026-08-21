let prompt = require("prompt-sync")()

let perg1 = 1
let perg2 = 1
let perg3 = 1
let perg4 = 1
let perg5 = 1

let ranking = 0

let pergunta1 = prompt("Telefonou para a vítima? ")

if ( pergunta1 == "Sim" ){
    ranking = perg1
} else {
    ranking = ranking
}

let pergunta2 = prompt("Esteve no local do crime? ")

if ( pergunta2 == "Sim" ){
    ranking = ranking + perg2
} else {
    ranking = ranking
}


let pergunta3 = prompt("Mora perto da vítima? ")

if ( pergunta3 == "Sim" ){
    ranking = ranking + perg3
} else {
    ranking = ranking
}

let pergunta4 = prompt("Devia para a vítima? ")

if ( pergunta4 == "Sim" ){
    ranking = ranking + perg4
} else {
    ranking = ranking
}

let pergunta5 = prompt("Já trabalhou com a vítima? ")

if ( pergunta5 == "Sim" ){
    ranking = ranking + perg5
} else  {
    ranking = ranking
}

console.log(ranking)

if (ranking <= 1){
    console.log("Voce é inocente")
} else if (ranking == 2){
    console.log("Voce esta classificado como suspeito")
} else if (ranking == 3 || ranking == 4 ){
    console.log("Voce esta classificado como Cumplice")
} else if (ranking == 5){
    console.log("Voce é o Assasino")
}