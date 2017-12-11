//-----    custom slider on clean JS ----------//

//------  variables   ----//
var img = document.querySelector('#show'),
    img_small_s = document.querySelectorAll('.showSmall'),
    btn_forward = document.querySelector('.btn_forward'),
    btn_back = document.querySelector('.btn_back');
  //-------  events  -------//
    img.onload =  firstMainImageOnLoad();
    btn_forward.onclick = showNextImage;
    btn_back.onclick = showPrevImage;
 //-----  function for the correct loading FIRST images on the web-page --------//
  function firstMainImageOnLoad(){
         var dataSrc = img.getAttribute('data-src');
         img.src = dataSrc;//---- assign to 'src' data from 'data-src'    
 }
 //----- beautiful  animation-effect  to change image -----//
   function MyFadeFunction() {
         if (opacity<1) {
             opacity += .03;
             setTimeout(function(){MyFadeFunction()},25);
         }
             img.style.opacity = opacity;
     }
 //---- show previous images on click -----//
  var main = 4;
  var prev = 3;
  var next = 5;
 
    function showPrevImage(){
         opacity = 0;
         MyFadeFunction();
 
         main --;
         prev --;
         next --;
        
        if(main < 0){
             main = img_small_s.length - 1; //--- when going to the first image, go to the last one
           };
        if(prev < 0){
             prev = img_small_s.length - 1; //--- when going to the first image, go to the last one
           };
        if(next < 0){
             next = img_small_s.length - 1; //--- when going to the first image, go to the last one
           };
        
        img.setAttribute('src', img_small_s[main].getAttribute('data-src') );
        
    var img_small = img_small_s[prev];
        img_small.setAttribute('src', img_small.getAttribute('data-src') );
        img_small.style.display = 'inline-block';
        
        img_small = img_small_s[next];
        img_small.setAttribute('src', img_small.getAttribute('data-src') );
        img_small.style.display = 'inline-block';
         
        img_small = img_small_s[main]; 
        img_small.setAttribute('src', img_small.getAttribute('data-src') );
        img_small.style.display = 'inline-block';
        
         for(var i = 0; i < img_small_s.length; i ++ ){
                    if(i == prev  || i == main || i == next){
                        img_small_s[i].style.display = 'inline-block';
                    }else {
                        img_small_s[i].style.display = 'none';
                    }
         }
}
 //---- show next images on click -----//
    function showNextImage(){
         opacity = 0;
         MyFadeFunction(); 
 
         main ++;
         prev ++;
         next ++;
        
        if(main > img_small_s.length - 1){
             main = 0; 
           };
        if(prev > img_small_s.length - 1){
             prev = 0;
           };
        if(next > img_small_s.length - 1){
             next = 0;
           };
        
        img.setAttribute('src', img_small_s[main].getAttribute('data-src') );
        
    var img_small = img_small_s[prev];
        img_small.setAttribute('src', img_small.getAttribute('data-src') );
        img_small.style.display = 'inline-block';
        
        img_small = img_small_s[next];
        img_small.setAttribute('src', img_small.getAttribute('data-src') );
        img_small.style.display = 'inline-block';
        
        
        img_small = img_small_s[main]; 
        img_small.setAttribute('src', img_small.getAttribute('data-src') );
        img_small.style.display = 'inline-block';
        
         for(var i = 0; i < img_small_s.length; i ++ ) {
             
                     if(i == prev  || i == main || i == next) {
                        img_small_s[i].style.display = 'inline-block';
                    } else {
                        img_small_s[i].style.display = 'none';
                    }
         }
        
}
 












