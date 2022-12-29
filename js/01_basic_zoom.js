$(document).ready(function(){

    /* zoom */
    
    $('.zoom').zoom();
    $('.zoom2').zoom();

    /* prevnetDefault */
    $("a[href='#']").on('click',function(e){
        e.preventDefault();
    })

    /* the_verve */
    $('.the_verve_info>li:nth-child(1)').on('click',function(){
        $('.the_verve_info_2depth>li:nth-child(2)').stop().slideUp(100);
        $('.the_verve_info>li:nth-child(2)').css({transform:'scale(100%)'});
        $('.the_verve_info_2depth>li:nth-child(3)').stop().slideUp(100);
        $('.the_verve_info>li:nth-child(3)').css({transform:'scale(100%)'});
        $('.the_verve_info_2depth>li:nth-child(1)').stop().slideDown(300);
        $(this).css({transform:'scale(150%)'});
    })
    $('.the_verve_info>li:nth-child(2)').on('click',function(){
        $('.the_verve_info_2depth>li:nth-child(1)').stop().slideUp(100);
        $('.the_verve_info>li:nth-child(1)').css({transform:'scale(100%)'});
        $('.the_verve_info_2depth>li:nth-child(3)').stop().slideUp(100);
        $('.the_verve_info>li:nth-child(3)').css({transform:'scale(100%)'});
        $('.the_verve_info_2depth>li:nth-child(2)').stop().slideDown(300);
        $(this).css({transform:'scale(150%)'});
    })
    $('.the_verve_info>li:nth-child(3)').on('click',function(){
        $('.the_verve_info_2depth>li:nth-child(1)').stop().slideUp(100);
        $('.the_verve_info>li:nth-child(1)').css({transform:'scale(100%)'});
        $('.the_verve_info_2depth>li:nth-child(2)').stop().slideUp(100);
        $('.the_verve_info>li:nth-child(2)').css({transform:'scale(100%)'});
        $('.the_verve_info_2depth>li:nth-child(3)').stop().slideDown(300);
        $(this).css({transform:'scale(150%)'});
    })
    // css('display','none');


    /* 탑버튼 */
    var scrT = $(document).scrollTop();
    var verve = $('.gnb ul li:nth-child(2) a').offset();
    $('.move_top').on('click',function(){
        $('html, body').animate({scrollTop : 0},400);
    });
    $('.gnb ul li:nth-child(1) a').on('click',function(){
        $('html, body').animate({scrollTop : +4700},400);
    });
    $('.gnb ul li:nth-child(2) a').on('click',function(){
        $('html, body').animate({scrollTop : +1700},400);
    });
    $('.gnb ul li:nth-child(4) a').on('click',function(){
        $('html, body').animate({scrollTop : +2750},400);
    });
})

