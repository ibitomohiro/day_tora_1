$(function(){
  $('.header-course').click(function(){
    $('.header-toggle').slideToggle();
  });
});

$(function(){
  var pagetop  = $('#page_top');

  pagetop.hide();

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        pagetop.fadeIn();
    } else {
        pagetop.fadeOut();
    }
  });
  pagetop.click(function() {
    $('body, html').animate({ scrollTop: 0 }, 500);
  });
});

$(function () {
  $(".course-item img").click(function () {
      $("#graydisplay").html($(this).prop('outerHTML'));
      $("#graydisplay").fadeIn(200);
  });
  $("#graydisplay, #graydisplay img").click(function () {
      $("#graydisplay").fadeOut(200);
  });
});
