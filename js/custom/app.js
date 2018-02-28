$(document).ready(function() {

  // Dropdown Menu for mobile
  $(".menu-icon").click(function(){
    if( $(".main-menu").hasClass("dropdown")) {
      // If menu is visible, hide
      $(".main-menu").removeClass("dropdown");
      $(".main-menu").css("display", "none");
    } else {
      // Else, show menu
      $(".main-menu").addClass("dropdown");
      $(".main-menu").css("display", "inline-block");
      console.log("click");
    }
  });
});
