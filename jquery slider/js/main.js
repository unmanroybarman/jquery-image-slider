$(document).ready(function(){
   $('.next').on('click', function(){
      //console.log('clicked');//testing
       var currentImg = $('.active');//grabbing active class image
       var nextImg = currentImg.next();// grabbing next element
       
       // test to see if there is a next, then we want to remove active class from this image and put on to the next one aslo want to change z-index & change to -10 to put image underneath
       //Then we addclass active to next image & change z-index to 10 to put it on top
       if(nextImg.length){
           currentImg.removeClass('active').css('z-index', -10);
           nextImg.addClass('active').css('z-index', 10);
       }
   }); 
    
    
    $('.prev').on('click', function(){
      //console.log('clicked');//testing
       var currentImg = $('.active');
       var prevImg = currentImg.prev();
       
       if(prevImg.length){
           currentImg.removeClass('active').css('z-index', -10);
           prevImg.addClass('active').css('z-index', 10);
       }
   }); 
});