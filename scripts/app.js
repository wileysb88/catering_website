$( document ).ready(function(){
   $(".button-collapse").sideNav();
   $('.slider').slider({full_width: true});


  $('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 60
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});

});



$(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    console.log(scrollVar);
    // $('.test').css("opacity", 1 - scrollVar/300 );
    // $('.test').css("height", 300 - scrollVar + "px");
    // $('.test').css("width", 300 - scrollVar + "px");
    if(scrollVar === "200"){
      console.log("this is 200")

      // $('.test').css({height: "50px"}, 500);
      // $('.test').css({width: "50px"}, 500);
      $('.words').toggle();
    }else if(scrollVar === "200")
      console.log("not at 200 yet!");
      $('.words').toggle();
})
