                //-----    custom slider on clean JS ----------//

                          //------  variables   ----//

var img = document.querySelector('.show'),
    img_start_val = img.getAttribute('src'), //---- начальное значение осн-й картинки
    img_small_s = document.querySelectorAll('.showSmall'),
    btn_forward = document.querySelector('.btn_forward'),
    btn_back = document.querySelector('.btn_back'),
    main = 4,
    prev = 3,
    next = 5;

  //-------  events    -------//

    img_small_s.onload = ImagesOnLoad();
    btn_back.onclick = function() {switch_Image(-1)};
    btn_forward.onclick = function() {switch_Image(+1)};
   
 //-----  function for the correct loading row images on the web-page ---//

  function ImagesOnLoad(){
      for(var i = 0; i < img_small_s.length; i ++ ){
             img_small_s[i].setAttribute('src', img_small_s[i].getAttribute('data-src') );
                if(i == prev  || i == main || i == next){
                    img_small_s[i].style.display = 'inline-block';
                }
        }
 }

 //-----  function for beautiful  animation-effect  for change images -----//

   function fade_Img() {
         if (opacity<1) {
             opacity += .03;
             setTimeout(function(){fade_Img()},25);
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

             for(var i = 0; i < img_small_s.length; i ++ ){
                        if(i == prev  || i == main || i == next){
                            img_small_s[i].style.display = 'inline-block';
                        }else {
                            img_small_s[i].style.display = 'none';
                        }
             }
 }

 function switch_Image(sym){
         opacity = 0;
         fade_Img(); 
         var img_len = img_small_s.length;
         if(sym == -1){
               
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
                };
          selectImgAndShow();
}
     












