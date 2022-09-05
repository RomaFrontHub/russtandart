$(window).on('load', function() {
    setTimeout(function() {
        $('body').addClass('page-loaded');
    }, 100);
});
$(function() {
    $('.menu-wrapper').on('click', function() {
        $('.hamburger-menu').toggleClass('animate');
        $('.adaptive').slideToggle();
        $('.menu-wrapper').toggleClass('menu-two');
        $('.headerAdaptive-all__bottom').toggleClass('bottom-two');
    });
    $('.swiper-slide').css("backgroundSize", "cover");
    $('.swiper-slide').css("backgroundPosition", "center");
    $('.promo').css("backgroundSize", "cover");
});
//
(function($) {

    var tabs = $(".main-tabs a");

    tabs.click(function() {
        var content = this.hash.replace('/', '');
        tabs.removeClass("active");
        $(this).addClass("active");
        $(".main-inner-two").slideToggle(500);
        $(".main-inner-one").slideToggle(500);
        $(content).fadeIn(200);
    });

})(jQuery);

let lengthTab = $(".main-tabs__item").length

$(".main-tabs__item").each(function(i, e) {
    e.onclick = function() {
        $(".main-tabs__item").removeClass("tab-active")
        $(this).addClass("tab-active")
        const left = (122 / lengthTab * i)
        $(".bg").css("left", `${left}%`)
    }
});
//


$(function() {

    // Vars
    var modBtn = $('.click-modal-one'),
        modal = $('#popup-bg-one'),
        close = modal.find('.close-popup-one'),
        modContent = modal.find('.popup');

    // open modal when click on open modal button 
    modBtn.on('click', function() {
        modal.css('display', 'block');
        $('html').addClass('no-scroll');
        modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });

    // close modal when click on close button or somewhere out the modal content 
    $(document).on('click', function(e) {
        var target = $(e.target);
        if (target.is(modal) || target.is(close)) {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                $('html').removeClass('no-scroll');
                next();
            });
        }
    });

});
$(function() {

    // Vars
    var modBtn = $('.click-modal-two'),
        modal = $('#popup-bg-two'),
        close = modal.find('.close-popup-two'),
        modContent = modal.find('.popup');

    // open modal when click on open modal button 
    modBtn.on('click', function() {
        modal.css('display', 'block');
        $('html').addClass('no-scroll');
        modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });

    // close modal when click on close button or somewhere out the modal content 
    $(document).on('click', function(e) {
        var target = $(e.target);
        if (target.is(modal) || target.is(close)) {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                $('html').removeClass('no-scroll');
                next();
            });
        }
    });

});
$(function() {

    // Vars
    var modBtn = $('.click-modal-three'),
        modal = $('#popup-bg-three'),
        close = modal.find('.close-popup-three'),
        modContent = modal.find('.popup');

    // open modal when click on open modal button 
    modBtn.on('click', function() {
        modal.css('display', 'block');
        $('html').addClass('no-scroll');
        modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });

    // close modal when click on close button or somewhere out the modal content 
    $(document).on('click', function(e) {
        var target = $(e.target);
        if (target.is(modal) || target.is(close)) {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                $('html').removeClass('no-scroll');
                next();
            });
        }
    });

});
$(function() {

    // Vars
    var modBtn = $('.click-modal-four'),
        modal = $('#popup-bg-four'),
        close = modal.find('.close-popup-four'),
        modContent = modal.find('.popup');

    // open modal when click on open modal button 
    modBtn.on('click', function() {
        modal.css('display', 'block');
        $('html').addClass('no-scroll');
        modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });

    // close modal when click on close button or somewhere out the modal content 
    $(document).on('click', function(e) {
        var target = $(e.target);
        if (target.is(modal) || target.is(close)) {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                $('html').removeClass('no-scroll');
                next();
            });
        }
    });

});
$(function() {

    // Vars
    var modBtn = $('.click-modal-five'),
        modal = $('#popup-bg-five'),
        close = modal.find('.close-popup-five'),
        modContent = modal.find('.popup');

    // open modal when click on open modal button 
    modBtn.on('click', function() {
        modal.css('display', 'block');
        $('html').addClass('no-scroll');
        modContent.removeClass('modal-animated-out').addClass('modal-animated-in');
    });

    // close modal when click on close button or somewhere out the modal content 
    $(document).on('click', function(e) {
        var target = $(e.target);
        if (target.is(modal) || target.is(close)) {
            modContent.removeClass('modal-animated-in').addClass('modal-animated-out').delay(300).queue(function(next) {
                modal.css('display', 'none');
                $('html').removeClass('no-scroll');
                next();
            });
        }
    });

});

