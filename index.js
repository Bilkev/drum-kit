const drumButtons = document.querySelectorAll(".drum");

// Function to play the corresponding sound for a given key
const makeSound = (key) => {
  const audioMap = {
    w: "tom-1.mp3",
    a: "tom-2.mp3",
    s: "tom-3.mp3",
    d: "tom-4.mp3",
    j: "snare.mp3",
    k: "crash.mp3",
    l: "kick-bass.mp3",
  };

  const soundFile = audioMap[key];
  if (soundFile) {
    const audio = new Audio(`sounds/${soundFile}`);
    audio.play();
  } else {
    console.log("Invalid key pressed: " + key);
  }
};

// Function to add a button animation when a button is clicked or a key is pressed
const buttonAnimation = (currentKey) => {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton?.classList.add("pressed");

  setTimeout(() => {
    activeButton?.classList.remove("pressed");
  }, 100);
};

// Add click event listeners to all drum buttons
drumButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonInnerHTML = button.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
});

// Add keypress event listener to the whole document
document.addEventListener("keypress", (event) => {
  const key = event.key;
  makeSound(key);
  buttonAnimation(key);
});
