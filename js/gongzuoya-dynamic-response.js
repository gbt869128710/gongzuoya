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
	$("nav a").eq(1).addClass("h");
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
    $("body").on("click",".reply-top-praise",function(){
         if($(this).hasClass("h")){
            $(this).html("&#xe64c;").css({color:"#999999"});
            $(this).removeClass("h")
            var i=parseInt($(this).siblings(".reply-top-wire").text());
            i--;
            $(this).siblings(".reply-top-wire").text(i); 
         }else{
            $(this).html("&#xe610;").css({color:"#00b380"});
            $(this).addClass("h")
            var i=parseInt($(this).siblings(".reply-top-wire").text());
            i++;
            $(this).siblings(".reply-top-wire").text(i); 
         }
    })
    //关注
    $("body").on("click",".attention",function(){
         if($(this).hasClass("h")){
            $(this).html("&#xe601;").css({color:"#999999"});
            $(this).removeClass("h");
            var i=parseInt($(this).siblings(".topic-comment-number").text());
            i--;
            $(this).siblings(".topic-comment-number").text(i); 
         }else{
            $(this).html("&#xe687;").css({color:"#00b380"});
            $(this).addClass("h");
            var i=parseInt($(this).siblings(".topic-comment-number").text());
            i++;
            $(this).siblings(".topic-comment-number").text(i); 
         }
    })
    //回复的大小不一
    $(".reply-top-head").eq(0).addClass("h");
    $(".reply-top-ranking").eq(0).addClass("h");
    $(".reply-writer:last").eq(0).addClass("h");
    $(".reply-writer-more:last").show();
    $(".reply-writer-more").on("click",function(){
        $(this).hide();
        $(".reply-writer:last").eq(0).removeClass("h");
    })
    //出现和取消分享
    $(".cancel").on("click",function(){
        $(".cover-all").hide();
        $(".share").stop(true).animate({"bottom":"-100%"})
    })
    $(".cover-all").on("click",function(){
        $(".cover-all").hide();
        $(".restore").hide();
        $("body").removeClass("h");
        $(".share").stop(true).animate({"bottom":"-100%"})
    })
    $(".go-omit,.quiz-go-omit").on("click",function(){
        $(".cover-all").show();
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
        var c_h=$(".restore").height();
        var w_h=$(window).height();
        $(".cover-all").css({"height":w_h - c_h});
        $("body").addClass("h");
        $(".restore,.cover-all").show();
    })
    $(".restore-depict-textarea").on("input",function(){
        var pre=$(".restore-depict-textarea").height();
        $(".restore-depict").css({"height":pre+"px"})
    })
    $(".restore-phiz-send").on("click",function(){
        $(".cover-all").hide();
        $(".restore").hide();
        $("body").removeClass("h");
    })
    autosize($(".restore-depict-textarea"));
})