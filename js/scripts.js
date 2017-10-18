
//allows user to click an animal type and scroll to the page with one click.
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

// Register form.
$("form#register").submit(function(event) {
  event.preventDefault();
  userInput = $("input#signUp").val();
  console.log(userInput);
  $("form").hide();
  $("#greeting").show();
  $("#userInput").text(userInput);
});

$(".clickable-henry").click(function() {
  $(".initially-showing-henry").slideToggle();
  $(".more-info-henry").slideToggle();
});

$(".clickable-allie").click(function() {
  $(".initially-showing-allie").slideToggle();
  $(".more-info-allie").slideToggle();
});

$(".clickable-carlos").click(function() {
  $(".initially-showing-carlos").slideToggle();
  $(".more-info-carlos").slideToggle();
});

$(".clickable-noodle").click(function() {
  $(".initially-showing-noodle").slideToggle();
  $(".more-info-noodle").slideToggle();
});

$(".clickable-penelope").click(function() {
  $(".initially-showing-penelope").slideToggle();
  $(".more-info-penelope").slideToggle();
});

$(".clickable-ash").click(function() {
  $(".initially-showing-ash").slideToggle();
  $(".more-info-ash").slideToggle();
});

$(".clickable-oliver").click(function() {
  $(".initially-showing-oliver").slideToggle();
  $(".more-info-oliver").slideToggle();
});

$(".clickable-moon").click(function() {
  $(".initially-showing-moon").slideToggle();
  $(".more-info-moon").slideToggle();
});


$(".clickable-bun").click(function() {
  $(".initially-showing-bun").slideToggle();
  $(".more-info-bun").slideToggle();
});

$(".clickable-puff").click(function() {
  $(".initially-showing-puff").slideToggle();
  $(".more-info-puff").slideToggle();
});

$(".clickable-cream").click(function() {
  $(".initially-showing-cream").slideToggle();
  $(".more-info-cream").slideToggle();
});

$(".clickable-lily").click(function() {
  $(".initially-showing-lily").slideToggle();
  $(".more-info-lily").slideToggle();
});

$(".clickable-raulf").click(function() {
  $(".initially-showing-raulf").slideToggle();
  $(".more-info-raulf").slideToggle();
});

$(".clickable-peep").click(function() {
  $(".initially-showing-peep").slideToggle();
  $(".more-info-peep").slideToggle();
});

$(".clickable-pinky").click(function() {
  $(".initially-showing-pinky").slideToggle();
  $(".more-info-pinky").slideToggle();
});

$(".clickable-tickles").click(function() {
  $(".initially-showing-tickles").slideToggle();
  $(".more-info-tickles").slideToggle();
});




