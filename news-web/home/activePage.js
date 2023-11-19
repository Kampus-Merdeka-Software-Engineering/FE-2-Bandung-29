const navLinkEls = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

forEach(link => {
    if(link.href.includes('${activePage')){
        link.classList.add('active');
    }
})