//
$(function() {
    $("#phone").mask("+7(999) 999-9999");
});
//
$('.tab-two').click(function() {
    $('.tab-two').addClass('tab-active');
    $('.tab-one').removeClass('tab-active');
    $('.bg').addClass('bg-active-two');
    $('.bg').removeClass('bg-active-one');
    $('.main-inner-one').slideUp();
});
$('.tab-one').click(function() {
    $('.tab-one').addClass('tab-active');
    $('.tab-two').removeClass('tab-active');
    $('.bg').addClass('bg-active-one');
    $('.bg').removeClass('bg-active-two');
    $('.main-inner-two').slideUp();
});
//
$('.overlay-open-one').mouseover(function() {
    $('.overlay').css("display", "block");
    $('.overlay').css("position", "absolute");
    $('.overlay').css("zIndex", "2");
    $('.header-all__nav').css("borderRadius", "28px 28px 0 0");
});
$('.overlay-open-one').mouseout(function() {
    $('.overlay').css("display", "none");
    $('.header-all__nav').css("borderRadius", "28px");
});
$('.overlay').mouseover(function() {
    $('.overlay').css("display", "block");
    $('.overlay').css("position", "absolute");
    $('.overlay').css("zIndex", "2");
    $('.header-all__nav').css("borderRadius", "28px 28px 0 0");
});
$('.overlay').mouseout(function() {
    $('.overlay').css("display", "none");
    $('.header-all__nav').css("borderRadius", "28px");
});
$('.overlay').css('top', $('.header').height());


//

$('.overlay-open-two').mouseover(function() {
    $('.overlay-two').css("display", "block");
    $('.overlay-two').css("position", "absolute");
    $('.overlay-two').css("zIndex", "2");
    $('.header-all__nav').css("borderRadius", "28px 28px 0 0");
});
$('.overlay-two').mouseover(function() {
    $('.overlay-two').css("display", "block");
    $('.overlay-two').css("position", "absolute");
    $('.overlay-two').css("zIndex", "2");
    $('.header-all__nav').css("borderRadius", "28px 28px 0 0");
});
$('.overlay-two').mouseout(function() {
    $('.overlay-two').css("display", "none");
    $('.header-all__nav').css("borderRadius", "28px");
});
$('.overlay-open-two').mouseout(function() {
    $('.overlay-two').css("display", "none");
    $('.header-all__nav').css("borderRadius", "28px");
});
$('.overlay-two').css('top', $('.header').height());

//

$('.open-adaptive-one').click(function() {
    $('.open-adaptive-one').toggleClass("open-active");
    $('.overlay-adaptive-one').slideToggle();
    $('.svg-one').toggleClass("svg");
});
$('.open-two').click(function() {
    $('.open-two').toggleClass("open-active-two");
    $('.drop-two').slideToggle();
    $('.svg-three').toggleClass("svg");
});
$('.open-three').click(function() {
    $('.open-three').toggleClass("open-active-two");
    $('.drop-three').slideToggle();
    $('.svg-four').toggleClass("svg");
});
$('.open-four').click(function() {
    $('.open-four').toggleClass("open-active-two");
    $('.drop-four').slideToggle();
    $('.svg-five').toggleClass("svg");
});
$('.open-five').click(function() {
    $('.open-five').toggleClass("open-active-two");
    $('.drop-five').slideToggle();
    $('.svg-six').toggleClass("svg");
});

//

$('.open-adaptive-two').click(function() {
    $('.open-adaptive-two').toggleClass("open-active");
    $('.overlay-adaptive-two').slideToggle();
    $('.svg-seven').toggleClass("svg");
});


let categories = ['.category-one', '.category-two', '.category-three', '.category-four', '.category-five', '.category-six'];
//
$(categories[0]).click(function() {
    $(categories[0]).addClass('category-active');
    $(categories[1]).removeClass('category-active');
    $(categories[2]).removeClass('category-active');
    $(categories[3]).removeClass('category-active');
    $(categories[4]).removeClass('category-active');
    $(categories[5]).removeClass('category-active');
    $('.accordion__item').css('display', 'none');
    $('.category-one-open').css('display', 'block');
});

$(categories[1]).click(function() {
    $(categories[1]).addClass('category-active');
    $(categories[0]).removeClass('category-active');
    $(categories[2]).removeClass('category-active');
    $(categories[3]).removeClass('category-active');
    $(categories[4]).removeClass('category-active');
    $(categories[5]).removeClass('category-active');
    $('.accordion__item').css('display', 'none');
    $('.category-two-open').css('display', 'block');
});

$(categories[2]).click(function() {
    $(categories[2]).addClass('category-active');
    $(categories[1]).removeClass('category-active');
    $(categories[0]).removeClass('category-active');
    $(categories[3]).removeClass('category-active');
    $(categories[4]).removeClass('category-active');
    $(categories[5]).removeClass('category-active');
    $('.accordion__item').css('display', 'none');
    $('.category-three-open').css('display', 'block');
});

