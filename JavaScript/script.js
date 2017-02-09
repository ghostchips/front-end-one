
// ---- CAROUSEL LOGIC ---------->>

// array of image URLs where images are cointained
const images = [
  'Assets/960x470.png', 'Assets/960x470orange.png', 'Assets/960x470red.png'
];

// number that will change in order to change the current image
var imageNumber = 0

// variable that will change when scrolling back and forth in the carousel
var currentImage = images[0];

// function that checks what number image is active and changes navigation points accordingly
function changeNav() {
  if (imageNumber === 0) {
    $('#first').css('color', 'rgb(97,97,97)');
    $('#second').css('color', 'rgb(46,46,46)');
    $('#third').css('color', 'rgb(46,46,46)');
  } else if (imageNumber === 1) {
    $('#first').css('color', 'rgb(46,46,46)');
    $('#second').css('color', 'rgb(97,97,97)');
    $('#third').css('color', 'rgb(46,46,46)');
  } else if (imageNumber === 2) {
    $('#first').css('color', 'rgb(46,46,46)');
    $('#second').css('color', 'rgb(46,46,46)');
    $('#third').css('color', 'rgb(97,97,97)');
  }
}

// function that checks what nav point was clicked and change the carousel image accordingly
function clickNav(clicked) {
  if (clicked === 'first') {
    imageNumber = 0
  } else if (clicked === 'second') {
    imageNumber = 1
  } else if (clicked === 'third') {
    imageNumber = 2
  }
  currentImage = images[imageNumber];
  $('.carousel').css("background-image", `url(${currentImage})`);
}

function changeCarousel(clicked) {
  // check wich direction to move in the images array
  if (clicked === 'left') {
    imageNumber -= 1
  } else if (clicked === 'right') {
    imageNumber += 1
  }
  // check to see if image number has gone outside the array of images
  if (imageNumber < 0) {
    imageNumber = images.length-1
  } else if (imageNumber > images.length-1) {
    imageNumber = 0
  }
  // change carousel background to the current image
  currentImage = images[imageNumber]
  $('.carousel').css("background-image", `url(${currentImage})`);
};

// clicking left the current image will change by moving one left in the images array
$('.left-arrow').click(function(event) {
  changeCarousel(event.target.id);
  changeNav();
});

// clicking right the current image will change by moving one right in the images array
$('.right-arrow').click(function() {
  changeCarousel(event.target.id);
  changeNav();
});

// Clicking nav-points cause carousel to change
$('#first').click(function(event) {
  clickNav(event.target.id);
  changeNav();
});
$('#second').click(function(event) {
  clickNav(event.target.id);
  changeNav();
});
$('#third').click(function(event) {
  clickNav(event.target.id);
  changeNav();
});

// carousel slideshow loop
setInterval(function() {
  changeCarousel('right')
  changeNav();
}, 5000);

// preload each image file, giving 20 milliseconds for each to load
images.forEach(image => {
    $('.carousel-loader').css("background-image", `url(${image})`);
})

// ----------->> CAROUSEL END

// ---- MODAL LOGIC -------->>

$('.image-modal').click(function(event) {
  // get blurb text from clicked image, located in div 'large-image-text' below image
  var $target = $(event.target.lastElementChild);
  var targetBlurb = $target.text();
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
