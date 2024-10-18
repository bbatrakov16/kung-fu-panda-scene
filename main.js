// Kung Fu Panda Slideshow / Gallery

// Global Variable
let imgPaths = [
  "po.png",
  "tigress.png",
  "viper.png",
  "monkey.png",
  "mantis.png",
  "crane.png",
];

// Create image gallery
let imgContainerEl = document.getElementById("img-container");
for (let i = 0; i < imgPaths.length; i++) {
  imgContainerEl.innerHTML += "<img src = 'images/" + imgPaths[i] + "'>";
}

// let imgIndex = 0;

// // Event Listeners
// document.getElementById("next").addEventListener("click", nextSlide);
// document.getElementById("prev").addEventListener("click", prevSlide);
// document.getElementById("random").addEventListener("click", randomSlide);

// // Event functions

// // function next slide
// function nextSlide() {
//   // Increment index, loop if necessary
//   imgIndex++;
//   if (imgIndex == imgPaths.length) {
//     imgIndex = 0;
//   }

//   // Display the new image
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }

// // function previous slide
// function prevSlide() {
//   imgIndex--;
//   if (imgIndex == -1) {
//     imgIndex = imgPaths.length - 1;
//   }

//   // Display the new image
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }

// // function random slide
// function randomSlide() {
//   // Get a random number: integer between 0 and up to the length of the array (exclusive)
//   let imgIndex = randomInt(0, imgPaths.length);

//   // Display the new image
//   document.getElementById("characterImg").src = "images/" + imgPaths[imgIndex];
// }
