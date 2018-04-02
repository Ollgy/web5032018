var flipper = {

    flip: function() {
       
        const btn_autoriz = document.querySelector('.autorization__link'); 
        console.log(btn_autoriz);
        const flipper = document.querySelector('.person-flipper'); 
        console.log(flipper);
        const background = document.querySelector('.person');
        console.log(background);
        const onmainBtn = document.getElementById('mainbtn');

        var isAutorization = false;

        btn_autoriz.addEventListener('click', function (e) {           

            e.preventDefault();
            e.stopPropagation();

            if(!isAutorization){              
                flipper.style.transform = 'rotateY(180deg)';        
                isAutorization=true;
            } 
        })

        onmainBtn.addEventListener('click', function (e) {           
            
            e.preventDefault();
            
            if(isAutorization){
                          
                flipper.style.transform = 'rotateY(360deg)';        
                isAutorization=false;
                console.log('background');
            
            } 
        })

        flipper.addEventListener('click', function (e) {           
            
            e.stopPropagation();
            
        })
    }       

}

module.exports = flipper;
