const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const numero1 = document.querySelector('#Calculo1')
const numero2 = document.querySelector('#Calculo2')
const btn = document.querySelector('#btnCalcular')
const resultado = document.querySelector("#pResultado")

form.addEventListener('submit',sumarInputValues)

function sumarInputValues(event){
    event.preventDefault()
    let suma =  Number(numero1.value) +  Number(numero2.value)
    resultado.innerText = "Tu Resultado es " + suma;
}