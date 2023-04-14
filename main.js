function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 13
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 6 && hora < 12) {
        img.src = './assets/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = './assets/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = './assets/fotonoite.png'
        document.body.style.background = '#515154'
    }
}