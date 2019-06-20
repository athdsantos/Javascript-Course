function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        res.innerHTML = `[ERRO] O ano digitado não pode ser inserido, tente novamente!`
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebeH.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemH.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoH.png')
            } else {
                img.setAttribute('src', 'imagens/vovoH.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/bebeM.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'imagens/jovemM.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/adultoM.png')
            } else {
                img.setAttribute('src', 'imagens/vovoM.png')
            }
        }
        res.innerHTML = `Gênero ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}