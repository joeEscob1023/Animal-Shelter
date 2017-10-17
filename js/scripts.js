$("a").on('click', function(event) {


    if (this.hash !== "") {
      
      event.preventDefault();
     
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

 
        window.location.hash = hash;
      });
    } 
  });


$("form#register").submit(function(event) {
  event.preventDefault();
  userInput = $("input#signUp").val();
  console.log(userInput);
  $("form").hide();
  $("#greeting").show();
  $("#userInput").text(userInput);
});