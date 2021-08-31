/* Mobile Navbar */

function openNav() {
  document.getElementById("Sidenav").style.display = "block";
}


function closeNav() {
  document.getElementById("Sidenav").style.display = "none";
}

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

