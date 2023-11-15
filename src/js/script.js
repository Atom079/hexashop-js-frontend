'use strict';
import header from "../modules/header";
import loader from "../modules/loader";
import navbar from "../modules/navbar";
import slider from "../modules/slider";
window.addEventListener('DOMContentLoaded', ()=>{
    loader('.loader')
    navbar({
        navbarSelector: '.navigation',
        burgerSelector: ".burger",
        navbarItemSelector: '.nav_item',
    })
    header('.header', '.navigation')
    slider({
        wrapperSlider: '.mens .slider-wrapper',
        carouselSlider: '.mens .slider-inner',
        cardSelector: '.mens .slide',
        arrowBtnSelector: '.mens .btn'
    })
})