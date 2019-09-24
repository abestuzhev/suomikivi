$(function(){

    function selectInit(){
        $('.c-select').SumoSelect({
            csvDispCount: 3
        });
    }
    selectInit();
    

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

    function mobileTabs(){

        $('.v2 .tabs-menu__item').each(function(){
            var tab = $(this).find('a').attr("href");
            $(this).append($(tab));
        });
    };

    function mobileTabsDestroy(){

        $('.v2 .tabs-menu__item').each(function(){
            var tab = $(this).find('a').attr("href");
            $(this).parents('.c-tabs').find('.tab').append($(tab));
            if($(this).hasClass('current')){
                var tabLink = $(this).find('a').attr("href");
                $(this).parents('.c-tabs').find(tabLink).css("display", "block");
            }

        });
    };

    if ($(window).width() < 520) {
        mobileTabs();
    }

    $(window).resize(function() {
        if ($(window).width() < 520) {
            mobileTabs();
        }else {
            mobileTabsDestroy();
        }
    });


    // $(document).on('click', '.tabs-menu a', function(event) {
    //     event.preventDefault();
    //     $(this).parents('.tabs-menu__item').find('.tab-content').slideToggle();
    //
    // });

    $(document).on('click', '.c-filter-mobile__header', function(event) {
        event.preventDefault();
        $('.c-filter-mobile__body').slideToggle(300);
        $(this).toggleClass('active');
        selectInit();


    });

    $('.card-slider-big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // centerMode: true,
        fade: true,
        dots: false,
        asNavFor: '.card-slider-small',
        responsive: [
            {
              breakpoint: 992,
              settings: {
                arrows: true
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

    $(window).on("load",function(){
        $(".options").mCustomScrollbar();

        // setTimeout(function(){
        //     console.log('hello');
        // }, 1000);
    });





    /*--------*/
    /*--------*/
    /*--------*/
    /* слайдер цен */
    function rangeSlider(slide, minValue, maxValue, maxDefault){
        $(slide).slider({
            min: 0,
            max: maxDefault,
            values: [0,maxDefault],
            range: true,
            stop: function(event, ui) {
                $(minValue).val($(slide).slider("values",0));
                $(maxValue).val($(slide).slider("values",1));

            },
            slide: function(event, ui){
                $(minValue).val($(slide).slider("values",0));
                $(maxValue).val($(slide).slider("values",1));
            }
        });

        $(minValue).on('change', function(){

            var value1=$(minValue).val();
            var value2=$(maxValue).val();

            if(parseInt(value1) > parseInt(value2)){
                value1 = value2;
                $(minValue).val(value1);
            }
            $(slide).slider("values",0,value1);
        });




        $(maxValue).on('change', function(){

            var value1=$(minValue).val();
            var value2=$(maxValue).val();

            if (value2 > maxDefault) {
                value2 = maxDefault;
                $(maxValue).val(maxDefault)
            }

            if(parseInt(value1) > parseInt(value2)){
                value2 = value1;
                $(maxValue).val(value2);
            }
            $(slide).slider("values",1,value2);
        });



// фильтрация ввода в поля
        $('input').keypress(function(event){
            var key, keyChar;
            if(!event) var event = window.event;

            if (event.keyCode) key = event.keyCode;
            else if(event.which) key = event.which;

            if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
            keyChar=String.fromCharCode(key);

            if(!/\d/.test(keyChar))	return false;

        });
    }

    rangeSlider('#slider-price', '#minCost-price', '#maxCost-price', 9999);
    rangeSlider('#slider-price2', '#minCost-price2', '#maxCost-price2', 9999);



    /*--------*/





});