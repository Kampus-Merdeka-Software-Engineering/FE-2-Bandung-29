
const windowPathname = window.location.pathname;
const navLinkEls = document.querySelectorAll('nav ul li a').
forEach(link => {
    if(link.href.includes('${activePage}')){
        link.classList.add('active');
    }
})