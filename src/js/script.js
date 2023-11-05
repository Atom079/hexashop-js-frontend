'use strict';
import header from "../modules/header";
import loader from "../modules/loader";
import navbar from "../modules/navbar";
window.addEventListener('DOMContentLoaded', ()=>{
    loader('.loader')
    navbar({
        navbarSelector: '.navigation',
        burgerSelector: ".burger",
        navbarItemSelector: '.nav_item',
    })
    header('.header', '.navigation')
})