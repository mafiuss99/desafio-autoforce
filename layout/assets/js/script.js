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

    loadProgressBar(true, true);

    $(".load-page").delay(2000).fadeToggle();

    $(".button-slide-products.right").on("click", function(){
      loadProgressBar(true)
    });

    $(".button-slide-products.left").on("click", function(){
      loadProgressBar(false)
    });

    new Glide('.banner_home').mount();
    new Glide('.spots_slide',  {
      perView: 1,
      peek: {
        before: "0",
        after: "140"
      },
      swipeThreshold: false,
    }).mount();
});

function loadProgressBar(ref, firstLoad = false){
  var slidesProduct = $(".products .glide__slide").length;
  var porcentageByProduct = 100/slidesProduct;
  var progressBar = $(".progress-bar");
  var buttonPrev = $(".button-slide-products.left");
  var buttonNext = $(".button-slide-products.right");
  var initialWidth = porcentageByProduct;

  if(firstLoad != false){
    progressBar.css("width", porcentageByProduct+"%");
    buttonPrev.css("display", "none");
    
  }else{
    if(ref == true){
      porcentageByProduct += porcentageByProduct;
      if(porcentageByProduct == 100){
        var displayPrev = "block";
        var displayNext = "none";
      }

    }else{
      if(porcentageByProduct == initialWidth){
        var displayPrev = "none";
        var displayNext = "block";
      }
      porcentageByProduct -= porcentageByProduct;
    }

    $(".button-slide-products.left").css("display", displayPrev);
    $(".button-slide-products.right").css("display", displayNext);

    progressBar.css("width", porcentageByProduct+"%");
  }
}