function callbackScroll() {
    const menu = document.querySelector('.top-content');
    const divBackground = document.querySelector('.main-title');
    const rectDivBackground = divBackground.getBoundingClientRect();
    console.log(rectDivBackground.bottom);

    if(rectDivBackground.bottom < 387){
        menu.classList.add('ativo')
    }else {
        menu.classList.remove('ativo')
    }
}

window.addEventListener('scroll', callbackScroll);