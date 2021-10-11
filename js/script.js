
"use strict";


document.addEventListener('DOMContentLoaded', () => {

    //Burger


    function burgerClick() {
        const burger = document.querySelector('.header__burger');
        const body = document.querySelector('.body');
        const menu = document.querySelector('.bottom-header__nav');
        const btn = document.querySelector('.bottom-header__info');

        const menuMobile = document.createElement('div');
        menuMobile.classList.add('menu-mobile');

        if (burger) {
            burger.addEventListener('click', () => {
                burger.classList.toggle('_active');
                body.classList.toggle('_active');
                menuMobile.classList.toggle('_active');
            });

            if (document.documentElement.clientWidth <= 768) {
                burger.insertAdjacentElement('afterend', menuMobile);
                menuMobile.insertAdjacentElement('beforeend', menu);
                menuMobile.insertAdjacentElement('beforeend', btn);
            }
        }
    }

    burgerClick();

    //==============================================================









});