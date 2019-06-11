let butt = document.querySelector('input#calcular')
butt.addEventListener('click', calcular)
let aprovado = 'Aprovado'
let recuperacao = 'Recuperação'
let reprovado = 'Reprovado'

function calcular() {
    let nota1 = document.querySelector('input#nota1').value
    let nota2 = document.querySelector('input#nota2').value
    let result = document.querySelector('section#secResultado')
    let soma = parseFloat(nota1) + parseFloat(nota2)
    let media = parseFloat(soma) / parseFloat(2) //media

    result.innerHTML = `<p>Sua nota final é ${soma}</p>`

    if (media >= 14) {
        result.innerHTML += `<p>Média final: ${media}<br>Status: ${aprovado}</p>`
    } else if (media >= 10) {
        result.innerHTML += `<p>Média final: ${media}<br>Status: ${recuperacao}</p>`
    } else if (media < 10) {
        result.innerHTML += `<p>Média final: ${media}<br>Status: ${reprovado}</p>`
    } else {
        result.innerHTML += `<p>[ERRO!!]Digite um valor válido!</p>`
    }

    result.innerHTML += `<p>Estudar nunca é demais!</p>`
}


//20 pontos total
//acima de 14, aprovado
//acima de 10 recuperação
//abaixo de 10 reprovado