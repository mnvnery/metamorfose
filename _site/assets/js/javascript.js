/* Mobile Navbar */

function openNav() {
  document.getElementById("Sidenav").style.display = "block";
}


function closeNav() {
  document.getElementById("Sidenav").style.display = "none";
}

/* Random Images */
const imageLeft = new Array ();
imageLeft[0] = "images/Press_1.jpg";
imageLeft[1] = "images/Press_2.jpg";
imageLeft[2] = "images/Press_3.jpg";
imageLeft[3] = "images/Press_4.jpg";
imageLeft[4] = "images/Press_5.jpg";
imageLeft[5] = "images/Press_6.jpg";
const size = imageLeft.length
const x = Math.floor(size*Math.random())

const imageRight = new Array ();
imageRight[0] = "images/Press_7.jpg";
imageRight[1] = "images/Press_8.jpg";
imageRight[2] = "images/Press_9.jpg";
imageRight[3] = "images/Press_10.jpg";
imageRight[4] = "images/Press_11.jpg";
imageRight[5] = "images/Press_12.jpg";
imageRight[6] = "images/Press_13.jpg";
const sizeY = imageRight.length
const y = Math.floor(sizeY*Math.random())

$(document).ready(function(){
 $('#leftImages').attr('src',imageLeft[x]);
 $('#rightImages').attr('src',imageRight[y]);
});

/* Stories */

  $('.showSingle').click(function(event) {
    if (window.matchMedia('(min-width: 600px)').matches) {
      $('.stories-description').addClass('disable');
      $('.targetDiv').addClass('disable');
      $('#div' + $(this).attr('target')).removeClass('disable');
      $('.showSingle').removeClass('white-border');
      $(this).addClass('white-border');
      event.stopPropagation();
    } else {
    }
  });

  $(window).click(function() {
    if (window.matchMedia('(min-width: 600px)').matches) {
      $('.stories-description').removeClass('disable');
      $('.targetDiv').addClass('disable');
      $('.showSingle').removeClass('white-border');
    } else {
    }
  });

  // Make the DIV element draggable:

  $(function() {
    if (window.matchMedia('(min-width: 600px)').matches) {
        $(".stories-image").draggable();
    } else {
        //...
    }

  });

  $('.modal').on('shown.bs.modal', function () {
    var width = $(window).width();
    if(width > 600){
        $('.mobile').modal('hide')
    }
});

  (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
  fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

