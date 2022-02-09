var len = document.querySelectorAll(".drum").length;
for (i = 0; i < len; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var word = this.innerHTML;
    playSound(word);
    colorChange(word);
  //this.classList.add("color-change");
  //this.classList.remove("color-change");
  /*var timeout = setTimeout(changeColor,500);
  function changeColor{
    this.classList.remove("color-change");*/
  });

}

document.addEventListener("keypress", function(event) {
playSound(event.key);
colorChange(event.key);
});

function playSound(key) {


  switch (key) {
    case "w":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;
    default:
      alert("Entered a wrong key");

  }
}

function colorChange(keypressed){

  //console.log(class_name);
  var select = document.getElementsByClassName("."+keypressed);
  select.classList.add("pressed");
  //console.log();
  //selector.classList.add("change");

}
