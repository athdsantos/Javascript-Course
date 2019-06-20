function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let saudacoes = window.document.getElementById('saudacoes')
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()
    if (segundos < 10) {
        msg.innerHTML = `Agora são ${hora}h${minutos}m0${segundos}s\n`
    } else {
        msg.innerHTML = `Agora são ${hora}h${minutos}m${segundos}s\n`
    }

    setTimeout(carregar, 1000)
    if (hora >= 0 && hora < 12) {
        saudacoes.innerHTML = `Bom dia!`
        img.src = 'imagens/manha.png'
        document.body.style.background = '#e5c98a'
    } else if (hora >= 12 && hora < 18) {
        saudacoes.innerHTML = `Boa tarde!`
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#dca360'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.background = '#033576'
        saudacoes.innerHTML = `Boa noite!`
    }
}

carregar()