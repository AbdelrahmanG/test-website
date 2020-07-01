/*          HEADER VIDEO PLAY BUTTON            */
var video_container = document.getElementById("header-video-container");
var video = document.getElementById("header-video");
// Event listener for the play/pause button

$(document).ready(function(){
    $('#header-video').on('ended',function(){
      $("#play-pause-button").fadeIn();
    });
  });

video_container.addEventListener("click", function() {
  if (video.paused == true||video.end == true) {
    // Play the video
    video.play();
    // Update the button text to 'Pause'
    $("#play-pause-button").fadeOut();
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    $("#play-pause-button").fadeIn();
  }
});

//     MENU ICON

$(document).ready(function(){
    $('.menu-icon').on('click',function(){
      $(this).toggleClass("fa-bars fa-close");
      $(".header-menu").toggleClass("mobile-menu");
      
    });

  });
// shrinking icon
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $("#header-bar").addClass("bar-scroll");
  } else {
      $("#header-bar").removeClass("bar-scroll");
  }
}
//    MAKE PLACES WIDTH = HEIGHT
