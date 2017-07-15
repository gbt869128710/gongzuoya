'use strict';
$(function(){
   $(".enter-login").on("click",function(){
       if($(".enter-name input").val()==""){
           $(".cover").fadeIn().fadeOut(3000);
           $(".hint").text("用户名和密码不得为空!").fadeIn().fadeOut(3000);
       }
   })
})