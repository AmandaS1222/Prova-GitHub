const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#botao')
const resultado = document.querySelector('#resultado')

botao.addEventListener('click', valor)

function valor(){
    p = Number (peso.value)
    a = Number (altura.value)

calculo = p/(a*a)

if(calculo < 18.5){
    final = 'Magreza'
}
else if(calculo >= 18.5 && calculo < 25){
    final = 'Peso Normal'
}
else if(calculo >= 25 && calculo >= 30){
    final = 'Acima do Peso'
}
else{
    final = 'Obesidade'
}

resultado.innerHTML = `Sr(a) ${n} o seu imc é ${calculo.toFixed(1)} e o seu resultado é ${final}.`

}