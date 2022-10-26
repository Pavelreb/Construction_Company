const listHead = document.querySelectorAll('.question-item');
const navButton = document.querySelector('.header-butoon-menu');
const menu = document.querySelector('.header-menu');
const site = document.querySelector('body');

listHead.forEach(function(i) {
    i.onclick = function(){
        i.classList.toggle('open-list');
    };
});

navButton.onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    menu.classList.toggle('open-menu');
    site.classList.toggle('no-scroll');
}

