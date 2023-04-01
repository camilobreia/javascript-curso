function carregar(){
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} hora(s) e ${min} minuto(s)`  
    if (hora >= 0 && hora < 12){
        // BOM DIA
        imagem.src = 'fotomanha.png'
        document.body.style.background = '#d2dfe5'        
    } else if (hora >= 12 && hora < 18){
        // BOA TARDE
        imagem.src = 'fototarde.png'
        document.body.style.background = '#f6b253'
    } else {
        // BOA NOITE
        imagem.src = 'fotonoite.png'
        document.body.style.background = '#3b2c47'
    }
}