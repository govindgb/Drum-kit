// var sounds = [ 
//   "sounds/crash.mp3",
//   "sounds/kick-bass.mp3",
//   "sounds/snare.mp3",
//   "sounds/tom-1.mp3",
//   "sounds/tom4.mp3",
// ];
var nuberOfButtons = document.querySelectorAll(".drum").length;
//detect button press
for (var i = 0; i < nuberOfButtons; i++) { 
   
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   
    var checkElement = this.innerHTML;
    mixSound(checkElement);
    addButtonAnimation(checkElement);
  });
  console.log(i);
}
//detect keybord press
document.addEventListener("keydown", function (event) {
  // console.log(event.key);
  mixSound(event.key);
  addButtonAnimation(event.key);
});
function mixSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      console.log(crash);
      crash.play();
      break;
    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
  }
}
function addButtonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  //set time out is funtion that take an funtion as first and than take time that tell us how much tike it take to execute the funtion..
  // setTimeout(removeAni,2000);
  // function removeAni(){
  // document.querySelector("." + currentKey).classList.remove("pressed");
  // }
   setTimeout(function(){
    document.querySelector("." + currentKey).classList.remove("pressed");
   },100);

}

// let audioElement = new Audio(sounds[i]);
// audioElement.play();
