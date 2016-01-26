
/*scrolling for header part**/
 $(window).scroll(function()
  {
       var wScroll = $(this).scrollTop();
        

        $('.logo-bride').css(
          {
           'transform' : 'translate(0px, -'+ wScroll /10 +'%)'
          });

        $('.logo-text').css(
           {
            'transform': 'translate(0px, '+ wScroll /.8+'%)'
     	     });



        
           
       if(wScroll > $('.portfolio').offset().top- ($(window).height() / 6.4))
         
           {             
           // console.log("hi");
          $('.portfolio img').each(function(i)
               {
                 setTimeout(function()
                   { 
                     $('.portfolio img').eq(i).addClass('is-showing');   
             
                    }, 150 * (i+1));
             
               });

           }



       /*Floating elements= Blog Posts*/
       
       var blogScroll = $('.blog-posts').offset().top;
       var minus = $('.blog-posts').offset().top - ($(window).height());
       var windowH = $(window).height();


      
        
      if(wScroll > $('.blog-posts').offset().top - ($(window).height()))
           {
              console.log(wScroll);
              console.log(blogScroll);
              console.log(windowH);
              console.log(minus);
              console.log('hi');   

                


         var offset= Math.min(0, wScroll - $('.blog-posts').offset().top + $(window).height() - 3400);

         $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset / 4) +'px)'});

         $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px , '+ Math.abs(offset / 4) +'px)'});

         }
           





   });

//using magnificPopup for lightbox effect on images
// $(document).ready(function(){
//     $('figure').magnificPopup({
//       type:'image',
//       closeOnContentClick: true,
//       image:{
//         verticalFit: false  
//       }


//     });
// });
















