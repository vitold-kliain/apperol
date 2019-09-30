//
// jarallax.js
//
// Closing an alert changes height of document, so readjust position of parallax elements

import jQuery from 'jquery';
import jarallax from 'jarallax';

(($) => {
  if (typeof jarallax === 'function') {
    $('.alert-dismissible').on('closed.bs.alert', () => {
      jarallax(document.querySelectorAll('[data-jarallax]'), 'onScroll');
    });

    $(document).on('resized.mr.overlayNav', () => {
      jarallax(document.querySelectorAll('[data-jarallax]'), 'onResize');
    });

    document.addEventListener('injected.mr.SVGInjector', () => {
      jarallax(document.querySelectorAll('[data-jarallax]'), 'onResize');
    });

    const jarallaxOptions = {
      disableParallax: /iPad|iPhone|iPod|Android/,
    };

    $(window).on('load', () => {
      jarallax(document.querySelectorAll('[data-jarallax]'), jarallaxOptions);


      jarallax(document.querySelectorAll('[data-jarallax-delay]'), jarallaxOptions);
    });
  }
})(jQuery);
