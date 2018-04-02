var arrowDown = {
    nextSection: function(){
        
    var arrow = document.querySelector('.arrowdown');
    var section = document.querySelector('.section');
    var sectionWork = document.querySelector('.section--work');

    var windowHeight;
    var duration = 300;

     window.onload = function(){
         windowHeight = window.innerHeight;
         console.log('окно'+windowHeight)
     }();

    arrow.addEventListener('click',function(e){

        e.preventDefault();
        
        //window.scrollTo(0,windowHeight);
        animateScroll(duration,windowHeight);
        
    })

    function animateScroll(duration, height){

        var numOfStep = 100;
        var stepY = height/numOfStep;
        var stepTime = duration/numOfStep;

        var scrollInterval = setInterval(function(){
            if ( window.pageYOffset < height) {
                    window.scrollBy( 0, stepY );        
            } else clearInterval(scrollInterval);        
        }, stepTime);         
 
        }
    }
 }
 
 module.exports = arrowDown;