const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
const portfolioItems = document.querySelector('.section');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});



portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })

    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})