$(document).ready(function() {

    $(this).scrollTop(0);
    
    var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    // ANIMATE SCROLL
	$('a.anchor-link[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 90
            }, 700);
            return false;
          }
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];

    // POSITIONS SECTIONS
    var $sectionHero = $('#hero');
    // var $sectionCoaches = $('#coaches');

    if (viewportHeight < 650 && viewportHeight > 557){
        $sectionHero.addClass('viewport-sm');
    };

    var moduleScroll = (function(){

        var stickyHeader = function (posicionScroll) {

            if ( posicionScroll > 1 ){
                $('.header-wrapper').addClass('sticky-on');
			} else {
				$('.header-wrapper').removeClass('sticky-on');
			};

            return

        };

        // var showCoaches = function (posicionScroll, positionCoaches, offsetOpacity) {
          

        //     if ( posicionScroll > positionCoaches - offsetOpacity ){
        //         $sectionCoaches.addClass('show-section');
		// 	}

        //     return

        // };



        return{

            stickyHeader: stickyHeader,
            //showCoaches : showCoaches
        }

	})();

	$(window).scroll(function(){

        if($(window).height() < 1215)
            {
                var offsetOpacity = 400;
            } else {
                var offsetOpacity = 560;
        }

        //var offsetOpacity = 560;
        var posicionScroll = $(window).scrollTop();
        // var positionCoaches = $sectionCoaches.offset().top;
       

        moduleScroll.stickyHeader(posicionScroll);
        // moduleScroll.showCoaches(posicionScroll, positionCoaches, offsetOpacity);

    });
    
    // nav  mobile
    $( '.nav-menu' ).click(function() {
        $('.nav-wrapper').addClass('active');
    });

    $( '.nav-close, .anchor-link, .header-main-button-nav' ).click(function() {
        $('.nav-wrapper').removeClass('active');
    });

    // carousel

    $('.hero-carousel-desktop').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        nav:false,
        animateOut: 'fadeOut',
        autoplay:true,
        dots:false
    });

    $('.testimonials-carousel').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        nav:false,
        autoplay:true
    });


    $('.product-carousel').owlCarousel({
        loop:true,
        margin:0,
        items:1,
        nav:true,
        dots:false,
        autoplay:false,
        navText : ["<i class='icon-item icon-arrow-left'></i>","<i class='icon-item icon-arrow-right'></i>"],
        responsive:{
            0:{
                nav:false,
                dots:true,
            },
            990:{
                nav:true,
            }
        }
    });


    $('.news-carousel').owlCarousel({
        loop:true,
        margin:50,
        items:2,
        nav:true,
        dots:false,
        autoplay:false,
        navText : ["<i class='icon-item icon-arrow-left'></i>","<i class='icon-item icon-arrow-right'></i>"],
        responsive:{
            0:{
                items:1,
                nav:false
            },
            780:{
                items:2
            }
        }
        
    });



    // modal
    $('.fancybox').fancybox({
        helpers: {
            // media: true,
            overlay: {
            locked: false
            }
        }
        // youtube: {
        //     autoplay: 1 // enable autoplay
        // }
    });

    $('.modal-close-dark').click(function() {
        parent.$.fancybox.close();
    });


    // Faqs
    $( ".faqs-row .faqs-title" ).on('click', function(){
        $faqsIcon = $(this).children();
        $faqsAnswer = $(this).siblings();

        if ($faqsAnswer.hasClass('show-faq')){
            $('.faqs-paragraph').removeClass('show-faq');
            $faqsIcon.removeClass('rotate');
        } else {
            $('.faqs-title .faqs-icon').removeClass('rotate');
            $('.faqs-paragraph').removeClass('show-faq');
            $faqsIcon.addClass('rotate');
            $faqsAnswer.addClass('show-faq');
        }
        
        
    });


});