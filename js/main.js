//Nav
let MobileButton = document.querySelector('.nav-hamburger');
let navContent = document.querySelector('.nav-content');
MobileButton.addEventListener('click', ()=>{
    MobileButton.classList.toggle('close');
    navContent.classList.toggle('active');
})