function criarBotao(){

    // Criar elemento botão
    const btnVoltar = document.createElement('button')

    // Definir estilo do botão
    btnVoltar.innerText = 'Voltar';
    btnVoltar.style.marginTop = '20px'

    // Lógica do click
    btnVoltar.addEventListener('click', function(){
        window.location.href = '../index.html'
    });

    // Adicionar o botão final do body
    document.body.appendChild(btnVoltar)
};

window.onload = criarBotao();