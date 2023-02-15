$( document ).ready(function() {

    $('body').on('click','.button__text,a,input.form-button',function(e){
        alert('xin chao');
        e.preventDefault();
    });
    
 });