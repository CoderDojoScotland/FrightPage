var ghost = document.getElementsByClassName("ghost-container")[0];
var sound = new Audio("file.wav");
//Shows ghost and plays sound after five seconds
setTimeout(function () {
sound.load();
sound.play();
ghost.style.visibility = "visible";
}, 5000);
//Hides ghost one second after appears
setTimeout(function () {
ghost.style.visibility = "hidden";
}, 6000);

 $("#ghostbutton").click(function(){

      $(".inner").addClass("faded");
      //Shows ghost and plays sound after one second
      setTimeout(showGhost, 1000);

      //Hides ghost 3 seconds after appears
      setTimeout(function () {
        $(".inner").removeClass("faded");
        ghost.style.visibility = "hidden";
      }, 3000);
 });