
const btnP1 = document.querySelector('#InputP1');
const btnP2 = document.querySelector('#InputP2');
const btnP3 = document.querySelector('#InputP3');

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

function soma (x,y){
    return x + y
}

const banana = soma()