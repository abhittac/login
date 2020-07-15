$(document).ready(function () {
  
  $("#submit").click((e)=>{

    if($("input:eq(0)").val().length===0){
    $("input:eq(0)").addClass("empty").removeAttr("placeholder")
    $(".alert1").css("display","block")
    $(".error1").css("display","block")
    $("#submit").removeClass("empty")
    
    e.preventDefault()
    }
    if($("input:eq(1)").val().length===0){
      $("input:eq(1)").addClass("empty")
      $("input:eq(1)").removeAttr("placeholder")
      
      $(".alert2").css("display","block")
      $(".error2").css("display","block")
      $("#submit").removeClass("empty")
      
      e.preventDefault()
      }
      if($("input:eq(2)").val().length===0){
        $("input:eq(2)").addClass("empty").removeAttr("placeholder")
        $(".alert3").css("display","block")
        $(".error3").css("display","block")
        $("#submit").removeClass("empty")
        
        e.preventDefault()
        }
        if($("input:eq(3)").val().length===0){
          $("input:eq(3)").addClass("empty").removeAttr("placeholder")
          $(".alert4").css("display","block")
          $(".error4").css("display","block")
          $("#submit").removeClass("empty")
          
          e.preventDefault()
          }
        
  })


});