$(document).ready(function(){

    $("#toggleMenu").on('click', function(e){
        e.preventDefault();
        $(".primary-navbar").slideToggle()
    });

    $(".link.tem-filho a").on("click", function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(this).siblings("ul").slideToggle();
    });

    

    var $slider = $('.slider');
    var $progressBar = $('.progress');
    var $progressBarLabel = $( '.slider__label' );
    
    $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
      var calc = ( (nextSlide) / (slick.slideCount-1) ) * 100;
      
      $progressBar
        .css('background-size', calc + '% 100%')
        .attr('aria-valuenow', calc );
      
      $progressBarLabel.text( calc + '% completed' );
    });
    
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 400
    });  

})