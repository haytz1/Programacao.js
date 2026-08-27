// Aula 11 - funçoes com retorno



somar(9, 78)

// Funçoes com retorno E parametros
function somar(n1, n2){
    let soma = n1 + n2
    console.log(` A soma de ${n1} e ${n2} é ${soma} `)
}



// funçoes vazias (Void)
function somarNumeros(){
    let n1 = 1
    let n2 = 4
    let soma = n1 + n2
    console.log(` A soma de ${n1} e ${n2} é ${soma} `)
}

function numeropositivo(){
    let n1 = 4
    let resposta = "negativo"
    if(n1 >= 0 ){
        resposta = "positivo"
    } 

    console.log(`O numero ${n1} é ${resposta}`)

}