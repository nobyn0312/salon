// navigation
$(function(){
  $('nav a').on('touchstart click',function(event){
      $('.spbtn').trigger('click');
  })

     $('.spbtn').on('click',function(){
      $('.spbtn,.btn-line').toggleClass('open');		
      $('nav').toggleClass('slide');    
  }) 
})

$(document).on('click touchstart', function(event) {
  if (!$(event.target).closest('.spbtn').length) {
      $('nav').removeClass('slide');  
      $('.spbtn,.btn-line').removeClass('open');	
  }
});
