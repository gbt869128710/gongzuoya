'use strict';
function zoom_image(obj) {
    if (obj.hasClass('photoBox')) {
        var load = obj.find('.loadingBox');
        load.show();
        var img = obj.next().find('img');
        if (img.attr('src') == 'about:blank') {
            img.attr('src', obj.find('img').attr('src').replace('m.', 'l.'));
            img.load(function() {
                obj.hide();
                obj.next().show();
				obj.parent().siblings(".zoombox").children(".photoBox").next().hide();
				obj.parent().siblings(".zoombox").children(".photoBox").hide();
				
            });
        } else {
			$(".photoBox").hide();
            obj.hide();
            obj.next().show();
		
        }
    } else {
        obj.hide();
	$(".photoBox").show();
    }
}
$(function(){
    $(window).on("scroll",function(){
        var s_h=$(window).scrollTop();
        if(s_h>470){
            $(".center-right").addClass("h");
        }else{
            $(".center-right").removeClass("h");
        }
    })
    $(".scroll_a").on("click",function(){
        var i=$(this).parent().index();
        $('html,body').animate({scrollTop:$('.a').eq(i).offset().top}, 800);
    }); 
        
    
})