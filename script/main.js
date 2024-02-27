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


  
  $("header nav .mainmenu li:nth-child(1)").on({
    mouseover:function(){
      $("header .sub1", this).css({display:'block'})
    },
    mouseout:function(){
      $("header .sub1",this).css({display:'none'})
    }
  })

  $("header nav .mainmenu li:nth-child(2)").on({
    mouseover:function(){
      $("header .sub2", this).css({display:'block'})
    },
    mouseout:function(){
      $("header .sub2",this).css({display:'none'})
    }
  })

  $("header nav .mainmenu li:nth-child(3)").on({
    mouseover:function(){
      $("header .sub3", this).css({display:'block'})
    },
    mouseout:function(){
      $("header .sub3",this).css({display:'none'})
    }
  })

  $("header nav .mainmenu li:nth-child(4)").on({
    mouseover:function(){
      $("header .sub4", this).css({display:'block'})
    },
    mouseout:function(){
      $("header .sub4",this).css({display:'none'})
    }
  })

  
});
