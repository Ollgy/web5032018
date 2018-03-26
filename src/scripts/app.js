// new Vue({
//     el:'#vue',
//     data:{
//         title:"With vue!!!"
//     }
// })


//import {ham} from './common/hamburger.js';
//import {flipper} from './common/flipper.js';
import {initMap} from './common/map.js';

const hamburger = require('./common/hamburger.js');
const flipper = require('./common/flipper.js');
const parallax = require('./common/parallax.js');
const water = require('./water/index-water.js');


//hamburger.overlay();
//flipper.flip();
//parallax.scrollParallax();
water.webgl();



