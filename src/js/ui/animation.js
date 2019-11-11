'use strict';

window.addEventListener('scroll', function () {
  var home = document.getElementById('home');
  var goTop = document.getElementById('goTop');
  var positionY = window.pageYOffset;

  home.style.backgroundPosition = '0 -' + (positionY / 2) + 'px';

  if (positionY > window.innerHeight) {
    goTop.style.cssText = 'z-index:5; opacity:1; visibility:visible;';
  } else {
    goTop.style.cssText = 'z-index:-1; opacity:0; visibility:hidden;';
  }
});

(function () {
  var nav = document.querySelectorAll('nav ul li');
  var sections = document.querySelectorAll('section');
  var ctrl = new ScrollMagic.Controller();

  sections.forEach(function(_this, i) {
    var title = _this.querySelector('.inner .title');
    var content = _this.querySelector('.inner .content');

    if (title !== null) {
      var TL = new TimelineMax();

      TL.from(title, .6, { y: 60, autoAlpha: 0, ease: Power1.easeOut, });
      TL.from(content, .6, { y: 30, autoAlpha: 0, ease: Power1.easeOut, });

      new ScrollMagic.Scene({
        offset: 120,
        triggerElement: _this,
        triggerHook: 0.9
      })
        .setTween(TL)
        // .addIndicators({
        //   colorTrigger: "white",
        //   colorStart: "white",
        //   colorEnd: "white",
        //   indent: 40
        // })
        .on('enter', function() {
          if (i !== 0) {
            nav[i].classList.add('active');
            nav[i - 1].classList.remove('active');
          }
        })
        .on('leave', function () {
          nav[i].classList.remove('active');

          if (i !== 1) {
            nav[i - 1].classList.add('active');
          }
        })
        .addTo(ctrl);
    }
  });
})();
