/*function deselect(e) {
    $('.pop').slideFadeToggle(function() {
      e.removeClass('selected');
    });    
  }

  $(function() {    
    $('.pop').slideFadeToggle();
    console.log('load');
  });
  
  $(function() {
    

    $('#contact').on('click', function() {
      if($(this).hasClass('selected')) {
        deselect($(this));               
      } else {
        $(this).addClass('selected');
        $('.pop').slideFadeToggle();
      }
      return false;
    });
  
    $('.close').on('click', function() {
      deselect($('#contact'));
      return false;
    });
  });
  
  $.fn.slideFadeToggle = function(easing, callback) {
    return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
  };
*/

function PopUp(hideOrshow) {
    // if (hideOrshow == 'hide') document.getElementById('popup').style.display = "none";
    // else document.getElementById('popup').removeAttribute('style');
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

/* ----- JavaScript ----- */
window.ready = function () {
    console.log('load');
    modal.style.display = "none";
    // setTimeout(function () {
    //     PopUp('show');
    // }, 5000);
    // /* Cache the popup. */
    // var popup = document.getElementById("popup");
    
    // /* Show the popup. */
    // popup.classList.remove("hidden");
    
    // /* Fade the popup in */
    // setTimeout(()=>popup.classList.add("fade-in"));
    
    // /* Close the popup when a city is selected. */
    // document.getElementById("message_submit").onclick = function () {
    //    /* Fade the popup out */
    //    popup.classList.remove("fade-in");
       
    //    /* Hide the popup. */
    //    setTimeout(()=>popup.classList.add("hidden"), 300);
    // };
  };