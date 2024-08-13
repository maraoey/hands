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


  
  
  
  
  
  
  
  
  
  
  $("header nav .mainmenu .m1, .sub1").on({
    mouseover:function(){
      $(".sub1").stop().slideDown()
      
    },
    mouseout:function(){
      $(".sub1").stop().slideUp()
    }
  })
  
  $("header nav .mainmenu .m2, .sub2").on({
    mouseover:function(){
      $(".sub2").stop().slideDown()
      
    },
    mouseout:function(){
      $(".sub2").stop().slideUp()
    }
  })
  
  $("header nav .mainmenu .m3, .sub3").on({
    mouseover:function(){
      $(".sub3").stop().slideDown()
      
    },
    mouseout:function(){
      $(".sub3").stop().slideUp()
    }
  })
  
  $("header nav .mainmenu .m4, .sub4").on({
    mouseover:function(){
      $(".sub4").stop().slideDown()
      
    },
    mouseout:function(){
      $(".sub4").stop().slideUp()
    }
  })
  
  $(".s_classic").on({
    mouseover:function(){
      $(".s_classic a span, .s_classic a h3").css({display:'block'})
    },
    mouseout:function(){
      $(".s_classic a span, .s_classic a h3").css({display:'none'})
    }
  })
  $(".s_flagship").on({
    mouseover:function(){
      $(".s_flagship a span, .s_flagship a h3").css({display:'block'})
    },
    mouseout:function(){
      $(".s_flagship a span, .s_flagship a h3").css({display:'none'})
    }
  })
  $(".s_archin").on({
    mouseover:function(){
      $(".s_archin a span, .s_archin a h3").css({display:'block'})
    },
    mouseout:function(){
      $(".s_archin a span, .s_archin a h3").css({display:'none'})
    }
  })
  
  

  
  
  
  $(".menuB").on({
    click:function(){
      $(".mainM").css({right:'0'})
    }
  })
  
  $(".mainM .close").on({
    click:function(){
      $(".mainM").css({right:'-100%'})
    }
  })
  
  let sHeight = $(window).outerHeight()
  
  if(sHeight < 500){
    $('.mainM').css({padding:'20px'})
    $('.mainM .mainTop').css({marginBottom:'10px'})
    $('.mainM .login2').css({marginBottom:'10px'})
    $('.mainM ul li').css({margin:'25px 0'})
  }
  







});
