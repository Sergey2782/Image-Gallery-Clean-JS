                //-----    custom slider on clean JS ----------//

                          //------  variables   ----//

var img = document.querySelector('#show'),
    img_small_s = document.querySelectorAll('.showSmall'),
    btn_forward = document.querySelector('.btn_forward'),
    btn_back = document.querySelector('.btn_back'),
    main = 4,
    prev = 3,
    next = 5,
    img_len = img_small_s.length;
  
                         //-------  events    -------//

    img.onload =  firstMainImageOnLoad();
    btn_back.onclick = function() {switch_Image('minus')};
    btn_forward.onclick = function() {switch_Image('plus')};
   
 //-----  function for the correct loading FIRST images on the web-page ---//

  function firstMainImageOnLoad(){
         var dataSrc = img.getAttribute('data-src');
         img.src = dataSrc;//---- assign to 'src' data from 'data-src'    
 }

 //-----  function for beautiful  animation-effect  for change images -----//

   function MyFadeFunction() {
         if (opacity<1) {
             opacity += .03;
             setTimeout(function(){MyFadeFunction()},25);
         }
             img.style.opacity = opacity;
     }
  
//--------------     function - select images for showing on page  --------//

 function selectImgAndShow (){
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

             for(var i = 0; i < img_len; i ++ ){
                        if(i == prev  || i == main || i == next){
                            img_small_s[i].style.display = 'inline-block';
                        }else {
                            img_small_s[i].style.display = 'none';
                        }
             }
 }

 function switch_Image(sym){
         opacity = 0;
         MyFadeFunction(); 

         if(sym == 'minus'){
               
                main --; prev --; next --;

                if(main < 0){
                     main = img_len - 1;
                   };
                if(prev < 0){
                     prev = img_len - 1;
                   };
                if(next < 0){
                     next = img_len - 1;
                   };
                    selectImgAndShow();
         }else{ 

                main ++; prev ++; next ++;

                if(main > img_len - 1){
                     main = 0; 
                   };
                if(prev > img_len - 1){
                     prev = 0;
                   };
                if(next > img_len - 1){
                     next = 0;
                   };
                    selectImgAndShow();
                };
}
     












