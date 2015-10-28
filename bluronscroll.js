//EFECTO DE BLUR AL REALIZAR EL SCROLL
//BLUR EFFECT TO DO A SCROLL
$(document).scroll(function(){
  var scrollTop = $(this).scrollTop();
  var pixels = scrollTop / 50;
  if(scrollTop < height){
    $("#slideshow").css({
      "-webkit-filter": "blur(" + pixels + "px)"
    });
  }
});
