$(document).ready(function(){

    var imgItems = $('.slider li').length; //Determinamos la cantidad de slides
    var pagPos = 0;
    //Agregar paginación
    for(var i=0; i<imgItems; i++){
        $('.paginacion').append('<li class="fa fa-empire"></li>');
    }

    //Esconder Imagenes y modificar colores de paginación.}
    $('.slider li').hide();
    $('.slider li').first().show();
    $('.paginacion li').first().css({'color':'red'});

    setInterval(function(){
        siguiente();
    },5000);

    //Llamar funciones
    $('.paginacion li').click(paginacion);
    $('.der span').click(siguiente);
    $('.izq span').click(atras);
    //

    //Crear funciones
    function paginacion(){
        pagPos = $(this).index() //Posición de la paginación seleccionada
        $('.slider li').hide();
        $('.slider li').eq(pagPos).fadeIn();
        $('.paginacion li').css({'color':'silver'});
        $('.paginacion li').eq(pagPos).css({'color':'red'})
    }

    function siguiente(){

       if(pagPos >= imgItems-1){
        pagPos = 0
       }else{
        pagPos++;
       }
        

        $('.paginacion li').css({'color':'silver'});
        $('.paginacion li').eq(pagPos).css({'color':'red'});
        $('.slider li').hide();
        $('.slider li').eq(pagPos).fadeIn();
    }

    function atras(){

        if(pagPos <= 0){
            pagPos = imgItems-1;
        }else{
            pagPos--;
        }

        $('.paginacion li').css({'color':'silver'});
        $('.paginacion li').eq(pagPos).css({'color':'red'});
        $('.slider li').hide();
        $('.slider li').eq(pagPos).fadeIn();
    }

});