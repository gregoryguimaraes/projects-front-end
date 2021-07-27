function callbackScroll() {

    const menu = document.querySelector('.top-content');
    const divBackground = document.querySelector('.main-title');
    const rectDivBackground = divBackground.getBoundingClientRect();


    
    if(rectDivBackground.bottom < 387){
        menu.classList.add('ativo')
    }else {
        menu.classList.remove('ativo')
    }


    const divPorque = document.querySelector('.why-text');
    const rectDivPorque = divPorque.getBoundingClientRect();


    if(rectDivPorque.top < 550){
        const filhosDivPorque = document.querySelectorAll('.filhos-why-text');
        filhosDivPorque.forEach((item) => {
            item.classList.add('filhos-why-text-ativo')
        })
    }

}

window.addEventListener('scroll', callbackScroll);




function mouseOverRowBall() {

    const rowBall = document.querySelectorAll('.row-ball')

    function handleMouseOver(e){
        e.target.classList.add('zoom-row-ball');
    }

    function removeClass(e){
        e.target.classList.remove('zoom-row-ball')
    }
    
    rowBall.forEach((ball) => {
        ball.addEventListener('mouseover', handleMouseOver)
    })

    rowBall.forEach((ball) => {
        ball.addEventListener('mouseleave', removeClass)
    })
}

mouseOverRowBall();



