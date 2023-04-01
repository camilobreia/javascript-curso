let num = document.getElementById('numtxt')
let lista = document.querySelector('select#flista') //método diferente mas com mesma funcionaldiade
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ //isNumero foi uma função criada para saber se o valor é número e se está entre 1 e 100
        // inLista é uma função para saber se o número digitado já foi incluído na ARRAY VALORES
        valores.push(Number(num.value))
        let item = document.createElement('option')   
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //para limpar o campo onde digita os números
    num.focus() // para focar no campo de números sempre que clica em 'adicionar'
    res.innerHTML = ''
}

function finalizar(){
    if (valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {
    res.innerHTML = ''
    let numOrdem = valores.sort()
    let maiorValor = valores[numOrdem.length - 1]
    let soma = 0
    for (let c = 0; c < valores.length; c++){
        soma += valores[c]
    }
    let media = soma/valores.length
    res.innerHTML += `<br> Ao todo temos ${valores.length} valores cadastrados </br>`
    res.innerHTML += `<br> O maior valor informado foi ${maiorValor} </br>`
    res.innerHTML += `<br> O menor valor informado foi ${valores[0]} </br>`
    res.innerHTML += `<br> A soma de todos os valores é  ${soma} </br>`
    res.innerHTML += `<br> A média dos valores é  ${media} </br>`
        }
}