$('.banner_main_slider').slick({
    arrows: false,
    dots: true,
    autoplay:false
});

$('.main_slide').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:'<a href="#"><i class="fa-solid fa-angle-left"></i></a>',
    nextArrow:'<a href="#"><i class="fa-solid fa-angle-right"></i></a>',
    centerMode: true,
    centerPadding: '0'
     



});