//  Lógica automática para o MENU (index)
// Buscamos todos os inputs do tipo botão dentro da classe .project__button-group

const botoesProjeto = document.querySelectorAll('.project__button-group input[type="button"]');
console.log(botoesProjeto);

if (botoesProjeto.length > 0 ){
    botoesProjeto.forEach((botao, index) => {
          botao.addEventListener('click', () => {
            //  O index começa em 0, então somamos 1 para bater com "projeto01", "projeto02"
            const numeroProjeto = (index + 1).toString().padStart(2, '0')
            window.location.href = `./pages/projeto${numeroProjeto}.html`;

          });
    });
}

// Lógica das classes dos botões
const criarBotaoVoltar = () => {
    const btnVoltar = document.createElement('button');

    // Herdará o estilo de button do CSS
    btnVoltar.className = 'btn-navegacao';

    btnVoltar.addEventListener('click', () => {
        window.location.href = '../index.html';
    });

    document.body.appendChild(btnVoltar)
}

// Se não houver botões de projeto na página, assume-se que é uma página interna
if (botoesProjeto.length === 0) {
    // Adicionando um evento de escuta no navegador (objeto window).
    // Após o carregamento da página a função será invocada()
    window.addEventListener('load', () =>{
        criarBotaoVoltar();
    });
}
