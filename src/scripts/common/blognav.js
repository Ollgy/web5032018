var blognav = {
    blogScroll: function(){

    var blog = function(){
        const blog_items = Array.prototype.slice.call(document.querySelectorAll('.blogcontent__item'));
        const blognav_items = Array.prototype.slice.call(document.querySelectorAll('.blognav__item'));
        const blognav = document.querySelector('.blognav');
        const blogcontent = document.querySelector('.blogcontent');
        
        var itemsNum = Math.min(blog_items.length,blognav_items.length);
        
       
        var offset = function(el) {
            var rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
        } 
        
        var blogcontentY = offset(blogcontent).top+parseInt(getComputedStyle(blogcontent).height);
       //console.log(blogcontentY + 'content');
        var blognavY=offset(blognav).top+parseInt(getComputedStyle(blognav).height);
        //console.log(blognavY+ 'nav');
        
        var coords = [];
        for(var i = 0; i < itemsNum; i++){
            coords[i] = offset(blog_items[i]).top-window.innerHeight;           
            //console.log (coords[i]);           
        }

        return {
            itemActive: function(scrollTop){
                for (var i = itemsNum; i >= 0; i--){                   
                    if(coords[i]<scrollTop){
                        for (var j = itemsNum; j >= 0; j--){
                            if(blognav_items[j].classList.contains('blognav__item--active')){
                                blognav_items[j].classList.remove('blognav__item--active');
                            }
                        }
                        if(!blognav_items[i].classList.contains('blognav__item--active')){
                            blognav_items[i].classList.add('blognav__item--active');
                        }
                                               
                        //console.log(i); 
                        break;      
                    }
                }
            },

            moveNav:function(scrollTop){
                
                var moveTo = scrollTop-window.innerHeight;
               
                blognavY = offset(blognav).top+parseInt(getComputedStyle(blognav).height)
                //console.log(blognavY);
                
                if(moveTo>0 && blognavY<=blogcontentY){
                    if(getComputedStyle(blognav).position === "relative"){
                        blognav.style.top = moveTo +'px';
                        
                    }
                    
                }


            }
        
        }
    }();
        
        
        window.onscroll = function() {
            var wScroll = window.pageYOffset;
            console.log(wScroll);
                blog.itemActive(wScroll);
                blog.moveNav(wScroll);           
        }
    

        
    }          
    
}

module.exports = blognav;