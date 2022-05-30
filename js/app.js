let btnSumar = document.getElementById('btn-sumar');
let btnRestar = document.getElementById('btn-restar');
let btnMultiplicar = document.getElementById('btn-multiplicar');
let btnDividir = document.getElementById('btn-dividir');

let operandoA = document.getElementById('operandoA');
let operandoB = document.getElementById('operandoB');


let sumar = () => {
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
        document.getElementById('resultado').innerHTML = `${resultado}`
    } else {
        document.getElementById('resultado').innerHTML = `El resultado de tu suma es: ${resultado}`
    }
}

let restar = () => {
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
        document.getElementById('resultado').innerHTML = `${resultado}`
    } else {
        document.getElementById('resultado').innerHTML = `El resultado de tu resta es: ${resultado}`
    } 
}

let multiplicar = () => {
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
        document.getElementById('resultado').innerHTML = `${resultado}`
    } else {
        document.getElementById('resultado').innerHTML = `El resultado de tu multiplicación es: ${resultado}`
    }
}

let dividir = () => {
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
        document.getElementById('resultado').innerHTML = `${resultado}`
    } else {
        document.getElementById('resultado').innerHTML = `El resultado de tu división es: ${resultado}`
    }
}

btnSumar.addEventListener('click', sumar);
btnRestar.addEventListener('click', restar);
btnMultiplicar.addEventListener('click', multiplicar);
btnDividir.addEventListener('click', dividir);