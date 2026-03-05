const inputPeso = document.getElementById('weight');
const inputAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('imcForm');

function mostrarResultado(mensagem) {
    textoResultado.textContent = mensagem;
}

function calcularIMC() {
    const peso = parseFloat(inputPeso.value);
    const altura = parseFloat(inputAltura.value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        mostrarResultado('Por favor, insira valores válidos.');
        return;
    }

    const imc = peso / (altura * altura);
    const classificacao = classificarIMC(imc);

    mostrarResultado(`Seu IMC é ${imc.toFixed(2)} (${classificacao}).`);
}

function classificarIMC(valorIMC) {
    if (valorIMC < 18.5) return 'Abaixo do peso';
    if (valorIMC < 25) return 'Peso normal';
    if (valorIMC < 30) return 'Sobrepeso';
    return 'Obesidade';
}

function limparCampos() {
    formulario.reset();
    inputPeso.focus();
    mostrarResultado('Preencha os campos e clique em "Calcular".');
}