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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3BhZ2UtbG9hZGVkJyk7XHJcbiAgICB9LCAxMDApO1xyXG59KTtcclxuJChmdW5jdGlvbigpIHtcclxuICAgICQoJy5tZW51LXdyYXBwZXInKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCcuaGFtYnVyZ2VyLW1lbnUnKS50b2dnbGVDbGFzcygnYW5pbWF0ZScpO1xyXG4gICAgICAgICQoJy5hZGFwdGl2ZScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAgICAgJCgnLm1lbnUtd3JhcHBlcicpLnRvZ2dsZUNsYXNzKCdtZW51LXR3bycpO1xyXG4gICAgICAgICQoJy5oZWFkZXJBZGFwdGl2ZS1hbGxfX2JvdHRvbScpLnRvZ2dsZUNsYXNzKCdib3R0b20tdHdvJyk7XHJcbiAgICB9KTtcclxuICAgICQoJy5zd2lwZXItc2xpZGUnKS5jc3MoXCJiYWNrZ3JvdW5kU2l6ZVwiLCBcImNvdmVyXCIpO1xyXG4gICAgJCgnLnN3aXBlci1zbGlkZScpLmNzcyhcImJhY2tncm91bmRQb3NpdGlvblwiLCBcImNlbnRlclwiKTtcclxuICAgICQoJy5wcm9tbycpLmNzcyhcImJhY2tncm91bmRTaXplXCIsIFwiY292ZXJcIik7XHJcbn0pO1xyXG4vL1xyXG4oZnVuY3Rpb24oJCkge1xyXG5cclxuICAgIHZhciB0YWJzID0gJChcIi5tYWluLXRhYnMgYVwiKTtcclxuXHJcbiAgICB0YWJzLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gdGhpcy5oYXNoLnJlcGxhY2UoJy8nLCAnJyk7XHJcbiAgICAgICAgdGFicy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIubWFpbi1pbm5lci10d29cIikuc2xpZGVUb2dnbGUoNTAwKTtcclxuICAgICAgICAkKFwiLm1haW4taW5uZXItb25lXCIpLnNsaWRlVG9nZ2xlKDUwMCk7XHJcbiAgICAgICAgJChjb250ZW50KS5mYWRlSW4oMjAwKTtcclxuICAgIH0pO1xyXG5cclxufSkoalF1ZXJ5KTtcclxuXHJcbmxldCBsZW5ndGhUYWIgPSAkKFwiLm1haW4tdGFic19faXRlbVwiKS5sZW5ndGhcclxuXHJcbiQoXCIubWFpbi10YWJzX19pdGVtXCIpLmVhY2goZnVuY3Rpb24oaSwgZSkge1xyXG4gICAgZS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgJChcIi5tYWluLXRhYnNfX2l0ZW1cIikucmVtb3ZlQ2xhc3MoXCJ0YWItYWN0aXZlXCIpXHJcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcInRhYi1hY3RpdmVcIilcclxuICAgICAgICBjb25zdCBsZWZ0ID0gKDEyMiAvIGxlbmd0aFRhYiAqIGkpXHJcbiAgICAgICAgJChcIi5iZ1wiKS5jc3MoXCJsZWZ0XCIsIGAke2xlZnR9JWApXHJcbiAgICB9XHJcbn0pO1xyXG4vL1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gVmFyc1xyXG4gICAgdmFyIG1vZEJ0biA9ICQoJy5jbGljay1tb2RhbC1vbmUnKSxcclxuICAgICAgICBtb2RhbCA9ICQoJyNwb3B1cC1iZy1vbmUnKSxcclxuICAgICAgICBjbG9zZSA9IG1vZGFsLmZpbmQoJy5jbG9zZS1wb3B1cC1vbmUnKSxcclxuICAgICAgICBtb2RDb250ZW50ID0gbW9kYWwuZmluZCgnLnBvcHVwJyk7XHJcblxyXG4gICAgLy8gb3BlbiBtb2RhbCB3aGVuIGNsaWNrIG9uIG9wZW4gbW9kYWwgYnV0dG9uIFxyXG4gICAgbW9kQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgbW9kQ29udGVudC5yZW1vdmVDbGFzcygnbW9kYWwtYW5pbWF0ZWQtb3V0JykuYWRkQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLWluJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIG9uIGNsb3NlIGJ1dHRvbiBvciBzb21ld2hlcmUgb3V0IHRoZSBtb2RhbCBjb250ZW50IFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBpZiAodGFyZ2V0LmlzKG1vZGFsKSB8fCB0YXJnZXQuaXMoY2xvc2UpKSB7XHJcbiAgICAgICAgICAgIG1vZENvbnRlbnQucmVtb3ZlQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLWluJykuYWRkQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLW91dCcpLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24obmV4dCkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7XHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gVmFyc1xyXG4gICAgdmFyIG1vZEJ0biA9ICQoJy5jbGljay1tb2RhbC10d28nKSxcclxuICAgICAgICBtb2RhbCA9ICQoJyNwb3B1cC1iZy10d28nKSxcclxuICAgICAgICBjbG9zZSA9IG1vZGFsLmZpbmQoJy5jbG9zZS1wb3B1cC10d28nKSxcclxuICAgICAgICBtb2RDb250ZW50ID0gbW9kYWwuZmluZCgnLnBvcHVwJyk7XHJcblxyXG4gICAgLy8gb3BlbiBtb2RhbCB3aGVuIGNsaWNrIG9uIG9wZW4gbW9kYWwgYnV0dG9uIFxyXG4gICAgbW9kQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgbW9kQ29udGVudC5yZW1vdmVDbGFzcygnbW9kYWwtYW5pbWF0ZWQtb3V0JykuYWRkQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLWluJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIG9uIGNsb3NlIGJ1dHRvbiBvciBzb21ld2hlcmUgb3V0IHRoZSBtb2RhbCBjb250ZW50IFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBpZiAodGFyZ2V0LmlzKG1vZGFsKSB8fCB0YXJnZXQuaXMoY2xvc2UpKSB7XHJcbiAgICAgICAgICAgIG1vZENvbnRlbnQucmVtb3ZlQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLWluJykuYWRkQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLW91dCcpLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24obmV4dCkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7XHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gVmFyc1xyXG4gICAgdmFyIG1vZEJ0biA9ICQoJy5jbGljay1tb2RhbC10aHJlZScpLFxyXG4gICAgICAgIG1vZGFsID0gJCgnI3BvcHVwLWJnLXRocmVlJyksXHJcbiAgICAgICAgY2xvc2UgPSBtb2RhbC5maW5kKCcuY2xvc2UtcG9wdXAtdGhyZWUnKSxcclxuICAgICAgICBtb2RDb250ZW50ID0gbW9kYWwuZmluZCgnLnBvcHVwJyk7XHJcblxyXG4gICAgLy8gb3BlbiBtb2RhbCB3aGVuIGNsaWNrIG9uIG9wZW4gbW9kYWwgYnV0dG9uIFxyXG4gICAgbW9kQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgbW9kQ29udGVudC5yZW1vdmVDbGFzcygnbW9kYWwtYW5pbWF0ZWQtb3V0JykuYWRkQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLWluJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIG9uIGNsb3NlIGJ1dHRvbiBvciBzb21ld2hlcmUgb3V0IHRoZSBtb2RhbCBjb250ZW50IFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBpZiAodGFyZ2V0LmlzKG1vZGFsKSB8fCB0YXJnZXQuaXMoY2xvc2UpKSB7XHJcbiAgICAgICAgICAgIG1vZENvbnRlbnQucmVtb3ZlQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLWluJykuYWRkQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLW91dCcpLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24obmV4dCkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7XHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gVmFyc1xyXG4gICAgdmFyIG1vZEJ0biA9ICQoJy5jbGljay1tb2RhbC1mb3VyJyksXHJcbiAgICAgICAgbW9kYWwgPSAkKCcjcG9wdXAtYmctZm91cicpLFxyXG4gICAgICAgIGNsb3NlID0gbW9kYWwuZmluZCgnLmNsb3NlLXBvcHVwLWZvdXInKSxcclxuICAgICAgICBtb2RDb250ZW50ID0gbW9kYWwuZmluZCgnLnBvcHVwJyk7XHJcblxyXG4gICAgLy8gb3BlbiBtb2RhbCB3aGVuIGNsaWNrIG9uIG9wZW4gbW9kYWwgYnV0dG9uIFxyXG4gICAgbW9kQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgbW9kQ29udGVudC5yZW1vdmVDbGFzcygnbW9kYWwtYW5pbWF0ZWQtb3V0JykuYWRkQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLWluJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIG9uIGNsb3NlIGJ1dHRvbiBvciBzb21ld2hlcmUgb3V0IHRoZSBtb2RhbCBjb250ZW50IFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBpZiAodGFyZ2V0LmlzKG1vZGFsKSB8fCB0YXJnZXQuaXMoY2xvc2UpKSB7XHJcbiAgICAgICAgICAgIG1vZENvbnRlbnQucmVtb3ZlQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLWluJykuYWRkQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLW91dCcpLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24obmV4dCkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7XHJcbiQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgLy8gVmFyc1xyXG4gICAgdmFyIG1vZEJ0biA9ICQoJy5jbGljay1tb2RhbC1maXZlJyksXHJcbiAgICAgICAgbW9kYWwgPSAkKCcjcG9wdXAtYmctZml2ZScpLFxyXG4gICAgICAgIGNsb3NlID0gbW9kYWwuZmluZCgnLmNsb3NlLXBvcHVwLWZpdmUnKSxcclxuICAgICAgICBtb2RDb250ZW50ID0gbW9kYWwuZmluZCgnLnBvcHVwJyk7XHJcblxyXG4gICAgLy8gb3BlbiBtb2RhbCB3aGVuIGNsaWNrIG9uIG9wZW4gbW9kYWwgYnV0dG9uIFxyXG4gICAgbW9kQnRuLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1vZGFsLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG4gICAgICAgICQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgbW9kQ29udGVudC5yZW1vdmVDbGFzcygnbW9kYWwtYW5pbWF0ZWQtb3V0JykuYWRkQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLWluJyk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjbG9zZSBtb2RhbCB3aGVuIGNsaWNrIG9uIGNsb3NlIGJ1dHRvbiBvciBzb21ld2hlcmUgb3V0IHRoZSBtb2RhbCBjb250ZW50IFxyXG4gICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICBpZiAodGFyZ2V0LmlzKG1vZGFsKSB8fCB0YXJnZXQuaXMoY2xvc2UpKSB7XHJcbiAgICAgICAgICAgIG1vZENvbnRlbnQucmVtb3ZlQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLWluJykuYWRkQ2xhc3MoJ21vZGFsLWFuaW1hdGVkLW91dCcpLmRlbGF5KDMwMCkucXVldWUoZnVuY3Rpb24obmV4dCkge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICAgICAgICAgICAgICQoJ2h0bWwnKS5yZW1vdmVDbGFzcygnbm8tc2Nyb2xsJyk7XHJcbiAgICAgICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufSk7XHJcblxyXG4vL1xyXG4kKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNwaG9uZVwiKS5tYXNrKFwiKzcoOTk5KSA5OTktOTk5OVwiKTtcclxufSk7XHJcbi8vXHJcbiQoJy50YWItdHdvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcudGFiLXR3bycpLmFkZENsYXNzKCd0YWItYWN0aXZlJyk7XHJcbiAgICAkKCcudGFiLW9uZScpLnJlbW92ZUNsYXNzKCd0YWItYWN0aXZlJyk7XHJcbiAgICAkKCcuYmcnKS5hZGRDbGFzcygnYmctYWN0aXZlLXR3bycpO1xyXG4gICAgJCgnLmJnJykucmVtb3ZlQ2xhc3MoJ2JnLWFjdGl2ZS1vbmUnKTtcclxuICAgICQoJy5tYWluLWlubmVyLW9uZScpLnNsaWRlVXAoKTtcclxufSk7XHJcbiQoJy50YWItb25lJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcudGFiLW9uZScpLmFkZENsYXNzKCd0YWItYWN0aXZlJyk7XHJcbiAgICAkKCcudGFiLXR3bycpLnJlbW92ZUNsYXNzKCd0YWItYWN0aXZlJyk7XHJcbiAgICAkKCcuYmcnKS5hZGRDbGFzcygnYmctYWN0aXZlLW9uZScpO1xyXG4gICAgJCgnLmJnJykucmVtb3ZlQ2xhc3MoJ2JnLWFjdGl2ZS10d28nKTtcclxuICAgICQoJy5tYWluLWlubmVyLXR3bycpLnNsaWRlVXAoKTtcclxufSk7XHJcbi8vXHJcbiQoJy5vdmVybGF5LW9wZW4tb25lJykubW91c2VvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm92ZXJsYXknKS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XHJcbiAgICAkKCcub3ZlcmxheScpLmNzcyhcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XHJcbiAgICAkKCcub3ZlcmxheScpLmNzcyhcInpJbmRleFwiLCBcIjJcIik7XHJcbiAgICAkKCcuaGVhZGVyLWFsbF9fbmF2JykuY3NzKFwiYm9yZGVyUmFkaXVzXCIsIFwiMjhweCAyOHB4IDAgMFwiKTtcclxufSk7XHJcbiQoJy5vdmVybGF5LW9wZW4tb25lJykubW91c2VvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcub3ZlcmxheScpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgJCgnLmhlYWRlci1hbGxfX25hdicpLmNzcyhcImJvcmRlclJhZGl1c1wiLCBcIjI4cHhcIik7XHJcbn0pO1xyXG4kKCcub3ZlcmxheScpLm1vdXNlb3ZlcihmdW5jdGlvbigpIHtcclxuICAgICQoJy5vdmVybGF5JykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgJCgnLm92ZXJsYXknKS5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xyXG4gICAgJCgnLm92ZXJsYXknKS5jc3MoXCJ6SW5kZXhcIiwgXCIyXCIpO1xyXG4gICAgJCgnLmhlYWRlci1hbGxfX25hdicpLmNzcyhcImJvcmRlclJhZGl1c1wiLCBcIjI4cHggMjhweCAwIDBcIik7XHJcbn0pO1xyXG4kKCcub3ZlcmxheScpLm1vdXNlb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm92ZXJsYXknKS5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuICAgICQoJy5oZWFkZXItYWxsX19uYXYnKS5jc3MoXCJib3JkZXJSYWRpdXNcIiwgXCIyOHB4XCIpO1xyXG59KTtcclxuJCgnLm92ZXJsYXknKS5jc3MoJ3RvcCcsICQoJy5oZWFkZXInKS5oZWlnaHQoKSk7XHJcblxyXG5cclxuLy9cclxuXHJcbiQoJy5vdmVybGF5LW9wZW4tdHdvJykubW91c2VvdmVyKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm92ZXJsYXktdHdvJykuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xyXG4gICAgJCgnLm92ZXJsYXktdHdvJykuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcclxuICAgICQoJy5vdmVybGF5LXR3bycpLmNzcyhcInpJbmRleFwiLCBcIjJcIik7XHJcbiAgICAkKCcuaGVhZGVyLWFsbF9fbmF2JykuY3NzKFwiYm9yZGVyUmFkaXVzXCIsIFwiMjhweCAyOHB4IDAgMFwiKTtcclxufSk7XHJcbiQoJy5vdmVybGF5LXR3bycpLm1vdXNlb3ZlcihmdW5jdGlvbigpIHtcclxuICAgICQoJy5vdmVybGF5LXR3bycpLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcclxuICAgICQoJy5vdmVybGF5LXR3bycpLmNzcyhcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XHJcbiAgICAkKCcub3ZlcmxheS10d28nKS5jc3MoXCJ6SW5kZXhcIiwgXCIyXCIpO1xyXG4gICAgJCgnLmhlYWRlci1hbGxfX25hdicpLmNzcyhcImJvcmRlclJhZGl1c1wiLCBcIjI4cHggMjhweCAwIDBcIik7XHJcbn0pO1xyXG4kKCcub3ZlcmxheS10d28nKS5tb3VzZW91dChmdW5jdGlvbigpIHtcclxuICAgICQoJy5vdmVybGF5LXR3bycpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgJCgnLmhlYWRlci1hbGxfX25hdicpLmNzcyhcImJvcmRlclJhZGl1c1wiLCBcIjI4cHhcIik7XHJcbn0pO1xyXG4kKCcub3ZlcmxheS1vcGVuLXR3bycpLm1vdXNlb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm92ZXJsYXktdHdvJykuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcbiAgICAkKCcuaGVhZGVyLWFsbF9fbmF2JykuY3NzKFwiYm9yZGVyUmFkaXVzXCIsIFwiMjhweFwiKTtcclxufSk7XHJcbiQoJy5vdmVybGF5LXR3bycpLmNzcygndG9wJywgJCgnLmhlYWRlcicpLmhlaWdodCgpKTtcclxuXHJcbi8vXHJcblxyXG4kKCcub3Blbi1hZGFwdGl2ZS1vbmUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5vcGVuLWFkYXB0aXZlLW9uZScpLnRvZ2dsZUNsYXNzKFwib3Blbi1hY3RpdmVcIik7XHJcbiAgICAkKCcub3ZlcmxheS1hZGFwdGl2ZS1vbmUnKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgJCgnLnN2Zy1vbmUnKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5vcGVuLXR3bycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm9wZW4tdHdvJykudG9nZ2xlQ2xhc3MoXCJvcGVuLWFjdGl2ZS10d29cIik7XHJcbiAgICAkKCcuZHJvcC10d28nKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgJCgnLnN2Zy10aHJlZScpLnRvZ2dsZUNsYXNzKFwic3ZnXCIpO1xyXG59KTtcclxuJCgnLm9wZW4tdGhyZWUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5vcGVuLXRocmVlJykudG9nZ2xlQ2xhc3MoXCJvcGVuLWFjdGl2ZS10d29cIik7XHJcbiAgICAkKCcuZHJvcC10aHJlZScpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAkKCcuc3ZnLWZvdXInKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5vcGVuLWZvdXInKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5vcGVuLWZvdXInKS50b2dnbGVDbGFzcyhcIm9wZW4tYWN0aXZlLXR3b1wiKTtcclxuICAgICQoJy5kcm9wLWZvdXInKS5zbGlkZVRvZ2dsZSgpO1xyXG4gICAgJCgnLnN2Zy1maXZlJykudG9nZ2xlQ2xhc3MoXCJzdmdcIik7XHJcbn0pO1xyXG4kKCcub3Blbi1maXZlJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcub3Blbi1maXZlJykudG9nZ2xlQ2xhc3MoXCJvcGVuLWFjdGl2ZS10d29cIik7XHJcbiAgICAkKCcuZHJvcC1maXZlJykuc2xpZGVUb2dnbGUoKTtcclxuICAgICQoJy5zdmctc2l4JykudG9nZ2xlQ2xhc3MoXCJzdmdcIik7XHJcbn0pO1xyXG5cclxuLy9cclxuXHJcbiQoJy5vcGVuLWFkYXB0aXZlLXR3bycpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLm9wZW4tYWRhcHRpdmUtdHdvJykudG9nZ2xlQ2xhc3MoXCJvcGVuLWFjdGl2ZVwiKTtcclxuICAgICQoJy5vdmVybGF5LWFkYXB0aXZlLXR3bycpLnNsaWRlVG9nZ2xlKCk7XHJcbiAgICAkKCcuc3ZnLXNldmVuJykudG9nZ2xlQ2xhc3MoXCJzdmdcIik7XHJcbn0pO1xyXG5cclxuXHJcbmxldCBjYXRlZ29yaWVzID0gWycuY2F0ZWdvcnktb25lJywgJy5jYXRlZ29yeS10d28nLCAnLmNhdGVnb3J5LXRocmVlJywgJy5jYXRlZ29yeS1mb3VyJywgJy5jYXRlZ29yeS1maXZlJywgJy5jYXRlZ29yeS1zaXgnXTtcclxuLy9cclxuJChjYXRlZ29yaWVzWzBdKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoY2F0ZWdvcmllc1swXSkuYWRkQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzFdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbMl0pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoY2F0ZWdvcmllc1szXSkucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzRdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbNV0pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoJy5hY2NvcmRpb25fX2l0ZW0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgJCgnLmNhdGVnb3J5LW9uZS1vcGVuJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbn0pO1xyXG5cclxuJChjYXRlZ29yaWVzWzFdKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoY2F0ZWdvcmllc1sxXSkuYWRkQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzBdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbMl0pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoY2F0ZWdvcmllc1szXSkucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzRdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbNV0pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoJy5hY2NvcmRpb25fX2l0ZW0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgJCgnLmNhdGVnb3J5LXR3by1vcGVuJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbn0pO1xyXG5cclxuJChjYXRlZ29yaWVzWzJdKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoY2F0ZWdvcmllc1syXSkuYWRkQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzFdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbMF0pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoY2F0ZWdvcmllc1szXSkucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzRdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbNV0pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoJy5hY2NvcmRpb25fX2l0ZW0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgJCgnLmNhdGVnb3J5LXRocmVlLW9wZW4nKS5jc3MoJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxufSk7XHJcblxyXG4kKGNhdGVnb3JpZXNbM10pLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJChjYXRlZ29yaWVzWzNdKS5hZGRDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbMV0pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoY2F0ZWdvcmllc1syXSkucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzBdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbNF0pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoY2F0ZWdvcmllc1s1XSkucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJCgnLmFjY29yZGlvbl9faXRlbScpLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcbiAgICAkKCcuY2F0ZWdvcnktZm91ci1vcGVuJykuY3NzKCdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbn0pO1xyXG5cclxuJChjYXRlZ29yaWVzWzRdKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoY2F0ZWdvcmllc1s0XSkuYWRkQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzFdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbMl0pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoY2F0ZWdvcmllc1szXSkucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzBdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbNV0pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoJy5hY2NvcmRpb25fX2l0ZW0nKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgJCgnLmNhdGVnb3J5LWZpdmUtb3BlbicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG59KTtcclxuXHJcbiQoY2F0ZWdvcmllc1s1XSkuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKGNhdGVnb3JpZXNbNV0pLmFkZENsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoY2F0ZWdvcmllc1sxXSkucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzJdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKGNhdGVnb3JpZXNbM10pLnJlbW92ZUNsYXNzKCdjYXRlZ29yeS1hY3RpdmUnKTtcclxuICAgICQoY2F0ZWdvcmllc1s0XSkucmVtb3ZlQ2xhc3MoJ2NhdGVnb3J5LWFjdGl2ZScpO1xyXG4gICAgJChjYXRlZ29yaWVzWzBdKS5yZW1vdmVDbGFzcygnY2F0ZWdvcnktYWN0aXZlJyk7XHJcbiAgICAkKCcuYWNjb3JkaW9uX19pdGVtJykuY3NzKCdkaXNwbGF5JywgJ25vbmUnKTtcclxuICAgICQoJy5jYXRlZ29yeS1zaXgtb3BlbicpLmNzcygnZGlzcGxheScsICdibG9jaycpO1xyXG59KTtcclxuLy9cclxuXHJcbnZhciBhY2NvcmRpb24gPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgdmFyICRhY2NvcmRpb24gPSAkKCcuanMtYWNjb3JkaW9uJyk7XHJcbiAgICB2YXIgJGFjY29yZGlvbl9oZWFkZXIgPSAkYWNjb3JkaW9uLmZpbmQoJy5qcy1hY2NvcmRpb24taGVhZGVyJyk7XHJcbiAgICB2YXIgJGFjY29yZGlvbl9pdGVtID0gJCgnLmpzLWFjY29yZGlvbi1pdGVtJyk7XHJcblxyXG4gICAgLy8gZGVmYXVsdCBzZXR0aW5ncyBcclxuICAgIHZhciBzZXR0aW5ncyA9IHtcclxuICAgICAgICAvLyBhbmltYXRpb24gc3BlZWRcclxuICAgICAgICBzcGVlZDogNDAwLFxyXG5cclxuICAgICAgICAvLyBjbG9zZSBhbGwgb3RoZXIgYWNjb3JkaW9uIGl0ZW1zIGlmIHRydWVcclxuICAgICAgICBvbmVPcGVuOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vIHBhc3MgY29uZmlndXJhYmxlIG9iamVjdCBsaXRlcmFsXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oJHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgICRhY2NvcmRpb25faGVhZGVyLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgYWNjb3JkaW9uLnRvZ2dsZSgkKHRoaXMpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAkLmV4dGVuZChzZXR0aW5ncywgJHNldHRpbmdzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGVuc3VyZSBvbmx5IG9uZSBhY2NvcmRpb24gaXMgYWN0aXZlIGlmIG9uZU9wZW4gaXMgdHJ1ZVxyXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3Mub25lT3BlbiAmJiAkKCcuanMtYWNjb3JkaW9uLWl0ZW0uYWN0aXZlJykubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgJCgnLmpzLWFjY29yZGlvbi1pdGVtLmFjdGl2ZTpub3QoOmZpcnN0KScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcmV2ZWFsIHRoZSBhY3RpdmUgYWNjb3JkaW9uIGJvZGllc1xyXG4gICAgICAgICAgICAkKCcuanMtYWNjb3JkaW9uLWl0ZW0uYWN0aXZlJykuZmluZCgnPiAuanMtYWNjb3JkaW9uLWJvZHknKS5zaG93KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uKCR0aGlzKSB7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoc2V0dGluZ3Mub25lT3BlbiAmJiAkdGhpc1swXSAhPSAkdGhpcy5jbG9zZXN0KCcuanMtYWNjb3JkaW9uJykuZmluZCgnPiAuanMtYWNjb3JkaW9uLWl0ZW0uYWN0aXZlID4gLmpzLWFjY29yZGlvbi1oZWFkZXInKVswXSkge1xyXG4gICAgICAgICAgICAvLyAgICAgJHRoaXMuY2xvc2VzdCgnLmpzLWFjY29yZGlvbicpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLmZpbmQoJz4gLmpzLWFjY29yZGlvbi1pdGVtJylcclxuICAgICAgICAgICAgLy8gICAgICAgICAucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLmZpbmQoJy5qcy1hY2NvcmRpb24tYm9keScpXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLnNsaWRlVXAoKVxyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyBzaG93L2hpZGUgdGhlIGNsaWNrZWQgYWNjb3JkaW9uIGl0ZW1cclxuICAgICAgICAgICAgJHRoaXMuY2xvc2VzdCgnLmpzLWFjY29yZGlvbi1pdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAkdGhpcy5uZXh0KCkuc3RvcCgpLnNsaWRlVG9nZ2xlKHNldHRpbmdzLnNwZWVkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pKCk7XHJcblxyXG4kKCcuaGVhZGVyLW9uZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy1vbmUnKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5oZWFkZXItdHdvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc3ZnLXR3bycpLnRvZ2dsZUNsYXNzKFwic3ZnXCIpO1xyXG59KTtcclxuJCgnLmhlYWRlci10aHJlZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy10aHJlZScpLnRvZ2dsZUNsYXNzKFwic3ZnXCIpO1xyXG59KTtcclxuJCgnLmhlYWRlci1mb3VyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc3ZnLWZvdXInKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5oZWFkZXItZml2ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy1maXZlJykudG9nZ2xlQ2xhc3MoXCJzdmdcIik7XHJcbn0pO1xyXG4kKCcuaGVhZGVyLXNpeCcpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy1zaXgnKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5oZWFkZXItc2V2ZW4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5zdmctc2V2ZW4nKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5oZWFkZXItZWlnaHQnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5zdmctZWlnaHQnKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5oZWFkZXItbmluZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy1uaW5lJykudG9nZ2xlQ2xhc3MoXCJzdmdcIik7XHJcbn0pO1xyXG4kKCcuaGVhZGVyLXRlbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy10ZW4nKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5oZWFkZXItZWxldmVuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc3ZnLWVsZXZlbicpLnRvZ2dsZUNsYXNzKFwic3ZnXCIpO1xyXG59KTtcclxuJCgnLmhlYWRlci10d2VsdmUnKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5zdmctdHdlbHZlJykudG9nZ2xlQ2xhc3MoXCJzdmdcIik7XHJcbn0pO1xyXG4kKCcuaGVhZGVyLXRoaXJ0ZWVuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc3ZnLXRoaXJ0ZWVuJykudG9nZ2xlQ2xhc3MoXCJzdmdcIik7XHJcbn0pO1xyXG4kKCcuaGVhZGVyLWZvdXJ0ZWVuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc3ZnLWZvdXJ0ZWVuJykudG9nZ2xlQ2xhc3MoXCJzdmdcIik7XHJcbn0pO1xyXG4kKCcuaGVhZGVyLWZpZnRlZW4nKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5zdmctZmlmdGVlbicpLnRvZ2dsZUNsYXNzKFwic3ZnXCIpO1xyXG59KTtcclxuJCgnLmhlYWRlci1zaXh0ZWVuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc3ZnLXNpeHRlZW4nKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5oZWFkZXItc2V2ZW50ZWVuJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc3ZnLXNldmVudGVlbicpLnRvZ2dsZUNsYXNzKFwic3ZnXCIpO1xyXG59KTtcclxuJCgnLmhlYWRlci1laWdodGVlbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy1laWdodGVlbicpLnRvZ2dsZUNsYXNzKFwic3ZnXCIpO1xyXG59KTtcclxuJCgnLmhlYWRlci1uaW5ldGVlbicpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy1uaW5ldGVlbicpLnRvZ2dsZUNsYXNzKFwic3ZnXCIpO1xyXG59KTtcclxuJCgnLmhlYWRlci10d2VudHknKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoJy5zdmctdHdlbnR5JykudG9nZ2xlQ2xhc3MoXCJzdmdcIik7XHJcbn0pO1xyXG4kKCcuaGVhZGVyLXR3ZW50eW9uZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy10d2VudHlvbmUnKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5oZWFkZXItdHdlbnR5dHdvJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc3ZnLXR3ZW50eXR3bycpLnRvZ2dsZUNsYXNzKFwic3ZnXCIpO1xyXG59KTtcclxuJCgnLmhlYWRlci10d2VudHl0aHJlZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy10d2VudHl0aHJlZScpLnRvZ2dsZUNsYXNzKFwic3ZnXCIpO1xyXG59KTtcclxuJCgnLmhlYWRlci10d2VudHlmb3VyJykuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKCcuc3ZnLXR3ZW50eWZvdXInKS50b2dnbGVDbGFzcyhcInN2Z1wiKTtcclxufSk7XHJcbiQoJy5oZWFkZXItdHdlbnR5Zml2ZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJCgnLnN2Zy10d2VudHlmaXZlJykudG9nZ2xlQ2xhc3MoXCJzdmdcIik7XHJcbn0pO1xyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICAgYWNjb3JkaW9uLmluaXQoeyBzcGVlZDogMzAwLCBvbmVPcGVuOiB0cnVlIH0pO1xyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXInLCB7XHJcbiAgICBkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICAgIGNsaWNrYWJsZTogJ3RydWUnLFxyXG4gICAgICAgIG1vdXNld2hlZWw6IGZhbHNlXHJcbiAgICB9XHJcbn0pO1xyXG5jb25zdCBzd2lwZXJUd28gPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXR3bycsIHtcclxuICAgIGRpcmVjdGlvbjogJ2hvcml6b250YWwnLFxyXG4gICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLnN3aXBlci1uZXh0JyxcclxuICAgICAgICBwcmV2RWw6ICcuc3dpcGVyLXByZXYnLFxyXG4gICAgfSxcclxuICAgIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAgICAgMzIwOiB7XHJcbiAgICAgICAgICAgIHNsaWRlc1BlclZpZXc6IDFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9