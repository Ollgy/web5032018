var slider = {
   slide: function(numItem){
    var sliderInfo = document.querySelector('.slider__info-list');
    var sliderInfoItem = document.querySelectorAll('.slider__info-item');

    var sliderImage = document.querySelector('.slider__image-list');
    var sliderImageItem = document.querySelectorAll('.slider__image-item');

    var arrowDown = document.querySelector('.slider__button-arrow--down');
    var arrowUp = document.querySelector('.slider__button-arrow--up');

    var btnDownList = document.querySelector('.slider__button-list--down');
    var btnUpList = document.querySelector('.slider__button-list--up');
    var btnItem = document.querySelectorAll('.slider__button-item');

let maxSlide = numItem-1;
let activeClassBtn = 'slider__button-item--active'
let activeClassImg = 'slider__image-item--active'
let activeClassInfo = 'slider__info-item--active'
let sliderLength = Math.min(btnItem.length, sliderImageItem.length, sliderInfoItem.length);//число слайдов 

var curItem=0;
var curItemBtnUp = maxSlide;
var curItemBtnDown = 1;

btnDownList.children[curItemBtnDown].classList.add(activeClassBtn);

btnUpList.children[curItemBtnUp].classList.add(activeClassBtn);//переводим лист в самое верхнее положение, чтобы опускать вниз


arrowDown.addEventListener('click', function (e) {

    e.preventDefault();
    
    slideUp(sliderImageItem, curItem, activeClassImg,sliderLength);
    curItem = slideUp(sliderInfoItem, curItem, activeClassInfo,sliderLength); 
    curItemBtnDown = slideUp(btnDownList.children, curItemBtnDown, activeClassBtn,sliderLength); 
    curItemBtnUp = slideUp(btnUpList.children, curItemBtnUp, activeClassBtn,sliderLength);  
    
});

arrowUp.addEventListener('click', function (e) {

    e.preventDefault();

    slideDown(sliderImageItem, curItem, activeClassImg,sliderLength);
    curItem = slideDown(sliderInfoItem, curItem, activeClassInfo,sliderLength); 
    curItemBtnDown = slideDown(btnDownList.children, curItemBtnDown, activeClassBtn,sliderLength); 
    curItemBtnUp = slideDown(btnUpList.children, curItemBtnUp, activeClassBtn,sliderLength);

});
   

        var slideUp = function (list, item, className,arrlength){

            if(item < maxSlide){
                item+=1;
            } else item=0; 

            checkedClass(list, item, className,arrlength);
            return item;
      
        }


        var slideDown = function (list, item, className,arrlength){           
            
            if(item > 0){
                item-=1;
            } else item=maxSlide;

            checkedClass(list, item, className,arrlength);
            return item;
        }


        var checkedClass = function(list, item, className,arrlength){
            for(var i=0; i < arrlength; i++){
                if(list[i].classList.contains(className)){
                    list[i].classList.remove(className);
                }            
            }
            list[item].classList.add(className);
        }

    }
}

module.exports = slider;