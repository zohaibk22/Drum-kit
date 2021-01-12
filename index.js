let element = document.querySelectorAll(".drum");
console.log(element.length);

// for (let i = 0; i < element.length; i++) {
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//     console.log(this.innerHTML);
//     this.style.color = "white";
//     let audio = new Audio("./sounds/tom-1.mp3");
//     audio.play();
//   });
// }

for (let i = 0; i < element.length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let letter = this.innerHTML;

    makeSound(letter);
    buttonAnimation(letter);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  let letter = this.innerHTML;

  switch (key) {
    case "w":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "a":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "s":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "d":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "j":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "k":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log(letter);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  console.log(activeButton);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 2000);
}
