console.log("Aplicación calculadora");
function sumar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "Error: La operación no incluye números...!!!";
    document.getElementById("resultado").innerHTML = `Resultado de la Suma es: ${resultado}`;
}
function restar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    resultado = parseInt(operandoA.value) - parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "Error: La operación no incluye números...!!!";
    document.getElementById("resultado").innerHTML = `Resultado de la Resta es: ${resultado}`;
}
function multiplicar(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    resultado = parseInt(operandoA.value) * parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "Error: La operación no incluye números...!!!";
    document.getElementById("resultado").innerHTML = `Resultado de la Multiplicación es: ${resultado}`;
}
function dividir(){
    const forma = document.getElementById("forma");
    let operandoA = forma["operandoA"];
    let operandoB = forma["operandoB"];
    resultado = parseInt(operandoA.value) / parseInt(operandoB.value);
    if(isNaN(resultado))
        resultado = "Error: La operación no incluye números...!!!";
    document.getElementById("resultado").innerHTML = `Resultado de la División es: ${resultado}`;
}