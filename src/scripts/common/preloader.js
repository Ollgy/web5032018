var preloader = {
    load: function() {
       
        const percentSvg = document.getElementById('preloader_percent'); 
       //console.log(percentSvg);
        const preloader = document.querySelector('.preloader_bg'); 
        //console.log(preloader);

        window.onload = function(){
            preloader.style.transition = '1s';
            preloader.style.opacity = '0';
            setTimeout(function(){
                preloader.style.display = 'none';
            }, 1500);
        }

        // var  onImgLoad = function(className, percent){
        //     const promise = new Promise(function(resolve){
        //         const img = document.querySelector(className);
        //         console.log(img);
               
        //         img.addEventListener('load',function(){
        //             console.log("onload " +className);
        //             percentSvg.textContent = percent;
        //             resolve();
        //         })               
        //     })
           
        //     return promise;
        // }

        // onImgLoad('.person__photo','40').
        //     then(function(){
        //         console.log("return promise");
        //         preloader.style.display = 'none';
        //         return onLoadImg('.header__canvas','70')
        //     }).
        //     then(function(){
        //         return onLoadImg('.person__photo','100')
        //     }).
        //     then(function(){
        //         preloader.style.display = 'none';
        //     })
    } 

}

module.exports = preloader;