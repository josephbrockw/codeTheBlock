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

  // Code box animation
  var message = "Learn to program and start building awesome stuff today";

  var space = function() {
    console.log("space");
  }

  var char = function() {
    console.log("char");
  }
  var display = function() {

  var j = 0;

    if (j.length <= message.length) {
      //console.log(message);
      for(i = 0; i < message.length; i++) {
        $(".type").delay(8000).append(message[i]);
        console.log(j);
        j++;
        //console.log(message[i]);
        //if character === " ", wait 400ms
    //     if(message[i] === " ") {
    //       //console.log("space:" + message[i]);
    //       setTimeout(space, 4000);
    //     } else {
    //       //console.log("char:" + message[i]);
    // //      // else, wait 150ms
    //       setTimeout(char, 1000);
    //     }
      }
    }
  }

  $(window).scroll(function() {
    var hT = $('#section-two').offset().top,
        hH = $('#section-two').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
      display();
    }

    //var splitMessage = string.split("");
    //console.log(message);
    // Loop through the array and print each character


  })
});
