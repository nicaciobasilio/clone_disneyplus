document.addEventListener('DOMContentLoaded', function() {
    const BUTTONS = document.querySelectorAll('[data-tab-button]');
    const QUESTIONS = document.querySelectorAll('[data-faq-question]');

    const HEROSECTION = document.querySelector('.hero');
    const ALTURAHERO = HEROSECTION.clientHeight;

    window.addEventListener('scroll', function(){
        const POSICAOATUAL = window.scrollY;

        if (POSICAOATUAL < ALTURAHERO) {
            ocultaElementosDoHeader();
        } else {
            exibeElementosDoHeader();
        }
    })

    // Seção de atrações, programação das abas
    for (let i = 0; i < BUTTONS.length; i++) {
        BUTTONS[i].addEventListener('click', function(botao) {
            const ABAALVO = botao.target.dataset.tabButton;
            const ABA = document.querySelector(`[data-tab-id=${ABAALVO}]`);
            escondeTodasAbas();
            removeBotaoAtivo();
            ABA.classList.add('shows__list--is--active');
            botao.target.classList.add('shows__tabs__button--is--active')
        })
    }

    // Seção FAQ, Accordion
    for (let i = 0; i < QUESTIONS.length; i++) {
        QUESTIONS[i].addEventListener('click', abreOuFechaResposta);
        
    }
})

function ocultaElementosDoHeader() {
    const HEADER = document.querySelector('header');
    HEADER.classList.add('header--is--hidden');
}

function exibeElementosDoHeader() {
    const HEADER = document.querySelector('header');
    HEADER.classList.remove('header--is--hidden');
}

function abreOuFechaResposta(elemento) {
    const CLASSE ='faq__questions__item--is-open';
    const ELEMENTOPAI = elemento.target.parentNode;

    ELEMENTOPAI.classList.toggle(CLASSE);
}

function removeBotaoAtivo() {
    const BUTTONS = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < BUTTONS.length; i++) {
        BUTTONS[i].classList.remove('shows__tabs__button--is--active')
    }
}

function escondeTodasAbas() {
    const TABCONTAINER = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < TABCONTAINER.length; i++){
        TABCONTAINER[i].classList.remove('shows__list--is--active')
    }

}