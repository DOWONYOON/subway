
$(document).ready(function(){
    $('#header2_menu>li').mouseover(function(){
        $('.smenu').stop().slideDown();
    })

    $('#header2_menu>li').mouseout(function(){
        $('.smenu').stop().slideUp();
    })

    

 
   // 메인 슬라이드
    main_slide_num = 0
    setInterval(function(){
        if(main_slide_num <= -300){
            main_slide_num = 0;
            $('#slide_box1').css({left:0})
        }
        main_slide_num = main_slide_num -100 // 0 -100 -200 -300
        $('#slide_box1').animate({left:main_slide_num+'%'},500)///
        a = main_slide_num/-100 // 0 1 2 3 
        if( a == 3){ a = 0}
        $('#slide_bt_button>li').eq(a).css({'background-color':'yellow','width':'25px'}).siblings().css({'background-color':'#fff','width':'10px'})
    },4000)

   $('#slide_bt_button>li').click(function(){
        main_slide_num = $(this).index()*-100;
        $('#slide_box1').animate({left:main_slide_num+'%'})
        $(this).css({'background-color':'yellow','width':'25px'}).siblings().css({'background-color':'#fff','width':'10px'})
    })

    //3개 슬라이드
    slide_num = 0
    setInterval(function(){
        if(slide_num <= -300){
            slide_num = 0;
            $('#slide_1').css({left:0})
        }
        slide_num = slide_num - 100
        $('#slide_1').animate({left:slide_num+'%'},500)   
        slide_num2 =  slide_num/-100 
        if(slide_num2 == 3 ){slide_num2=0}
        $('#slide_bt_1>li').eq(slide_num2).css({'background-color':'yellow','width':'25px'}).siblings().css({'background-color':'#fff','width':'10px'})
    },4000)

    $('#slide_bt_1>li').click(function(){
        $(this).css({'background-color':'yellow','width':'25px'}).siblings().css({'background-color':'#fff','width':'10px'})
        slide_num = $(this).index() *-100;
        $('#slide_1').animate({left:slide_num+'%'})
    })

    //메뉴 슬라이드
    dir_num = 0;
    dir_num2 = 0;
    dir_num3 = 0;
    dir_num4 = 0;
    speed = 1170
    $('#diricon1_next').click(function(){
        dir_num = dir_num - speed   
        $('#subway_menu1').animate({left:dir_num})
    })  
    $('#diricon1_prev').click(function(){ 
        dir_num = dir_num + speed        
        $('#subway_menu1').animate({left:dir_num})
    })  
    
    $('#diricon1_next2').click(function(){   
        dir_num2 = dir_num2 - speed           
        $('#subway_menu2').animate({left:dir_num2})
    })  
    $('#diricon1_prev2').click(function(){
        dir_num2 = dir_num2 + speed        
        $('#subway_menu2').animate({left:dir_num2})
    }) 

    $('#diricon1_next3').click(function(){
        dir_num3 = dir_num3 - speed        
        $('#subway_menu3').animate({left:dir_num3})
    })  
    $('#diricon1_prev3').click(function(){
        dir_num3 = dir_num3 + speed        
        $('#subway_menu3').animate({left:dir_num3})
    }) 

    $('#diricon1_next4').click(function(){
        dir_num4 = dir_num4 - speed        
        $('#subway_menu4').animate({left:dir_num4})
    })  
    $('#diricon1_prev4').click(function(){
        dir_num4 = dir_num4 + speed        
        $('#subway_menu4').animate({left:dir_num4})
    }) 

    $('#subway_menu_title>ul>li').click(function(){
        $(this).css({'color':'green'})
        $(this).siblings().css({'color':'rgb(99, 95, 95)'})
        $('#menu_right>div').eq(   $(this).index() ).stop().show().animate({'right':'0'},300)
        $('#menu_right>div').eq(   $(this).index() ).siblings().stop().fadeOut(300)
    })
   
})
    