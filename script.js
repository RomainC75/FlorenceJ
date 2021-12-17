//$('.header__background').css('top',0);


//scroll dans la fenêtre
$(window).scroll(function(){
    if($(this).scrollTop()>1){
        $('.header__background').css('top',0);
        $('.header').css('color',"black");
        $('.header__openClose__xContainer span').css('background-color',"black");
        $('.header__signature.animation').css('filter','invert(0%) sepia(50%) saturate(4224%) hue-rotate(30deg) brightness(92%) contrast(97%)');
        $('.header__mailMe').css('border','1px solid black');
        $('.header__mailMe').css('color','black');
        $('.imageContainer__cheuvrons').css('animation','cheuvronsFadeOut linear 1s forwards');
    }else{
        $('.header__background').css('top',-120);
        $('.header:not(.static)').css('color',"white");
        $('.header__openClose__xContainer span').css('background-color',"white");
        $('.header__signature.animation').css('filter','invert(100%) sepia(100%) saturate(1%) hue-rotate(204deg) brightness(103%) contrast(101%)');
        $('.header__mailMe').css('border','1px solid white');
        $('.header__mailMe').css('color','white');
        $('.imageContainer__cheuvrons').css('animation','cheuvronsFadeIn linear 1s forwards');
    }

    const windowHeight= $(window).height();
    const windowWidth = $(window).width();
    //console.log('windowHeight',windowHeight,'windowWidth',windowWidth,'scroll',$(this).scrollTop());
    //console.log('windowWidth',windowWidth);

    if($(this).scrollTop()>130){
        $('.one').children().css('animation','apparitionAnim 1s');
    }

    if ($(this).scrollTop()>595){
        $('.two').children().css('animation','apparitionAnim 1s');
    }

    if ($(this).scrollTop()>1470){
        $('.three').children().css('animation','apparitionAnim 1s');
    }
});



//ouverture du menu
$('.header__openClose__xContainer').click(function(){
    if($(this).hasClass('xMenuOpen')){
        //fermeture du menu
        $(this).removeClass('xMenuOpen');
        $('.menu').removeClass('xBlackMenuOpen');

        $('.header__openClose__xContainer span').removeClass('backgroundWhite');
        $('.header__signature').removeClass('whiteSignature');
        $('.header__mailMe').removeClass('colorWhite');

        $('.menu__container__listContainer ul li').removeClass('menuElementsApparition');
        $('.menu__container__photo').removeClass('menuElementsApparition');

        $('.header__mailMe').removeClass('mailBorderWhite');

        $('.headerPart:last-child a').removeClass('colorWhite');
    }else{
        //ouverture du menu
        $(this).addClass('xMenuOpen');
        $('.menu').addClass('xBlackMenuOpen');

        $('.header__openClose__xContainer span').addClass('backgroundWhite');
        $('.header__signature').addClass('whiteSignature');
        $('.header__mailMe').addClass('colorWhite');

        $('.menu__container__listContainer ul li').addClass('menuElementsApparition');
        $('.menu__container__photo').addClass('menuElementsApparition');

        $('.header__mailMe').addClass('mailBorderWhite');

        $('.headerPart:last-child a').addClass('colorWhite');
    }
})


$('.headerPart:last-child').click(function(){
    console.log('click!!!!');
    //$('#nameInput').trigger("focus");
    document.getElementById('nameInput').focus();
})

////////////////////////
//menu
if($(window).width()<786){
    $('.headerTwo__Part__ul').css('display','none');
    $('.headerTwo__Part__button').css('display','block');
}else{
    $('.headerTwo__Part__ul').css('display','flex');
    $('.headerTwo__Part__button').css('display','none');
}



$(window).resize( ()=>{
    console.log($('.headerTwo__Part__dropMenu').css('transform').match(/(\(.*)\)/)[1].split(',')[5].trim());
    if($(window).width()<786){
        $('.headerTwo__Part__ul').css('display','none');
        $('.headerTwo__Part__button').css('display','block');
    }else{
        $('.headerTwo__Part__ul').css('display','flex');
        $('.headerTwo__Part__button').css('display','none');
        if($('.headerTwo__Part__dropMenu').css('transform').match(/(\(.*)\)/)[1].split(',')[5].trim()=="515"){
            $('.headerTwo__Part__dropMenu').css('transform','translateY(0)');
            $('.headerTwo__Part__button').css('color', 'black');
        }
    }
})



$('.headerTwo__Part i').click( ()=>{
    console.log($('.headerTwo__Part__dropMenu').css('transform').match(/(\(.*)\)/)[1].split(',')[5]);
    if($('.headerTwo__Part__dropMenu').css('transform').match(/(\(.*)\)/)[1].split(',')[5].trim()=="0"){
        $('.headerTwo__Part__dropMenu').css('transform','translateY(515px)');
        $('.headerTwo__Part__button').css('color', 'white');
    }else{
        $('.headerTwo__Part__dropMenu').css('transform','translateY(0)');
        $('.headerTwo__Part__button').css('color', 'black');
    }
});

