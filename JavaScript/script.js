
// array of image URLs where images are cointained
const images = [
  'Assets/900x600.png', 'Assets/900x600aqua.png', 'Assets/900x600blue.png', 'Assets/900x600purple.png', 'Assets/900x600red.png'
];

// number that will change in order to change the current image
var imageNumber = 0

// variable that will change when scrolling back and forth in the carousel
var currentImage = images[0];

// clicking left the current image will change by moving one left in the images array
$('.left-arrow').click(function() {
imageNumber -= 1
if (imageNumber < 0) {
  imageNumber = images.length-1
}
// change the carousel background to the currentImage
currentImage = images[imageNumber]
$('.carousel').css("background-image", `url(${currentImage})`);
});

// clicking right the current image will change by moving one right in the images array
$('.right-arrow').click(function() {
  imageNumber += 1
  if (imageNumber > images.length-1) {
    imageNumber = 0
  }
  currentImage = images[imageNumber]
  $('.carousel').css("background-image", `url(${currentImage})`);
});
