var hamburger = {
    overlay: function() {
       
        const hamburger = document.querySelector('.header__hamburger'); 
        const overlay = document.querySelector('.header__overlay'); 
        const overlay_left = document.querySelector('.header__overlay-left');       
        const overlay_right = document.querySelector('.header__overlay-right');
        const nav = document.querySelector('.nav--overlay');
        const nav_items = Array.prototype.slice.call(document.querySelectorAll('.nav__item--overlay'));
        console.log(nav_items.length);

        var isOpen = false;

        hamburger.addEventListener('click', function (e) {           

            e.preventDefault();

            if(!isOpen){

                hamburger.classList.add('header__hamburger--open');
              
                overlay.style.zIndex = '20';
                overlay_left.style.width = '50%';
                overlay_right.style.width = '50%';

                nav.style.display = 'block';                 
                
                
                for(var i=0;i<nav_items.length;i++) {
                    setTimeout(function (elem){
                        elem.style.opacity = '1';                            
                    }, 300*(i+1), nav_items[i]);                                          
                } //захардкодила время transitionа
                 

                isOpen=true;

            } else if(isOpen) {

                if(hamburger.classList.contains('header__hamburger--open')){
                    hamburger.classList.remove('header__hamburger--open');
                }
                
                overlay_left.style.width = '0';
                overlay_right.style.width = '0';

                nav.style.display = 'none';

                for(var i=0;i<nav_items.length;i++) {                   
                    nav_items[i].style.opacity = '0';                                            
                }
                
                setTimeout(function(){
                    overlay.style.zIndex = '0';//захардкодила время transitionа
                }, 500);                           

                isOpen=false;
            }                  

        })
    }      

}


module.exports = hamburger;
//export {hamburger as ham};