$(categories[3]).click(function() {
    $(categories[3]).addClass('category-active');
    $(categories[1]).removeClass('category-active');
    $(categories[2]).removeClass('category-active');
    $(categories[0]).removeClass('category-active');
    $(categories[4]).removeClass('category-active');
    $(categories[5]).removeClass('category-active');
    $('.accordion__item').css('display', 'none');
    $('.category-four-open').css('display', 'block');
});

$(categories[4]).click(function() {
    $(categories[4]).addClass('category-active');
    $(categories[1]).removeClass('category-active');
    $(categories[2]).removeClass('category-active');
    $(categories[3]).removeClass('category-active');
    $(categories[0]).removeClass('category-active');
    $(categories[5]).removeClass('category-active');
    $('.accordion__item').css('display', 'none');
    $('.category-five-open').css('display', 'block');
});

$(categories[5]).click(function() {
    $(categories[5]).addClass('category-active');
    $(categories[1]).removeClass('category-active');
    $(categories[2]).removeClass('category-active');
    $(categories[3]).removeClass('category-active');
    $(categories[4]).removeClass('category-active');
    $(categories[0]).removeClass('category-active');
    $('.accordion__item').css('display', 'none');
    $('.category-six-open').css('display', 'block');
});
//

var accordion = (function() {

    var $accordion = $('.js-accordion');
    var $accordion_header = $accordion.find('.js-accordion-header');
    var $accordion_item = $('.js-accordion-item');

    // default settings 
    var settings = {
        // animation speed
        speed: 400,

        // close all other accordion items if true
        oneOpen: false
    };

    return {
        // pass configurable object literal
        init: function($settings) {
            $accordion_header.on('click', function() {
                accordion.toggle($(this));
            });

            $.extend(settings, $settings);

            // ensure only one accordion is active if oneOpen is true
            if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
                $('.js-accordion-item.active:not(:first)').removeClass('active');
            }

            // reveal the active accordion bodies
            $('.js-accordion-item.active').find('> .js-accordion-body').show();
        },
        toggle: function($this) {

            // if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
            //     $this.closest('.js-accordion')
            //         .find('> .js-accordion-item')
            //         .removeClass('active')
            //         .find('.js-accordion-body')
            //         .slideUp()
            // }

            // show/hide the clicked accordion item
            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
        }
    }
})();

$('.header-one').click(function() {
    $('.svg-one').toggleClass("svg");
});
$('.header-two').click(function() {
    $('.svg-two').toggleClass("svg");
});
$('.header-three').click(function() {
    $('.svg-three').toggleClass("svg");
});
$('.header-four').click(function() {
    $('.svg-four').toggleClass("svg");
});
$('.header-five').click(function() {
    $('.svg-five').toggleClass("svg");
});
$('.header-six').click(function() {
    $('.svg-six').toggleClass("svg");
});
$('.header-seven').click(function() {
    $('.svg-seven').toggleClass("svg");
});
$('.header-eight').click(function() {
    $('.svg-eight').toggleClass("svg");
});
$('.header-nine').click(function() {
    $('.svg-nine').toggleClass("svg");
});
$('.header-ten').click(function() {
    $('.svg-ten').toggleClass("svg");
});
$('.header-eleven').click(function() {
    $('.svg-eleven').toggleClass("svg");
});
$('.header-twelve').click(function() {
    $('.svg-twelve').toggleClass("svg");
});
$('.header-thirteen').click(function() {
    $('.svg-thirteen').toggleClass("svg");
});
$('.header-fourteen').click(function() {
    $('.svg-fourteen').toggleClass("svg");
});
$('.header-fifteen').click(function() {
    $('.svg-fifteen').toggleClass("svg");
});
$('.header-sixteen').click(function() {
    $('.svg-sixteen').toggleClass("svg");
});
$('.header-seventeen').click(function() {
    $('.svg-seventeen').toggleClass("svg");
});
$('.header-eighteen').click(function() {
    $('.svg-eighteen').toggleClass("svg");
});
$('.header-nineteen').click(function() {
    $('.svg-nineteen').toggleClass("svg");
});
$('.header-twenty').click(function() {
    $('.svg-twenty').toggleClass("svg");
});
$('.header-twentyone').click(function() {
    $('.svg-twentyone').toggleClass("svg");
});
$('.header-twentytwo').click(function() {
    $('.svg-twentytwo').toggleClass("svg");
});
$('.header-twentythree').click(function() {
    $('.svg-twentythree').toggleClass("svg");
});
$('.header-twentyfour').click(function() {
    $('.svg-twentyfour').toggleClass("svg");
});
$('.header-twentyfive').click(function() {
    $('.svg-twentyfive').toggleClass("svg");
});


$(document).ready(function() {
    accordion.init({ speed: 300, oneOpen: true });
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: 'true',
        mousewheel: false
    }
});
const swiperTwo = new Swiper('.swiper-two', {
    direction: 'horizontal',
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        }
    }
});