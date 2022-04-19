
var gamePattern = [];
var userClickedPattern= [];
var level=0;
var started=false;
var buttonColors=["red","blue","green","yellow"];

function nextSequence(){
  level ++;
  $("h1").html("Level "+level);
  var random=Math.random();
  var randomNumber= Math.floor(random*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}


$(document).keypress(function(event){
    if(!started){
      $("h1").html("Level "+level);
      nextSequence();
      started= true;
      }
  });

function checkAnswer(currentLevel){
  if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    console.log("success");
  }
  else{
    console.log("wrong");
  }

}

$(".btn").click(function(event){
  var userChosenColor=$(this).attr("id");
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  console.log(userClickedPattern);
})

function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");
  setTimeout(() => {  $("#"+currentColor).removeClass("pressed"); }, 100);
}
