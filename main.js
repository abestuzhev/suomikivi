$(function(){
    $('.c-select').SumoSelect({

        csvDispCount: 3
    });

    /*простые табы*/
    $(document).on('click', '.tabs-menu a', function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(this).parents('.c-tabs').find(".tab-content").not(tab).css("display", "none");
        // $(this).parents('.tabs-menu').parent().siblings('.tab').find(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });

    $(document).on('click', '.c-filter-mobile__header', function(event) {
        event.preventDefault();
        $('.c-filter-mobile__body').slideToggle(300);
    });

    $('.card-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: false,
        asNavFor: '.card-slider-small',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: true,
                dots: true
              }
            },
            
          ]
    });

    $('.card-slider-small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.card-slider-big',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });
});