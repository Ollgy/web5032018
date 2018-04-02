var preloader = {
    load: function() {
       
        const percentSvg = document.getElementById('preloader_percent'); 
       //console.log(percentSvg);
        const preloader = document.querySelector('.preloader_bg'); 
        //console.log(preloader);
        var percent = 0;
        var time = 2000;//время загрузки

        var intervalPercent = setInterval(function(){
            
            if(percent<100){
                percent+=1;
                console.log(percent);
            } else if (percent=100){
                percent=0;
            }           
            percentSvg.textContent = percent+'';
        },time/100);


        window.onload = function(){
            clearInterval(intervalPercent);
            percentSvg.textContent = '100';
            preloader.style.transition = '1s';
            preloader.style.opacity = '0';
            setTimeout(function(){
                preloader.style.display = 'none';
            }, 1500);
        }

    } 

}

module.exports = preloader;