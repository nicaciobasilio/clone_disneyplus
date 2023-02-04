document.addEventListener('DOMContentLoaded', function() {
    const BUTTONS = document.querySelectorAll('[data-tab-button]')

    
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
})

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