$(function() {
  $(".toggles button").click(function() {
    const get_id = this.id;
    const get_current = $(`.posts .` + get_id);

    $(".post").not(get_current).hide(500);
    get_current.show(500);
  });

  $("#showAllButton").click(function() {
    $(".post").show(500);
  })
});

$(document).ready(function(){

  $(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout:2000,
    responsive: {
      0: {
        items: 3,
      },
      420: {
        items: 5,
      },
      768: {
        items: 8,
      }
    }
  });

});