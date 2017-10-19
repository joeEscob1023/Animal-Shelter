
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

function User(userName) {
  this.userName = userName;
}

User.prototype.userName = function() {
  return this.userName;
}

function Animal(animalName) {
  this.animalName = animalName; 
}

Animal.prototype.adoptionForm = function() {
  return this.animalName;
}

// Register form.
$("form#register").submit(function(event) {
  event.preventDefault();
  var userInput = $("input#signUp").val();
  $("form").hide();
  $("#greeting").show();
  $("#userInput").text(userInput);
  var newUser = new User(userInput);
  // testing ---> console.log(newUser);
});


var animalNames = [
  'henry', 'allie', 'carlos', 'noodle', 
  'penelope', 'ash', 'oliver', 'moon', 
  'bun', 'puff', 'cream', 'lily', 
  'raulf', 'peep', 'pinky', 'tickles'
];

animalNames.forEach(function(name) {
  $(`button#${name}`).click(function() {
    var animalName = $(`button#${name}`).val();
    console.log(animalName);
    $(this).css("color", 'yellow');
    var adoptionRequest = new Animal(animalName);
    console.log(adoptionRequest);
  });

//trying to get this to work so I dont have to write it over and over again, it half way works, but until i figure it out, have to be repetitive.

//   $(`.clickable-${name}`).click(function() {
//   $(`.initially-showing-${name}`).slideToggle();
//   $(`more-info-${name}`).slideToggle();
//   console.log(name);
// });
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






