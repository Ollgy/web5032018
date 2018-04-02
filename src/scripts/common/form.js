var form = {
    submit: function(){
        
        const formmodal_box = document.createElement('div');
        formmodal_box.classList.add('formmodal__bkg');
        const templateModal = document.querySelector('#formTemplate');        
        formmodal_box.innerHTML = templateModal.innerHTML;
       
        var dropdown = function(input,text){
            input.siblings('.dropdown').find('span').text(`Вы не ввели ${text}`) ;
            input.siblings('.dropdown').css({'left':'100px','opacity':'1'});
            input.css({'border':'3px solid #e44845'});

            if($('form__block-icon').length!=null){
                input.siblings('.form__block-icon').css({'border-right':'3px solid #e44845'});
                input.siblings('.form__block-icon').find('.form__icon').css({'fill':'#e44845'});
            }
        }

        var dropup = function(input){
            input.siblings('.dropdown').find('span').text('Вы не ввели ') ;
            input.siblings('.dropdown').css({'left':'-1000px','opacity':'0'});
            input.css({'border':'3px solid transparent'});
            
            if($('form__block-icon').length!=null){
                input.siblings('.form__block-icon').css({'border-right':'3px solid transparent'});
                input.siblings('.form__block-icon').find('.form__icon').css({'fill':'#aab1a9'});
            }
        }

        var correctfield = function(input){
            
            input.css({'border':'3px solid #4e8839'});
            
            if($('form__block-icon').length!=null){
                input.siblings('.form__block-icon').css({'border-right':'3px solid #4e8839'});
                input.siblings('.form__block-icon').find('.form__icon').css({'fill':'#4e8839'});
            }
        }

        $('.form__connect').on('submit',submitForm);

        $('.form__input').on('focusin',focusForm);
        
        function submitForm(e){
            console.log('Событие submit');
            e.preventDefault();//отменяем выпонение php по умолчанию нажатия на submit

            var isEmpty = false;

            $.each($('.form__input'), function(i){
                var $id = $(this).attr('id');
                var text='';

                console.log($id);

                switch ($id) { 
                    case 'name': 
                        text="имя";
                        console.log('switch');
                        break;
                    case 'email': 
                        text="почту";
                        break;
                    case 'login': 
                        text="логин";
                        break;
                    case 'password': 
                        text="пароль";
                        break;						
                };

               

                if($(this).val() == ''){

                    var delay = (i+1)*500;
                    var timeOnScreen = 2000;
                    console.log(delay);                     
                    setTimeout(dropdown, delay, $(this), text);
                    setTimeout(dropup,(timeOnScreen+delay), $(this));
                    if(!isEmpty) isEmpty = true;
                } else {
                    correctfield($(this));
                }
            }) 
            
            if(isEmpty) return;           
        
            var form = $(e.target);
            var data = form.serialize(), //все данные записываются в одну строку
            url = form.attr('action'),
            method = form.attr('method');

            $('body').append(formmodal_box);
            $('.formmodal__msg').textContent += 'отправлено';

            $('.formmodal__btn').on('click', function () {        
                formmodal_box.remove();
                console.log("на кнопку");        
            });            
        
            //console.log(data);
        
        //     var request =  $.ajax({ //асинхронный запрос
        //         type:method,
        //         url:url,
        //         data:data,
        //         dataType:'JSON'
        //     });                
        
        //     request.done(function(msg){
        //         var mes = msg.mes;
        //         var status = msg.status;
        
        //         if(status==='OK'){
        //             $('body').append(formmodal_box);
        //             $('.formmodal__msg').textContent += msg.mes + 'отправлено';
        //         } else if(status==='NO'){
        //             $('body').append(formmodal_box);
        //             $('.formmodal__msg').textContent += msg.mes + 'не отправлено';
        //         }
        //     });
        
        //     request.fail(function(jqHR, textStatus){
        //         $('body').append(formmodal_box);
        //         //$('.formmodal__msg') = 'Request failed: ' + textStatus;
                       
        //     });
        
        //     // var ajaxForm = function(form){       
        //     // }
        
    
    }

        var focusForm = function(){
            console.log('onActive');

            $(this).css({'border':'3px solid transparent'});

            $.each($('.form__input'), function(i){
                dropup($(this));
                input.css({'border':'3px solid transparent'});
            })
        }
        
        //кнопка "Очистить" на форме
        
        $('.form__reset').on('click',function(e){
            e.preventDefault();
            $(this).closest('.form')[0].reset();
        });
    
    }
 }
 
 module.exports = form;