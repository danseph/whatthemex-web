$(document).ready(function(){
    applyLanguage('');

    var arrMenuDiv;

    // header fixed scroll , web-nav scroll
    $(window).scroll(function(){
        $(".header").css("left", -$(this).scrollLeft());

        var y1 = $(document).scrollTop();
        var y2 = y1 + ($(window).height() / 2);

        if(!arrMenuDiv) {
            arrMenuDiv = [];
            var children = $('.wrap').children();
            for(var i=2; i<children.length-1; i++) {    // header, main, footer 제외
                arrMenuDiv.push(children[i]);
            }
        }

        for(var i=0; i<arrMenuDiv.length; i++) {
            var el = arrMenuDiv[i];
            if (y1 < el.offsetTop && el.offsetTop < y2) {
                var id = el.id;
                $(".web-nav a, h1").removeClass("on");
                $('#menu_'+id).addClass('on');
                break;
            } else if (y1 == 0) {
                $(".web-nav a").removeClass("on");
            }
        }
    });


    // header scroll size
    var bodyOffset = $('body').offset();
    $(window).scroll(function(){
        if($(document).scrollTop() > bodyOffset.top) {
            // $("header").addClass("scroll");
            $("header").stop().animate({
                "height": '60px'
            }, 300);
            $(".header, header").addClass("bg-black");
        } else {
            // $("header").removeClass("scroll");
            $("header").stop().animate({
                "height": '80px'
            }, 300);
            $(".header, header").removeClass("bg-black");
        };
    });


    // nav
    $("nav a, h1 a").click(function(event){
        event.preventDefault();
        $("html, body").animate({scrollTop:$(this.hash).offset().top-40}, 800);
    });


    // web-nav
    $("nav a, h1").click(function(){
        $("nav a, h1").removeClass("on");
        $(this).addClass("on");
    });


    // mobile-nav
    $(".ham-wrap").click(function() {
        $(this).toggleClass("active");
        $(".gnb.mb").toggleClass("open");

        if ($(this).hasClass("active")) {
            $('html, body').css({'overflow': 'hidden'});
        } else {
            $('html, body').css({'overflow': 'auto'});
        }
    });

    $(".mb-nav a").click(function(){
        if ( $(this).hasClass("on") ){
            $(".ham-wrap").removeClass("active");
            $(".gnb.mb").removeClass("open");
            $('html, body').css({'overflow': 'auto'});
        }
    });


    // language
    $(".lan-list").hide();

    $(".lan-now, .lan-click").click(function(){
        $(this).toggleClass("on");
        $(".lan-list").slideToggle();
    });

    $(".lan-list li").click(function(){
        $(".lan-list").slideToggle();
        $(".lan-now").text( $(this).text().trim() );
    });
});