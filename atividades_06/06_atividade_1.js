let prompt = require("prompt-sync")()

let escolha = parseInt( prompt("Me fale um numero: ") )

if ( escolha >= 0 ){
    console.log("Este numero e positivo")
} else {
    console.log("Este numero e negativo")
}