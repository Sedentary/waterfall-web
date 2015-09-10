;(function (window, document, $, undefined) {

  'use strict';

  var project = (function () {

    var _maxHeight = function () {
      var height = $(window).height();
      var wrapper = document.querySelector('.wrapper');
      var listWrapper = wrapper.querySelector('.list-wrapper');
      var articles = listWrapper.querySelectorAll('.list article');

      wrapper.style.width = $(window).width() + 'px';

      height = height - listWrapper.getBoundingClientRect().top - 100;

      articles = [].slice.call(articles);
      articles.forEach(function (article) {
        article.style.height = height + 'px';
      });
    };

    return {

      init : function () {
        _maxHeight();
      }

    }

  })();

  project.init();

})(window, document, jQuery);