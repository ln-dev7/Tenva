const headerBurger = document.querySelector('.header-burger');
const headerContainerBurger = document.querySelector('.header-container');

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('burger-active');
    if(headerBurger.classList.contains('burger-active')){
        headerContainerBurger.classList.add('burger-active');
    }else{
        headerContainerBurger.classList.remove('burger-active');
    }
})