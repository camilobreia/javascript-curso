var agora = new Date() //criar new + uma função date()
var hora = agora.getHours() // para saber a hora atual do computador do cliente ou servidor
console.log(`A hora atual é de ${hora} horas`)
if (hora < 12 && hora >= 5){
    console.log('Bom dia!!!')
} else if (hora >= 12 && hora <= 18){
    console.log('Boa tarde!!!')
} else if (hora < 0){
    console.log('Boa Noite')
} else if (hora < 5 && hora >= 0){
    console.log('Boa Madrugada')
}