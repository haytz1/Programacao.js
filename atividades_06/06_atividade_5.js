let prompt = require("prompt-sync")()

let time1 = prompt('Qual e o nome do seu time? : ')
let time2 = prompt("Qual e o nome do time adversario? : ")

let gols1 = parseInt(prompt("Quantos gols seu time fez? : "))
let gols2 = parseInt(prompt("Quantos gols o time adversario fez? : "))

if ( gols1 == gols2 ){
    console.log("Deu empate")
} else if (gols1 > gols2){
    console.log("o Time "+time1+" ganhou")
} else {
    console.log("O Time "+time2+" ganhou")
}