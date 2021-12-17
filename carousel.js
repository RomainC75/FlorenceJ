
const divNumber = $('.carousel__image').length;
console.log('divNumber',divNumber);
let compteur=1;



$('#forward').click( function(){
  if(compteur<divNumber){
    compteur++;
    $('.carousel__image').css('transform',`translatex(${-(compteur-1)*108}%)`);
    console.log(compteur)
    if(compteur==divNumber){
      $('#forward i').css('filter',"red");
    }
  }
});

$('#backward').click( function(){
    if(compteur>1){
    compteur--;
      $('.carousel__image').css('transform',`translatex(${-(compteur-1)*104}%)`);
    }
  });
/*
$(window).resize(function () {
  console.log("----------",$(window).width());
  const differenceWindowWidth=1440-$(window).width();
  
  //const imageWidth=getIntWidth('#carousel')*70/100+60;
  const translateSetting = parseInt($('.carousel__image').css('transform').split(', ')[4]);
  console.log("translateSettings",translateSetting);
  const trans=translateSetting%imageWidth;
  console.log("trans",trans)
  $('.carousel__image').css('transform',`translatex(${trans}px)`)
})
*/

/*
$('#forward').click( function(){
  if(compteur<divNumber){
    const decoupe = parseInt($('.carousel__image').css('transform').split(', ')[4]);
    const imageWidth=getIntWidth('#carousel')*70/100;
    const trans=decoupe-(imageWidth+imageWidth*70/100*4/100*2);
    $('.carousel__image').css('transform',`translatex(${trans}px)`);
    compteur++;
    
    if(compteur==divNumber){
      $('#forward i').css('filter',"red");
    }
  }
});
*/


//TOUCH functions 
const slider = document.querySelector('.carousel');
const slides = Array.from(document.querySelectorAll('.carousel__image'));

let isDragging=false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID=0;
let currentIndex = 0;

slides.forEach((slide,index)=> {
  const slideImage = slide.querySelector('img');
  document.addEventListener('dragstart', (e)=>e.preventDefault());

  //Touch events
  slide.addEventListener('touchstart' , touchStart(index));
  slide.addEventListener('touchend' , touchEnd);
  slide.addEventListener('touchmove' , touchMove);



  //Mouse events
  slide.addEventListener('mousedown' , touchStart(index));
  slide.addEventListener('mouseup' , touchEnd);
  slide.addEventListener('mouseleave' , touchEnd);
  slide.addEventListener('mousemove' , touchMove);

});

const getPositionX = (event)=> {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation(){ 
  setSliderPosition();
  if(isDragging) requestAnimationFrame(animation)
}

function setSliderPosition () {
  slider.style.transform = `translateX(${currentTranslate}px)`;
}

//disable context menu
window.oncontextmenu = (e) => {
  e.preventDefault();
  e.stopPropagation();
  return false;
}
function touchStart(index){
  return function(event){
    currentIndex = index;
    //utiliser la position suivant le type de device 
    startPos = getPositionX(event);
    isDragging=true;

    animationID = requestAnimationFrame(animation);

    console.log(startPos);
  }
}

function touchEnd(){
  isDragging=false;
  cancelAnimationFrame(animationID);
  console.log('end');
}


function touchMove(event){
  if(isDragging){
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
    console.log('move');
  }
}