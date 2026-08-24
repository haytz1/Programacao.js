// Aula 06 : Praticas com condiçoes
let prompt = require("prompt-sync")()

let preco_sp = 124.00
let preco_pintamoeba = 160.00 
let preco_seguro = 67.67

let total = 0

console.log("Escolha seu destino: ")
console.log("1 - Sao Paulo por R$ "+preco_sp)
console.log("2 - Pintamoeba por R$ "+preco_pintamoeba)
let destino = prompt("Digite seu destino: ")
if ( destino == "1" ){
    total = preco_sp
} else {
    total = preco_pintamoeba
}

let seguro = prompt("Deseja adicionar um seguro por mais "+preco_seguro+" ? : ")
if ( seguro == "Sim" ){
   total = total + preco_seguro
}


let cupom = prompt("Digite seu cupom: ")
if( cupom == "Caminhaoquebramolas" ){
    let cupom10 = total * 0.10
    total =  total - cupom10

    console.log("Parabens, voce recebeu 10% de desconto na sua proxima viagem")


} else {
    console.log("Este cupom nao existe")
}

let resposta = prompt("Voce deseja receber promoçoes no seu email: ")
if ( resposta == " Sim" ){
    console.log("Obrigado por se registrar, Voce recebera novos emails em breve.")
} else {
    console.log("Cai fora entao !!!")
}
console.log("O total da viagem é de: R$ "+total )

console.log("Formas de pagamento ")
console.log("1 - Cartao de Credito (Acrescimo de 5%) ")
console.log("2 - Pix (desconto de 5%) ")
resposta = prompt("Escolha uma opçao: ")

if (resposta == "1" ){
    total = total * 1.05
    //let acrescimo = total * 0.05
    //total = total + acrescimo
} else {
    total = total * 0.95
    //let desconto = total * 0.05
    //total = total - desconto
}


console.log("O total sera de: "+total)

console.log("Obrigado e volte sempre")