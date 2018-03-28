var scrollParallax = {
    scrollParallax:function(){
        var parallax = function(){
            const bg = document.querySelector('.header__background'); 
            const img = document.querySelector('.portfolio__header'); 
            const content = document.querySelector('.person__desc--bkg');

            return{
                move:function(block, windowScroll, strafeAmount){
                    var strafe = windowScroll/-strafeAmount+'%';
                    var transformString = 'translate3d(0,'+strafe+', 0';

                    var style = block.style;
                        style.transform = transformString;
                        style.webkitTransform = transformString;
                },

                init: function(wScroll){

                    if(bg){
                        this.move(bg,wScroll,60);
                    }
                    if(img){
                        this.move(img,wScroll,30);
                    }   
                    if(content){
                        this.move(content,wScroll,15);
                    }                     
                   
                }
            }
        }();

        window.onscroll  = function(){
            var wScroll = window.pageYOffset;
            console.log(wScroll);
                parallax.init(wScroll);
        }
    }
}

module.exports = scrollParallax;