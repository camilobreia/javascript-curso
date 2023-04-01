let num = [5, 3, 8, 9, 2]
num.sort()
console.log(num)
let valor = num.indexOf(9)
if (valor == -1){
    console.log('Valor não encontrado')
} else{
    console.log(`O valor está na posição ${valor}`)
}