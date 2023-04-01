function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ``
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //BEBE   
                img.setAttribute('src', 'bebehomem.png')     
            } else if (idade < 25){
                //JOVEM
                img.setAttribute('src', 'jovemhomem.png')
            } else if (idade <55){
                //ADULTO
                img.setAttribute('src', 'adultohomem.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'idosohomem.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                //BEBE   
                img.setAttribute('src', 'bebemulher.png')     
            } else if (idade < 25){
                //JOVEM
                img.setAttribute('src', 'jovemmulher.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'adultomulher.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'idosomulher.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}