$(document).ready(function() {
  $(".js-range-slider").ionRangeSlider({
      skin: "round",
      type: "double",
      min: 0,
      max: 100000,
      from: 11389,
      to: 67389,
      grid: false
  });

  $('.filter-dropdown strong').click(function() {
    $('.dropdown-list').slideUp(200);
    $(this).next().slideDown(400);
  });

  $('.cart-item__close').click(function() {
    $(this).parent().remove();
    countTotal();
  });

  $('.reduce').click(function() {
    $(this).next().val(function(i, oldVal) {
      // return --oldVal;
      if (oldVal > 0) {
        return --oldVal;
      } else {
        return 0;
      }
    });
    $(this).parent().next().children('span').text($(this).parent().next().data('price') * $(this).next().val());
    let cost = $(this).parent().next().attr('data-price') * $(this).next().val();
    $(this).parent().next().attr('data-cost', cost);
    countTotal();
  })

  $('.increase').click(function() {
    $(this).prev().val(function(i, oldVal) {
      return ++oldVal;
    });
    $(this).parent().next().children('span').text($(this).parent().next().data('price') * $(this).prev().val());
    let cost = $(this).parent().next().attr('data-price') * $(this).prev().val();
    $(this).parent().next().attr('data-cost', cost);
    countTotal();
  })


  function countTotal() {
    let total = 0;
    $('.cart-item__price').each(function(index, item) {
      total += parseInt($(item).attr('data-cost'));
    });
    $('.payment__score strong span').text(total);
  }

  countTotal();

  $('.promo').click(function() {
    $(this).children('.promo-svg').toggleClass('show');
  });

  $('.method').click(function() {
    $('.method').removeClass('checked');
    $(this).toggleClass('checked');
  });

  $('header .link:first').click(function() {
    $('.second-lvl').toggleClass('show');
    $('.menu-button img').toggleClass('show');
    $('.overlay').toggleClass('show');
    $('.sub-menu').toggle(200);
  });

  $('.menu-button').click(function() {
    $('.second-lvl').toggleClass('show');
    $('.menu-button img').toggleClass('show');
    $('.overlay').toggleClass('show');
    $('.sub-menu').toggle(200);
  });

  $('.menu-button-first').click(function() {
    $('.second-lvl').toggleClass('show');
    $('.menu-button-first img').toggleClass('show');
    $('.overlay').toggleClass('show');
    $('.sub-menu').toggle(200);
  });

  $('.overlay').click(function() {
    $('.second-lvl').toggleClass('show');
    $('.menu-button img').toggleClass('show');
    $('.menu-button-first img').toggleClass('show');
    $(this).toggleClass('show');
    $('.sub-menu').toggle(200);
  });

  $('.sub-menu .close-menu').click(function() {
    $('.second-lvl').toggleClass('show');
    $('.menu-button img').toggleClass('show');
    $('.sub-menu').toggle(200);
    $('.overlay').toggleClass('show');
  });

  $('.aside-mobile').hide();

  $('.filter-button').click(function() {
    $('.triangle').addClass('show');
    $('.aside-mobile').slideDown('200');
    $('.aside-mobile').removeAttr('style');
    $('.aside-mobile').addClass('show');
    $('.filter-overlay').addClass('show');
  });

  $('.filter-overlay').click(function() {
    $(this).removeClass('show');
    $('.triangle').removeClass('show');
    $('.aside-mobile').slideUp('200');
    $('.aside-mobile').removeAttr('style');
    $('.aside-mobile').removeClass('show');
  });

  if( $(window).width() < 991) {
    var jmap = $('#map').remove();
    $('section.section-map').append(jmap);
  }

  $('input[type="tel"]').mask("+9 (999) 999 - 99 - 99");


  $('.places-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    rows: 5,
    fade: true,
    swipe: false,
    prevArrow: $('.pagination li:first-child .pag-link'),
    nextArrow: $('.pagination li:last-child .pag-link'),
    appendDots: $('.pagination .dots'),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesPerRow: 2,
          rows: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesPerRow: 1,
          rows: 4
        }
      }
    ]
  });

  $('.prod-img-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.prod-img-sub'
  });

  $('.prod-img-sub').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.prod-img-main',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false
  });


  $('input[name="delivery"]').first().prop('checked', true);

  $('#delivery-js .dropdown-toggle').text($('input[name="delivery"]:checked').next('label').text());

  $('input[name="delivery"]').change(function() {
    $('#delivery-js .dropdown-toggle').text($('input[name="delivery"]:checked').next('label').text());
  });

  $('input[name="payment"]').first().prop('checked', true);

  $('#payment-js .dropdown-toggle').text($('input[name="payment"]:checked').next('label').text());

  $('input[name="payment"]').change(function() {
    $('#payment-js .dropdown-toggle').text($('input[name="payment"]:checked').next('label').text());
  });

  $(function () {
    $('[data-toggle="popover"]').popover({
      trigger: 'focus'
    });
  })
});
