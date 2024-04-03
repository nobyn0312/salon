// accordion
$(function () {
  if (window.matchMedia("(max-width:767px)").matches) {
    $(".accordion_content").css("display", "none");
    $(".js_accordion_title").on("click", function () {
      // open
      $("accordion_title").not(this).removeClass("open");
      $(".js_accordion_title").not(this).next().slideUp(300);
      $(this).toggleClass("open");
      $(this).next().slideToggle(300);
    });
  }
});

// スマホ100vh
// $(document).ready(function () {
//   var heightSize = $(window).height();
//   $("#top").height(heightSize);
// });

// $(function(){
//   $('nav a').on('click',function(){
//     $('.js_accordion_title').on('clic');
// })
// })

// bxslider
$(function () {
  $(document).ready(function () {
    $(".bxslider").bxSlider({
      auto: true,
      mode: "fade",
      pager: false,
      controls: false,
    });
  });
});

// navigation
$(function () {
  $("nav a").on("touchstart", function (event) {
    $(".spbtn").trigger("click");
  });

  $(".spbtn").on("touchstart", function () {
    $(".spbtn,.btn-line").toggleClass("open");
    $("nav").toggleClass("slide");
  });
});

$(document).on("click", function (event) {
  if (!$(event.target).closest(".spbtn").length) {
    $("nav").removeClass("slide");
    $(".spbtn,.btn-line").removeClass("open");
  }
});

// pagetop
$(function () {
  if (window.matchMedia("(min-width:767px)").matches) {
    $(".pagetop").on("click", function () {
      $("html").animate({ scrollTop: 0 }, 500);
    });
    $(window).on("scroll", function () {
      let sc_pos = $(window).scrollTop();
      if (800 < sc_pos) {
        $(".pagetop").fadeIn();
      } else {
        $(".pagetop").fadeOut();
      }
    });
  }

  // スクロールバーの位置判別
});

// scroll
$(function () {
  $("nav a,h1 a").on("click", function () {
    var target = $(this).attr("href");
    var moveTop = $(target).offset();
    $("html,body").animate({ scrollTop: moveTop.top - 85 }, 800, "swing");
  });
});

// mobile 100vh
$(function () {
  if (window.matchMedia("(max-width:767px)").matches) {
    $(".top ,main").addClass("mobilewindow");
  }
});

// modal

$(function () {
  $(".popup_href a.open-modal").click();

  $("a.open-modal").on("click", function (event) {
    $(this).modal({
      fadeDuration: 200,
    });
    return false;
  });
});

$(function () {
  $("a.open-modal").on("click", function (event) {
    $(this).modal({
      fadeDuration: 200,
    });
    return false;
  });
});

// scrollreveal
// $(function(){
//     if (window.matchMedia( "(min-width:767px)" ).matches) {
//        ScrollReveal().reveal('.box', {
//         duration: 800,
//         reset: true
//       });
//     }
// })

// ScrollReveal().reveal('.box',{
//     duration:1000,

// });

$(function () {
  if (window.matchMedia("(min-width:767px)").matches) {
    window.sr = ScrollReveal();
    sr.reveal(".bxslider");
  }
});

$(function () {
  if (window.matchMedia("(min-width: 768px)").matches) {
    ScrollReveal().reveal(".box", {
      duration: 1000,
    });
  } else {
    // スマホ表示の時の処理
    $(function () {
      $(".box").removeClass("box");
    });
  }
});

// window.onload = function() {
//     const spinner = document.getElementById('loading');
//     spinner.classList.add('loaded');
//   }
