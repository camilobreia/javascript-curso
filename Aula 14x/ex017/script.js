function contar(){
    var inic = document.getElementById('inic')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    var inicN = Number(inic.value)
    var fimN = Number(fim.value)
    var passoN = Number(passo.value)
    
    if (inic.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        alert('ERRO - DADOS INCOMPLETOS')
        res.innerHTML = '<p>Impossível contar!!!</p>'
    } 
    if (passoN <= 0){
        alert('Impossível contar - Considerando PASSO = 1')
        passoN = 1
    }
    if(fimN > inicN){  //CONTAGEM CRESCENTE
        res.innerHTML = 'Contando: '         
        for(var c = inicN; c <= fimN; c += passoN){
        res.innerHTML += ` ${c} \u{1F449} `        
    }} else {   // CONTATEM REGRESSIVA
        res.innerHTML = 'Contando: ' 
        for(var c = inicN; c >= fimN; c -= passoN){
            res.innerHTML += ` ${c} \u{1F449} ` 
    }
} res.innerHTML += ` \u{1F3C1} `
}
function limpar(){
    inic.value = '' 
    fim.value = ''
    passo.value = ''
    res.innerHTML = 'Preparando contagem...'
}
