$(document).ready(function(){

    
// 모바일 햄버거 버튼 click시 히든 메뉴 show 
    $(".menu_01").click(function(){    
        $(".m_hidden_menu").animate({left:"0"},"fast");    
    });
    $(".close_btn").click(function(){    
        $(".m_hidden_menu").animate({left:"-50%"},"fast");    
    });



});//end