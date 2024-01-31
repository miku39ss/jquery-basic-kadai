$(function(){
    
    $('#change-color').on('click', function(){
      $('#target').css('color',red);
    });
  
});
 
    $(function(){
    
    $('#change-text').on('click', function(){
      $('#target').text('Hello');
    });

});
  

    $(function(){

    
    $('#fade-out').on('click', function(){
        $('#target').fadeout();
    });

});
  
    $(function(){
  
 
    
    $('#fade-in').on('click', function(){
        $('#target').fadein();
    });
  });
 