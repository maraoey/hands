$(function(){

  $(window).scroll(function(){
    let screenH = $(window).scrollTop()

    if(screenH > 500){
      $('.topB').fadeIn()
    } else {
      $('.topB').fadeOut()
    }
  })

  $('.topB').click(function(){
    $(window).scrollTop(0)
  })



  
  
  $("header nav .mainmenu .m1, .sub").on({
    mouseover:function(){
      $(".sub1").stop().slideDown()
      
    },
    mouseout:function(){
      $(".sub1").stop().slideUp()
    }
  })

  $("header nav .mainmenu .m2, .sub").on({
    mouseover:function(){
      $(".sub2").stop().slideDown()
      
    },
    mouseout:function(){
      $(".sub2").stop().slideUp()
    }
  })

  $("header nav .mainmenu .m3, sub").on({
    mouseover:function(){
      $(".sub3").stop().slideDown()
      
    },
    mouseout:function(){
      $(".sub3").stop().slideUp()
    }
  })

  $("header nav .mainmenu .m4, .sub").on({
    mouseover:function(){
      $(".sub4").stop().slideDown()
      
    },
    mouseout:function(){
      $(".sub4").stop().slideUp()
    }
  })





  $(".menuB").on({
    click:function(){
      $(".mainM").css({left:'0'})
    }
  })

  $(".mainM .close").on({
    click:function(){
      $(".mainM").css({left:'-150%'})
    }
  })

  
});
