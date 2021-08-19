$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        var $nav = $("#mainNavbar");
        if (scroll > $nav.height()) {
            $(".navbar").css("background", "#dec0de");
            $(".navbar").css("transition", "all 500ms");
        }
        else {
          $(".navbar").css("background", "rgba(0,0,0,0)");
        }
    })
})