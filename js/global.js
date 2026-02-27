const btnP1 = document.querySelector('#inputP1');
const btnP2 = document.querySelector('#inputP2');
const btnP3 = document.querySelector('#inputP3');

// Método addEventListener com uma função anônima


btnP1.addEventListener('click', function(){
    window.location.href='./pages/projeto01.html'
});

btnP2.addEventListener('click', function(){
    window.location.href='./pages/projeto02.html'
});

btnP3.addEventListener('click', function(){
    window.location.href='./pages/projeto03.html'
});

function criarBotao(){

    // Criar elemento botão
    const btnVoltar = document.createElement('button')

    // Definir estilo do botão
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px'


    function navegar(){
            window.location.href = '../index.html'
        };

    btnVoltar.addEventListener("click", navegar)

    // Adicionar o botão final do body
    document.body.appendChild(btnVoltar)
};

window.onload = criarBotao;

