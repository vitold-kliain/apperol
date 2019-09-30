//
// swiper.js
//

import jQuery from 'jquery';
import 'swiper';

(() => {
  const swiperTestimonials = new Swiper('.js-testimonials', {
    slidesPerView: '1',
    loop: true,
    slidesPerGroup: 1,
    autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      autoHeight: true,
    },
  });

  // Change span text color when checkbox is checked
  if ($('.js-switch input').is(':checked')) {
    $('.js-switch').addClass('is-checked');
  }
  $('.js-switch input').on('change', function () {
    if ($(this).is(':checked')) {
      $('.js-switch').addClass('is-checked');
      $('.tab-pane').toggleClass('active').toggleClass('show');
    } else {
      $('.js-switch').removeClass('is-checked');
      $('.tab-pane').toggleClass('active').toggleClass('show');
    }
  });
})(jQuery);
