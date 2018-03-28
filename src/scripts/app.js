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




