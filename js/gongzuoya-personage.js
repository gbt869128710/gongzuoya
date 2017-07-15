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
	$("nav a").eq(2).addClass("h");
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
     //出现和取消分享
    $(".cancel").on("click",function(){
        $(".cover").fadeOut();
        $(".share").stop(true).animate({"bottom":"-100%"})
    })
    $(".cover").on("click",function(){
        $(".cover").fadeOut();
        $(".restore").hide();
        $(".share").stop(true).animate({"bottom":"-100%"})
    })
    $(".go-omit,.quiz-go-omit").on("click",function(){
        $(".cover").fadeIn();
        $(".share").stop(true).animate({"bottom":"0"})
    })
    //提问的边框
    $(".textarea").on("click",function(){
        $(this).css({"border":"1px solid #00b380"})
    })
    $(".textarea").on("blur",function(){
        $(this).css({"border":"1px solid #999999"})
    })
    $(".textarea input").on("blur",function(){
        $(this).parent(".textarea").css({"border":"1px solid #999999"})
    })
    //归属话题
    $(".quiz-depict-topic input").on("input",function(){
        $(".quiz-depict-topics p").show();
    })
    $(".quiz-depict-topics p").on("click",function(){
        $(".quiz-depict-topic input").val($(this).text());
        $(".quiz-depict-topics").hide();
    })
    //提问详情
    $(".search-quiz").on("click",function(){
        $(".quiz").stop(true).animate({"left":0});
        $(".quiz-go").stop(true).animate({"left":0});
    })
    $(".quiz-go-back").on("click",function(){
        $(".quiz").stop(true).animate({"left":"100%"});
        $(".quiz-go").stop(true).animate({"left":"100%"});
    })
    //写评论
    $(".reply-top-criticism").on("click",function(){
        $(".restore,.cover").show();
    })
    $(".restore-depict-textarea").on("input",function(){
        var pre=$(".restore-depict-textarea").height();
        console.log(pre);
        $(".restore-depict").css({"height":pre+"px"})
    })
})