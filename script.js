let botaoEl = document.querySelector('#botao-easteregg');
let pikachuEl = document.querySelector('#pikachu');
let pokebolaEl = document.querySelector('#pokebola');
let headerEl = document.querySelector('header');
let pikachuCry = new Audio('Sons/pikachucry.mp3');

function easterEgg() {
    pikachuEl.classList.toggle('desaparecido');
    pokebolaEl.classList.toggle('desaparecido');
    headerEl.classList.toggle('amarelo');
    pikachuCry.play();
}

botaoEl.addEventListener('click', easterEgg);

function pikachuChorando() {
    pikachuCry.play();
}

pikachuEl.addEventListener('click', pikachuChorando);