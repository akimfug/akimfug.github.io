'use strict'

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    burger = document.querySelector('.burger');

    function toggleMenu() {
        burger.classList.toggle('burger_active');
        menu.classList.toggle('menu_active');
    }

    burger.addEventListener('click', () => {
        toggleMenu()
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            toggleMenu()
        })
    });
});