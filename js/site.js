window.APP = window.APP || {};

APP.intro = (function($) {
	function init() {
		$(".current-page").hide().removeClass('current-page');
		$("#intro").velocity("transition.bounceIn", { duration: 1200 }).addClass("current-page");
		$("#intro .stagger-in").css("opacity", "0").velocity("transition.slideUpIn", { delay: 1000, stagger: 400, tween: 400 });
		setInterval(function(){$("#intro .button").velocity("callout.pulse", {delay: 500});}, 2000);
	}
	return {
		init: init
	}
}(jQuery));

APP.startSelect = (function($) {
	function init(){
		$(".current-page").hide().removeClass('current-page');
		$("#start-select").velocity("transition.perspectiveRightIn", { duration: 1200 }).addClass('current-page');
		$("#start-select .stagger-in").css("opacity", "0").velocity("transition.slideUpBigIn", { delay: 1000, stagger: 400, tween: 300 });
	}
	return {
		init: init
	}
}(jQuery));

APP.level1_1 = (function($) {
	function init(){
		$(".current-page").hide().removeClass('current-page');
		$("#level1-1").velocity("transition.whirlIn", { duration: 1200 }).addClass('current-page');
		$("#level1-1 .stagger-in").css("opacity", "0").velocity("transition.slideUpIn", { delay: 1000, stagger: 300, tween: 400 });
	}
	return {
		init: init
	}
}(jQuery));

APP.level1_2 = (function($) {
	function init(){
		$(".current-page").hide().removeClass('current-page');
		$("#level1-2").velocity("transition.whirlIn", { duration: 1200 }).addClass('current-page');
		$("#level1-2 .stagger-in").css("opacity", "0").velocity("transition.slideUpIn", { delay: 1000, stagger: 250, tween: 400 });
	}
	return {
		init: init
	}
}(jQuery));

APP.level1_3 = (function($) {
	function init(){
		$(".current-page").hide().removeClass('current-page');
		$("#level1-3").velocity("transition.whirlIn", { duration: 1200 }).addClass('current-page');
		$("#level1-3 .stagger-in").css("opacity", "0").velocity("transition.slideUpIn", { delay: 1000, stagger: 250, tween: 400 });
	}
	return {
		init: init
	}
}(jQuery));

APP.level1_4 = (function($) {
	function init(){
		$(".current-page").hide().removeClass('current-page');
		$("#level1-4").velocity("transition.whirlIn", { duration: 1200 }).addClass('current-page');
		$("#level1-4 .stagger-in").css("opacity", "0").velocity("transition.slideUpIn", { delay: 1000, stagger: 250, tween: 400 });
	}
	return {
		init: init
	}
}(jQuery));

APP.level1_5 = (function($) {
	function init(){
		$(".current-page").hide().removeClass('current-page');
		$("#level1-5").velocity("transition.whirlIn", { duration: 1200 }).addClass('current-page');
		$("#level1-5 .stagger-in").css("opacity", "0").velocity("transition.slideUpIn", { delay: 1000, stagger: 250, tween: 400 });
	}
	return {
		init: init
	}
}(jQuery));


// On Intro Page Load
$(document).on('pageshow', '#intro', function(){ 
    APP.intro.init();
});

// On Start-Select Page Load
$(document).on('pageshow', '#start-select', function(){    
    APP.startSelect.init();
});

// On Start-Select Page Load
$(document).on('pageshow', '#level1-1', function(){    
    APP.level1_1.init();
});

// On Start-Select Page Load
$(document).on('pageshow', '#level1-2', function(){    
    APP.level1_2.init();
});

// On Start-Select Page Load
$(document).on('pageshow', '#level1-3', function(){    
    APP.level1_3.init();
});

// On Start-Select Page Load
$(document).on('pageshow', '#level1-4', function(){    
    APP.level1_4.init();
});

// On Start-Select Page Load
$(document).on('pageshow', '#level1-5', function(){    
    APP.level1_5.init();
});
