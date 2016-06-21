
var ps = $(".section p")


var accordian = function(event) {
  $('p').addClass('inactive'); /// Make all divs close
  var p = $(this).siblings("p");/// then make the one you clicked open
  p.toggleClass("inactive");
}

$(".section h2").on('click', accordian);


// if clicked class includes "inactive"
//   remove inactive class to clicked
//   add inactive class to not clicked
// if clicked class does not include "inactive"
//   