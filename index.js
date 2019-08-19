var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStart =false;




var buttonColours = ["red", "blue", "green", "yellow"];

function playSound(name)
{
  var audio = new Audio("sounds/" +name +".mp3");
  audio.play();
}


function nextSequence() {
  userClickedPattern = [];

 randomNumber = Math.floor(Math.random() * 4);




  var randomChosenColour = buttonColours[randomNumber];

  $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);


  gamePattern.push(randomChosenColour);

  playSound(randomChosenColour);
    $("h1").text("level "+ level);
  level++;

}

// starting the game
$(document).keydown(function()
{
  if(gameStart==false)

  {nextSequence();
  gameStart = true;

  }
});


$("h1").click(function()

{
  if(gameStart==false)

  {nextSequence();
  gameStart = true;
 }
});




$(".btn").click(function(event)
{


// checking the answer

function checkAnswer(currentLevel)
{
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
    if (userClickedPattern.length === gamePattern.length){

      //5. Call nextSequence() after a 1000 millisecond delay.
      setTimeout(function () {
        nextSequence();
      }, 1000);

}

}
  else
  {console.log("failure");
 $("body").addClass("game-over");
 $("h1").text("Game over, Press Any Key to Restart")
  var audio = new Audio("sounds/wrong.mp3")
  audio.play();
 setTimeout(function () {
  $("body").removeClass("game-over");
}, 200);

startOver();
}
}

var userChosenColour = (event.target.id);
console.log(userChosenColour);
userClickedPattern.push(userChosenColour);

playSound(event.target.id);
animatePress(userChosenColour);

checkAnswer(userClickedPattern.length-1);

});




function animatePress(currentColor)
{

 $("#" + currentColor).addClass("pressed");


 setTimeout(function () {
   $("#" + currentColor).removeClass("pressed");
 }, 100);

}



// to start again
function startOver()
{
  level = 0;
  gamePattern = [];
  gameStart = false;
}
