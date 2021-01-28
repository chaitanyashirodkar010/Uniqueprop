$(document).ready(function ($) {
  $(".counter").counterUp({
    delay: 5,
    time: 1000,
  });
});

var rellax = new Rellax(".rellax");

$(document).ready(function () {
  var owl = $("#testimonial.owl-carousel");
  owl.owlCarousel({
    margin: 10,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $(".customNextBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel", [300]);
    return false;
  });

  $(".customPrevBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("prev.owl.carousel", [300]);
    return false;
  });
});

AOS.init();

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

$(document).ready(function () {
  var owl = $("#articles.owl-carousel");
  owl.owlCarousel({
    margin: 30,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
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

  $(".customNextBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel", [300]);
    return false;
  });

  $(".customPrevBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("prev.owl.carousel", [300]);
    return false;
  });
});

$(document).ready(function () {
  $(".guides .col-md-4").hover(function () {
    $(".guides .col-md-4 .item2").removeClass("bg");
  });
});

$(document).ready(function () {
  var owl = $("#team.owl-carousel");
  owl.owlCarousel({
    margin: 30,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#team .customNextBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel", [300]);
    return false;
  });

  $("#team .customPrevBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("prev.owl.carousel", [300]);
    return false;
  });
});

$(document).ready(function () {
  var owl = $("#img-slider.owl-carousel");
  owl.owlCarousel({
    margin: 10,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });

  $("#team .customNextBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel", [300]);
    return false;
  });

  $("#team .customPrevBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("prev.owl.carousel", [300]);
    return false;
  });
});

$(document).ready(function () {
  var owl = $("#cards.owl-carousel");
  owl.owlCarousel({
    margin: 30,
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#team .customNextBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel", [300]);
    return false;
  });

  $("#team .customPrevBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("prev.owl.carousel", [300]);
    return false;
  });
});

$(document).ready(function () {
  var owl = $("#why-choose-us.owl-carousel");
  owl.owlCarousel({
    margin: 0,
    loop: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  $("#team .customNextBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel", [300]);
    return false;
  });

  $("#team .customPrevBtn").click(function (e) {
    e.preventDefault();
    owl.trigger("prev.owl.carousel", [300]);
    return false;
  });
});
