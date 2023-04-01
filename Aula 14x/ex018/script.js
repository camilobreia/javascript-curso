function calcular(){
    var num1 = document.getElementById('num1')
    var res = document.getElementById('seltab')
    if(num1.value.length == 0){
        alert('Por favor digite um número')
    } else {
        var numN = Number(num1.value)
        res.innerHTML = ''
        for(var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            var resN = numN * c
            item.text += `${numN} x ${c} = ${resN}`
            res.appendChild(item)
            
        }
        
    }    
}