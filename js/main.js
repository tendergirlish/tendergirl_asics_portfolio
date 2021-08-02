$(document).ready(function(){

    
// 모바일 햄버거 버튼 click시 히든 메뉴 show 
    $(".menu_01").click(function(){    
        $(".m_hidden_menu").animate({left:"0"},"fast");    
    });
    $(".close_btn").click(function(){    
        $(".m_hidden_menu").animate({left:"-50%"},"fast");    
    });


    //드롭다운 메뉴 부분 꽉차게 배경들어가는 부분 + css
    $("#header_logo").before("<p class='n_bg'></p>");
    
    
    //추가태그 숨기기
    $(".n_bg").hide();
	
    	//하위ul 메뉴 보이기 /숨기기
    $(".submenu").hide();
    $(".drop_top > li").hover(function(){
        $(this).children("ul").show();
        $(".n_bg").show();
    
    },function(){
        $(this).children("ul").hide();
        $(".n_bg").hide();
     return false;
    });
});//end