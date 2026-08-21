let prompt = require("prompt-sync")()

let numero = parseInt(prompt("Me fale um numero: "))
let numero2 = parseInt(prompt("Me fale outro numero: "))

if ( numero > numero2 ){
    console.log(numero+" é maior que "+numero2)
} else{
    console.log(numero2+" é maior que "+numero)
}