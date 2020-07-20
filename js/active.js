$(document).ready(function () {
  $("select").niceSelect();

  $(".blog_slider").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // ?Smooth Section for Section

  $('a.section-scroll[href*="#"]:not([href="#"])').on("click", function (
    event
  ) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          750
        );
        return false;
      }
    }
  });

  // ?Smooth Section for Section
  // ?Go_To_Top
  $(".go_top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  $(".go_top").hide();

  $(window).scroll(function () {
    var ourwindow = $(this).scrollTop();
    if (ourwindow < 500) {
      $(".go_top").fadeOut();
    } else {
      $(".go_top").fadeIn();
    }
  });
});

var sideNav = document.getElementById("sideNav");
var openNav = document.getElementById("navOpen");
var loadNav = document.getElementById("navLoader");
var closeNav = document.getElementById("navClose");
var navLayer = document.getElementById("navLayer");

openNav.onclick = function () {
  sideNav.style.left = "0px";
  navLayer.classList.add("active");
};

loadNav.onclick = function () {
  sideNav.style.left = "0px";
  navLayer.classList.add("active");
};

closeNav.onclick = function () {
  sideNav.style.left = "-220px";
  navLayer.classList.remove("active");
};

navLayer.onclick = function () {
  sideNav.style.left = "-220px";
  this.classList.remove("active");
};
