'use strict';
import dropdown from "../modules/dropdown";
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
    slider({
        wrapperSlider: '.womens .slider-wrapper',
        carouselSlider: '.womens .slider-inner',
        cardSelector: '.womens .slide',
        arrowBtnSelector: '.womens .btn'
    })
    slider({
        wrapperSlider: '.kids .slider-wrapper',
        carouselSlider: '.kids .slider-inner',
        cardSelector: '.kids .slide',
        arrowBtnSelector: '.kids .btn'
    })
    dropdown({
        dropdownSelector: '.dropdown',
        selectSelector: '.select',
        caretSelector: '.caret',
        menuSelector: '.dropdown_menu'
    })
})