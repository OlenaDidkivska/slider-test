$('.variable-width').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true
});

$(document).ready(function() {
  $('.variable-width').slick({
    dots: true,
    dotsClass: "my-dots",
  });
});