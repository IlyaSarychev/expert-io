$(document).ready(function(){
  $(".index-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    nav: true,
  });

  $('.category-carousel').owlCarousel({
		loop:true,
		items:3,
    margin: 30,
		dots:false,
    nav: true
	});

  $('.category2-carousel').owlCarousel({
		loop:true,
		items:2,
    margin: 30,
		dots:false,
    nav: true,
    autoWidth: true
	});

  $(".partners-carousel").owlCarousel({
    loop: true,
    margin: 30,
    items: 4,
    nav: true
  });

  $('.subject-slider').owlCarousel({
    loop: false,
    margin: 20,
    items: 6,
    nav: false,
    dots: false,
    autoWidth: true,
    responsive: {
      576: {
        items: 2
      },

      768: {
        items: 2
      },

      992: {
        items: 4
      },

      1200: {
        items: 5
      }
    }
  });

  $(".partners2-carousel").owlCarousel({
    loop: true,
    margin: 20,
    items: 4,
    nav: true
  });

  var subjOwl = $('.subject-slider');
  subjOwl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        subjOwl.trigger('next.owl');
    } else {
        subjOwl.trigger('prev.owl');
    }
    e.preventDefault();
});

  var slider2 = $('.article-carousel');
  slider2.owlCarousel({
    items: 1,
    loop: true,
    onInitialized: function(e) {
      $('.counter-out').html('<span>1</span> / ' + this.items().length)
      console.log();
    }
  });
  slider2.on('changed.owl.carousel', function(e) {
    $('.counter-out').html('<span>' + ++e.page.index + '</span>'  + ' / ' + e.page.count)
  });
});
