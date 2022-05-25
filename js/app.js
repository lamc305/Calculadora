let sumar =  () => {
    let operandoA = document.getElementById('operandoA');
    let operandoB = document.getElementById('operandoB');
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
        document.getElementById('resultado').innerHTML = `${resultado}`
    } else {
        document.getElementById('resultado').innerHTML = `El resultado de tu suma es: ${resultado}`
    }
}
let restar =  () => {
    let operandoA = document.getElementById('operandoA');
    let operandoB = document.getElementById('operandoB');
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
        document.getElementById('resultado').innerHTML = `${resultado}`
    } else {
        document.getElementById('resultado').innerHTML = `El resultado de tu resta es: ${resultado}`
    } 
}
let multiplicar =  () => {
    let operandoA = document.getElementById('operandoA');
    let operandoB = document.getElementById('operandoB');
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
        document.getElementById('resultado').innerHTML = `${resultado}`
    } else {
        document.getElementById('resultado').innerHTML = `El resultado de tu multiplicación es: ${resultado}`
    }
}
let dividir =  () => {
    let operandoA = document.getElementById('operandoA');
    let operandoB = document.getElementById('operandoB');
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
        document.getElementById('resultado').innerHTML = `${resultado}`
    } else {
        document.getElementById('resultado').innerHTML = `El resultado de tu división es: ${resultado}`
    }
}