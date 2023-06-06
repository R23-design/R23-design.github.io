$(function(){
  let pagetop = $('#to-top');
  pagetop.hide();
  $(window).scroll(function() {
    if($(this).scrollTop() > 500) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function() {
    $('body,html').animate({scrollTop: 0}, 500);
    return false;
  });
});
$(function(){
  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
  });
})
