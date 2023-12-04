
const navLinkEls = document.querySelectorAll('.nav__link');

navLinkEls.forEach(navLinkEl=>()=>{
    document.addEventListener('click', ()=>{
        document.querySelector('.active')?.classList.remove('active');
        navLinkEl.classList.add('active');
    });
});



  