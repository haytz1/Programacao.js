let prompt = require("prompt-sync")()

console.log("---------------------------------------")
console.log("Cadastro Dos Preços - Carrapato dogs")
console.log("---------------------------------------")

let pao = parseFloat(prompt("Digite o preço do pâo: R$"))
let salsicha = parseFloat(prompt("Digite o preço da salsicha: R$"))
let pure = parseFloat(prompt("Digite o preço do pure de batata: R$"))
let queijo = parseFloat(prompt("Digite o preço do queijo: R$"))
let bacon = parseFloat(prompt("Digite o preço do bacon: R$"))
let lucro = parseInt(prompt("Digite a porcentagem do lucro desejado: "))
lucro = lucro / 100

let cachorroquentepure = pao + pure + bacon + salsicha
let cachorroquentepurelucro = cachorroquentepure * lucro
let cachorroquentepuresoma = cachorroquentepure + cachorroquentepurelucro


let cachorroquentecremoso = pao + salsicha + salsicha + queijo
let cachorroquentecremosolucro = cachorroquentecremoso * lucro
let cachorroquentecremososoma = cachorroquentecremoso + cachorroquentecremosolucro


let cachorroquenteespecial = pao + salsicha + pure + queijo + bacon
let cachorroquenteespeciallucro = cachorroquenteespecial * lucro
let cachorroquenteespecialsoma = cachorroquenteespecial + cachorroquenteespeciallucro


let combolanches = cachorroquentepure + cachorroquentecremoso + cachorroquenteespecial
let combolanches1 = combolanches * lucro
let combolanches2 = combolanches + combolanches1


let cachorro_pure = "Pão, 1 purê de batata, 1 bacon, 1 salsicha"

let cachorro_cremoso = "Pão, 2 salsichas, 1 queijo"

let cachorro_especial = "Pão, 1 salsicha, 1 purê de batata, 1 queijo, 1 bacon"

let combo = "1 Cachorro-quente com purê, 1 Cachorro-quente cremoso, 1 Cachorro-quente especial"


console.log("-----------------------------")
console.log("Cardapio De Carrapato dogs")
console.log("-----------------------------")

console.log("Lucro Aplicado: "+lucro+" %")

console.log("CACHORRO QUENTE COM PURE")
console.log("Ingredientes : "+cachorro_pure)
console.log("Preço de custo: R$"+cachorroquentepure)
console.log("Preço de venda: R$"+cachorroquentepuresoma)

console.log("---------------------------------------------")




console.log("Cachorro-quente cremoso")
console.log("Ingredientes : "+cachorro_cremoso)
console.log("Preço de custo: R$"+cachorroquentecremoso)
console.log("Preço de venda: R$"+cachorroquentecremososoma)

console.log("---------------------------------------------")




console.log("Cachorro-quente especial")
console.log("Ingredientes : "+cachorro_especial)
console.log("Preço de custo: R$"+cachorroquenteespecial)
console.log("Preço de venda: R$"+cachorroquenteespecialsoma)

console.log("---------------------------------------------")



console.log("Combo")
console.log("O que vem: "+combo)
console.log("Preço de custo: R$"+combolanches)
console.log("Preço de venda: R$"+combolanches2)



