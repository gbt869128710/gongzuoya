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
	$("nav a").eq(3).addClass("h");
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
    //评论
    $(".card-top-sort").on("click",function(){
        $(".reply-place").stop(true).animate({"left":0});
        $(".go").stop(true).animate({"left":0});
    })
    $(".go-back").on("click",function(){
        $(".reply-place").stop(true).animate({"left":"100%"});
        $(".go").stop(true).animate({"left":"100%"});
    })
    //排序
    $(".sort-heat").eq(0).addClass("h");
    $(".sort-heat").on("click",function(){
        $(this).addClass("h").siblings(".sort-heat").removeClass("h");
    })
    //点赞
    var status=0;
    $(".reply-top-praise").on("click",function(){
        if(status==0){
            $(this).html("&#xe610;").css({color:"#00b380"});
            status=1;
            var i=parseInt($(this).siblings(".reply-top-wire").text());
            i++;
            $(this).siblings(".reply-top-wire").text(i);
        }else{
            $(this).html("&#xe64c;").css({color:"#999999"});
            status=0;
            var i=parseInt($(this).siblings(".reply-top-wire").text());
            i--;
            $(this).siblings(".reply-top-wire").text(i);
        }
    })
    //关注
    $(".attention").on("click",function(){
		$(this).hide().siblings(".attention").show();
	})
})