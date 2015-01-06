//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

var $overlay = $('#overlay');

//Capture the click event on a link to an image
$("a.suscribeModal").click(function(event){
  event.preventDefault();
  console.log("click detected");
  
  //Show the overlay.
  $overlay.show();
});

//When overlay is clicked
$('#close').click(function(){
  //Hide the overlay
  $overlay.hide();
});










