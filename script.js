
$(document).ready(function () {
  // sticky navbar
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        $(".scroll-up-btn").fadeIn();
      } else {
        $(".scroll-up-btn").fadeOut();
      }
    });
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $("menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["HTML", "CSS", "Javascriptom."],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["HTML", "CSS", "Javascriptom."],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true,
  });

  //slide-up script
  $(".scroll-up-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 200);
    return false;
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
