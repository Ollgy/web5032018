// new Vue({
//     el:'#vue',
//     data:{
//         title:"With vue!!!"
//     }
// })


//import {ham} from './common/hamburger.js';
//import {flipper} from './common/flipper.js';
import {initMap} from './common/map.js';

//const map = require('./common/map.js')
const hamburger = require('./common/hamburger.js');
const flipper = require('./common/flipper.js');
const parallax = require('./common/parallax.js');
const blognav = require('./common/blognav.js');
const preloader = require('./common/preloader.js');
const water = require('./water/index-water.js');
const slider = require('./common/slider.js');
const arrScrolling = require('./common/arrowdown.js');
const skills = require('./common/skills.js');
const form = require('./common/form.js');


if(document.querySelector('.header__hamburger')){
    hamburger.overlay();
}

if(document.querySelector('.person-flipper')){
    flipper.flip();
}

if(document.querySelector('.person__desc--bkg')){
    parallax.scrollParallax();
}

if(document.querySelector('.header__canvas')){
    water.webgl();
    preloader.load();
}

if(document.querySelector('.blognav')){
    blognav.blogScroll();
}

if(document.querySelector('.map')){
    //map.initMap();
}

if(document.querySelector('.slider__info')){
    slider.slide(4);
}

if(document.querySelector('.arrowdown')){   
    arrScrolling.nextSection();
}

if(document.querySelector('.skills')){
    skills.animateCircle();
}

if(document.querySelector('.form__connect')){
    form.submit();
}




