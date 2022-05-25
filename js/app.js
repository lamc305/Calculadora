let sumar =  () => {
    let operandoA = document.getElementById('operandoA');
    let operandoB = document.getElementById('operandoB');
    let resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
}
let restar =  () => {
    let operandoA = document.getElementById('operandoA');
    let operandoB = document.getElementById('operandoB');
    let resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
}
let multiplicar =  () => {
    let operandoA = document.getElementById('operandoA');
    let operandoB = document.getElementById('operandoB');
    let resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
}
let dividir =  () => {
    let operandoA = document.getElementById('operandoA');
    let operandoB = document.getElementById('operandoB');
    let resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if( isNaN(resultado)){
        resultado = "La operación no incluye números"
    }
    document.getElementById('resultado').innerHTML = `Resultado: ${resultado}`
}