const barbie = document.querySelector('#barbie')
const btnatal = document.querySelector('#btnatal')
const btmosqueteiras = document.querySelector('#btmosqueteiras')
const btprincesas = document.querySelector('#btprincesas')
const btdiamante = document.querySelector('#btdiamante')

btnatal.addEventListener('click', natal)
btmosqueteiras.addEventListener('click',mosqueteira)
btprincesas.addEventListener('click', princesa)
btdiamante.addEventListener('click', diamante)

function natal(){
    barbie.src = 'img/BarbieCançãodeNatal.jpg'
}
function mosqueteira(){
    barbie.src = 'img/BarbieeasTrêsMosqueteiras.webp'
}
function princesa(){
    barbie.src = 'img/BarbieEscoladePrincesas.jpg'
}
function diamante(){
    barbie.src = 'img/BarbieeoCastelodeDiamantes.jpg'
}