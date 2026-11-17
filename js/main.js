const listHead = document.querySelectorAll('.question-item');
const navButton = document.querySelector('.header-butoon-menu');
const menu = document.querySelector('.header-menu');
const site = document.querySelector('body');
const menuLinks = document.querySelectorAll('.header-menu-list a');

listHead.forEach(function(i) {
    i.onclick = function(){
        i.classList.toggle('open-list');
    };
});

navButton.onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    menu.classList.toggle('open-menu');
    site.classList.toggle('no-scroll');
};

// Закрываем меню при переходе по пункту навигации
menuLinks.forEach(function(link) {
    link.onclick = function(){
        document.querySelector('.menu-icon').classList.remove('menu-icon-active');
        menu.classList.remove('open-menu');
        site.classList.remove('no-scroll');
    };
});

// Актуальный год в подвале и меню
document.querySelectorAll('.js-year').forEach(function(el) {
    el.textContent = new Date().getFullYear();
});
