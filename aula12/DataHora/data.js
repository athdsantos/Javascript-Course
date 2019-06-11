/*Página de data e hora
Praticando o básico do DOM
*/

let buttCalendario = document.querySelector('img#imagemCalendario')
let buttHoras = document.querySelector('img#imagemHoras')
let buttSistema = document.querySelector('img#imagemSistema')

buttCalendario.addEventListener('click', mostrarCalendario)
buttHoras.addEventListener('click', mostrarHoras)
buttSistema.addEventListener('click', mostrarHoraSistema)

let data = new Date()

let diaSemana = data.getDay() //dia da semana
let diaMes = data.getDate() //dia do mes
let mes = data.getMonth() //mes
let ano = data.getFullYear() //ano
let hora = data.getHours() //horas
let minutos = data.getMinutes() //minutos
let segundos = data.getSeconds() //segundos
let miliSegundos = data.getMilliseconds() //milisegundos

switch (diaSemana) {
    case 0:
        diaSemana = 'Domingo'
        break;
    case 1:
        diaSemana = 'Segunda'
        break;
    case 2:
        diaSemana = 'Terça'
        break;
    case 3:
        diaSemana = 'Quarta'
        break;
    case 4:
        diaSemana = 'Quinta'
        break;
    case 5:
        diaSemana = 'Sexta'
        break;
    case 6:
        diaSemana = 'Sábado'
        break;


}

switch (mes) {
    case 0:
        mes = 'Janeiro'
        break;
    case 1:
        mes = 'Fevereiro'
        break;
    case 2:
        mes = 'Março'
        break;
    case 3:
        mes = 'Abril'
        break;
    case 4:
        mes = 'Maio'
        break;
    case 5:
        mes = 'Junho'
        break;
    case 6:
        mes = 'Julho'
        break;
    case 7:
        mes = 'Agosto'
        break;
    case 8:
        mes = 'Setembro'
        break;
    case 10:
        mes = 'Novemebro'
        break;
    case 11:
        mes = 'Dezembro'
        break;
    default:
        '[ERRO] Valor inválido'
        break;
}

let resultCalendario = document.querySelector('div#resultCalendario')
let resultHoras = document.querySelector('div#resultHoras')
let resultSistema = document.querySelector('div#resultSistema')


function mostrarCalendario() {
    resultCalendario.innerHTML = `${diaSemana}, ${diaMes} de ${mes} de ${ano}`
}

function mostrarHoras() {
    resultHoras.innerHTML = `${hora}h ${minutos}m ${segundos}s ${miliSegundos}ms`
}

function mostrarHoraSistema() {
    resultSistema.innerHTML = `${diaSemana}, ${diaMes} de ${mes} de ${ano} Atualmente são ${hora}h ${minutos}m ${segundos}s ${miliSegundos}ms`
}