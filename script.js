let frases = [
"Você deveria estar prestando atenção 👀",
"Mais 5 minutos não faz mal 😅",
"Talvez o professor não esteja olhando",
"Você chegou até aqui... continue"
]

let desculpas = [
"Meu mouse parou de funcionar",
"Meu cérebro travou",
"A internet caiu",
"Era pesquisa importante"
]

function frase(){
let aleatorio = Math.floor(Math.random() * frases.length)
document.getElementById("resultado").innerText = frases[aleatorio]
}

function desculpa(){
let aleatorio = Math.floor(Math.random() * desculpas.length)
document.getElementById("resultado").innerText = desculpas[aleatorio]
}

function cor(){
let cores = ["#ff6b6b","#6bc5ff","#6bff95","#ffd93d","#c56bff"]
let aleatorio = Math.floor(Math.random() * cores.length)
document.body.style.background = cores[aleatorio]
}

let pontos = 0

document.getElementById("clickBtn").addEventListener("click", function(){
pontos++
document.getElementById("pontos").innerText = pontos
})