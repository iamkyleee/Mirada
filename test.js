$(document).ready(function(){

  
  
  //body double click fade out
  $("body").click(function(){
	$("#content").fadeToggle();
	
  });
  
  //button click fade out
  $("#btn1").click(function(){
	});

	//button hover
	$("#btn1").hover(function(){
	if (!$(this).hasClass('animated')) {
		$(this).dequeue().stop().animate({ height: "30px", opacity: "0.9" }, 'fast');
	}
}, function() {
    $(this).addClass('animated').animate({ height: "20px", width: "120px", opacity: "0.5"}, "fast", "linear", function() {
		$(this).removeClass('animated').dequeue();
	});
});

//forecast
	$("#forecast_embed", "#liweather").hover(function(){
	if (!$(this).hasClass('animated')) {
		$(this).dequeue().stop().animate({ width: "600px", opacity: "0.9" }, 'fast');
	}
}, function() {
    $(this).addClass('animated').animate({ width: "200px", opacity: "0.6"}, "fast", "linear", function() {
		$(this).removeClass('animated').dequeue();
	});
});



//li1
	$("#li1").hover(function(){
	if (!$(this).hasClass('animated')) {
		$(this).dequeue().stop().animate({ width: "500px", height: "50px", opacity: "0.9" }, 'fast');
	}
}, function() {
    $(this).addClass('animated').animate({ width: "200px", opacity: "0.5", height: "100%"}, "fast", "linear", function() {
		$(this).removeClass('animated').dequeue();
	});
});



//li1
	$("#li2").hover(function(){
	if (!$(this).hasClass('animated')) {
		$(this).dequeue().stop().animate({ width: "800px", height: "400px", opacity: "0.9" }, 'normal');
	}
}, function() {
    $(this).addClass('animated').animate({ width: "200px", opacity: "0.5", height: "16px", overflow: "hidden"}, "normal", "linear", function() {
		$(this).removeClass('animated').dequeue();
	});
});

$('#fs').click(function () {
				screenfull.toggle($('#container')[0]);
			});
	
	
//end	
});