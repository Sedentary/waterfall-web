;
(function (window, document, $, undefined) {

  'use strict';

  var project = (function () {

    var _setMaxHeight = function () {
      var height = $(window).height();
      var wrapper = document.querySelector('.wrapper');
      var listWrapper = wrapper.querySelector('.list-wrapper');
      var articles = listWrapper.querySelectorAll('.list article');

      wrapper.style.width = $(window).width() + 'px';

      height = height - listWrapper.getBoundingClientRect().top - 100;

      articles = [].slice.call(articles);
      articles.forEach(function (article) {
        var cardHeight = 10;
        [].forEach.call(article.querySelectorAll('.card'), function (card) {
          cardHeight += card.getBoundingClientRect().height;
        });

        article.style.height = (height < cardHeight ? height : cardHeight) + 'px';
      });
    };

    return {
      setMaxHeight: _setMaxHeight
    };

  })();

  window.project = project;

})(window, document, jQuery);