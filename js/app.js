$( document ).ready(function() {

   // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
  });


  //Shows paragraphs, then hides them all, back and forth.


    $(".collapsible1").click(function(){  
      this.classList.toggle("active");
      $(".content_1").toggle();
    });

    $(".collapsible2").click(function(){  
      this.classList.toggle("active");
      $(".content_2").toggle();
    });

    $(".collapsible3").click(function(){  
      this.classList.toggle("active");
      $(".content_3").toggle();
    });

    $(".collapsible4").click(function(){  
      this.classList.toggle("active");
      $(".content_4").toggle();
    });

    $(".collapsible5").click(function(){  
      this.classList.toggle("active");
      $(".content_5").toggle();
    });

    $(".collapsible6").click(function(){  
      this.classList.toggle("active");
      $(".content_6").toggle();
    });



  // function to smooth the top nav link clicks
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
        &&
        location.hostname === this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) { // Checking if the target was focused
              return false;
            } else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });

  // back to the top button function



  if ($('#back-to-top').length) {
    const scrollTrigger = 100, // px
      backToTop = function () {
        const scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  }


});
