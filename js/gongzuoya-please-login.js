'use strict';
$(function(){
    var i=parseInt($(".skip span").text());
	setInterval(function(){
        i--;
        $(".skip span").text(i);
        if(i==0){
            location.href="gongzuoya-enter.html"
        }
    },1000)
})