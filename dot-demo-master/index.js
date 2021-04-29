$(".btm").click(function() {
    $('html, body').animate({
        scrollTop: $("#checkout").offset().top
    }, 50);
});
  $(document).ready(function(){
    //   console.log('hello');
      $('#myModal').modal('show')
  })

  $('.xyz').click(function(){
    // console.log('hello');
    $('#myModal').modal('hide')
  })
//   $('input').click(function(){
//     console.log('helloww');
//     $(this).addClass("main-border")
//   })
//   $(document).click(function(){
//       $('input').removeClass("main-border");
//   })
jQuery(document).ready(function($) {

    $("input").focus(function(){
     
      $(this).addClass("main-border");
    //   console.log("add");
   
     }).blur(function(){
          $(this).removeClass("main-border");
        // console.log("remove");
     })
   
   });    
   