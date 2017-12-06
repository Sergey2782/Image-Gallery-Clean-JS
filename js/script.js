//-----    custom slider on clean JS ----------//

var arrImgSlider  = [ 
                     
                     'img/gallery_1.jpg', 
                     'img/gallery_2.jpg',
                     'img/gallery_3.jpg',
                     'img/gallery_4.jpg',
                     'img/gallery_5.jpg',
                     'img/gallery_6.jpg',
                     'img/gallery_7.jpg',
                     'img/gallery_8.jpg',
                     'img/gallery_9.jpg',
                     'img/gallery_10.jpg',
                     'img/gallery_11.jpg',
                     'img/gallery_12.jpg',
                     'img/gallery_13.jpg',
                     'img/gallery_14.jpg',
                     'img/gallery_15.jpg',
                     'img/gallery_16.jpg',
                     'img/gallery_17.jpg',
                     'img/gallery_18.jpg',
                     'img/gallery_19.jpg',
                     'img/gallery_20.jpg',
                     'img/gallery_21.jpg',
                     'img/gallery_22.jpg',
                     'img/gallery_23.jpg',
                     'img/gallery_24.jpg',
                     'img/gallery_25.jpg',
                     'img/gallery_26.jpg',
                    ];

//------  variables   ----//

var img = document.querySelector('#show'),
    img_small_s = document.querySelectorAll('#showSmall'),
    btn_forward = document.querySelector('#btn_forward'),
    btn_back = document.querySelector('#btn_back');
    
//-------  events  -------//

img.onload =  firstMainImageOnLoad();// ---- when loading a page - 'img' get params 'src' and load image
img_small_s.onload = smallImagesOnLoad();
btn_forward.onclick = showNextImage;
btn_back.onclick = showPrevImage;


//-----  function for the correct loading FIRST images on the web-page --------//

  function firstMainImageOnLoad(){
        var dataSrc = img.getAttribute('data-src');
        img.src = dataSrc;//---- assign to 'src' data from 'data-src'    
}

  function smallImagesOnLoad (){
        for (var i =0; i < img_small_s.length; i ++){
              var dataSrc = img_small_s[i].getAttribute('data-src');
              img_small_s[i].src = dataSrc;
              };
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

var n = 0;

 var previous =13,
        main = 14,
        next = 15;

   function showPrevImage(){
    
        opacity = 0;
        MyFadeFunction(); //--- add animation effects

        main --;  //  --basic img  -- img on center in down row
        previous --;  //  --prev img
        next --;  //  --next img
    
    
        img.setAttribute('src', arrImgSlider[main] );
        img_small_s[1].setAttribute('src', arrImgSlider[main] );
            if(main == 0){
                main = arrImgSlider.length - 1; //--- when going to the first image, go to the last one
              }
    
        img_small_s[0].setAttribute('src', arrImgSlider[previous] );//--1
           if(previous == 0){
               previous = arrImgSlider.length - 1;
              }
         
        img_small_s[2].setAttribute('src', arrImgSlider[next] );
              if(next == 0) {
               next = arrImgSlider.length-1;
              }
      }

//---- show next images on click -----//

   function showNextImage(){
       
         opacity = 0;
         MyFadeFunction(); 
        

         main ++;  //  --basic img  -- img on center in down row
         previous ++;  //  --prev img
         next++;  //  --next img
    
    
         img.setAttribute('src', arrImgSlider[main] );
         img_small_s[1].setAttribute('src', arrImgSlider[main] );
            if(main == arrImgSlider.length-1){
                main = 0; //--- when going to the last image, go to the first one
              }
    
         img_small_s[0].setAttribute('src', arrImgSlider[previous] );//--1
           if(previous == arrImgSlider.length-1){
               previous =  0;
              }
         
         img_small_s[2].setAttribute('src', arrImgSlider[next] );
              if(next == arrImgSlider.length-1) {
               next = 0;
              }
        }













