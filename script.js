const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');
const searchItems = document.querySelector('.img-darken');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});



searchItems.forEach(searchItem => {
    searchItem.addEventListener('mouseover', () => {
        searchItem.childNodes[1].classList.add('img-darken');
    })

    searchItem.addEventListener('mouseout', () => {
        serachItem.childNodes[1].classList.remove('img-darken');
    })
})
