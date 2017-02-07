
// ---- CAROUSEL LOGIC ---------->>

// array of image URLs where images are cointained
const images = [
  'Assets/960x470.png', 'Assets/960x470orange.png', 'Assets/960x470red.png'
];

// number that will change in order to change the current image
var imageNumber = 0

// variable that will change when scrolling back and forth in the carousel
var currentImage = images[0];

// preload each image file, giving 20 milliseconds for each to load
images.forEach(image => {
  setTimeout(function() {
    $('.carousel-loader').css("background-image", `url(${image})`);
  }, 200);
})

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
// ----------->> CAROUSEL END

// ---- MODAL LOGIC -------->>

$('.image-modal').click(function(event) {
  // get blurb text from clicked image
  var $target = $(event.target);
  var targetBlurb = $target.text();
  console.log(targetBlurb);
  // set blurb text onto the modal
  $('.modal-text').html(`<p>${targetBlurb}</p>`);
  // reveal modal and darkened background
  $('.black-out').show();
  $('.modal').show();
});

// hide modal by clicking darkened background
$('.black-out').click(function() {
  $('.modal').hide();
  $('.black-out').hide();
});
// hide modal by clicking the 'x'
$('#close').click(function() {
  $('.modal').hide();
  $('.black-out').hide();
});
