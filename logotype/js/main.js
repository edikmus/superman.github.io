$(function(){
$('.slider_inner').slick({
	 prevArrow: "<img src='../img/prev.png' class='prev' alt='1'>",
    nextArrow: "<img src='../img/next.png' class='next' alt='2'>",
    infinite: false,
  });
$('.news_slider-inner').slick({
	 prevArrow: "<i class='fas fa-chevron-left prev_2'></i>",
    nextArrow: "<i class='fas fa-chevron-right next_2'></i>",
    infinite: false,
});

$('.header_menu-btn').on('click', function(){
	$('.header_menu_list').slideToggle();
});

});