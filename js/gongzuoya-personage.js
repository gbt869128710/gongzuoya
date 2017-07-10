'use strict';
$(function(){
	//搜索框
	$(".search-seek").on("click",function(){
		$(this).stop(true).animate({width: "74%"});
		$(".search-quiz").fadeOut(400);
	})
	$("body").on("blur",".search-seek",function(){
		$(this).stop(true).animate({width: "55%"});
		$(".search-quiz").fadeIn(400);
        $("body").removeClass("h");
	})
    $(".search-seek-input").on("input",function(){
        $(".seek").show();
        $("body").addClass("h");
    })
    $(".seek-aspect-side").on("click",function(){
        $(".search-seek-input").val($(this).text());
        $(".seek").hide();
    })
    $(".seek").on("click",function(){
        $(".seek").hide();
    })
	//导航栏
	$("nav a").eq(4).addClass("h");
	$("nav a").on("click",function(){
		$(this).addClass("h").siblings("nav a").removeClass("h");
	})
    $(window).on("scroll",function(){
        var w_h=$(window).scrollTop();
        if(w_h>47){
            $("nav").css({"position": "fixed"});
            $(".content").css({"margin-top": "38px"});
        }else{
            $("nav").css({"position": "relative"});
            $(".content").css({"margin-top": "0"});
        } 
    })
    
})