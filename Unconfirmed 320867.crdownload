var logoAnimation = (function() {

  var logoEl = document.querySelector('.logo-animation');
  var pathEls = document.querySelectorAll('.logo-animation path:not(.icon-curve)');
  var innerWidth = window.innerWidth;
  var maxWidth = 740;
  var logoScale = innerWidth <= maxWidth ? innerWidth / maxWidth : 1;
  var logoTimeline = anime.timeline({ autoplay: false });

  logoEl.style.transform = 'translateY(50px) scale('+logoScale+')';

  for (var i = 0; i < pathEls.length; i++) {
    var el = pathEls[i];
    el.setAttribute('stroke-dashoffset', anime.setDashoffset(el));
  }

  logoTimeline

    .add({
      targets: '.fill.in',
      strokeDashoffset: {
        value: [anime.setDashoffset, 0],
        duration: 600,
        delay: function(el, i, t) { return 700 + ( i * 100 ); },
        easing: 'easeOutQuart'
      },
      stroke: {
        value: ['#FFF', function(el) { return anime.getValue(el.parentNode, 'stroke') } ],
        duration: 500,
        delay: 500,
        easing: 'easeInQuad'
      },
      opacity: {
        value: 0,
        duration: 1,
        delay: function(el, i, t) { return 1900 + ( i * 80 ); },
      },
      offset: 0
    })
    .add({
      targets: '.fill.out',
      strokeDashoffset: [
        { value: [anime.setDashoffset, anime.setDashoffset], duration: 1890 },
        {
          value: [0, anime.setDashoffset],
          duration: 800,
          delay: function(el, i) { return (i * 80); },
          easing: 'easeInQuart'
        }
      ],
      offset: 0
    })
    .add({
      targets: '.line.out',
      strokeDashoffset: {
        value: [0, anime.setDashoffset],
        duration: 1200,
        delay: function(el, i, t) { return 2500 + ( i * 100 ); },
        easing: 'easeInQuart'
      },
      strokeWidth: {
        value: [0, 2],
        delay: function(el, i, t) { return 2000 + ( i * 100 ); },
        duration: 200,
        easing: 'linear'
      },
      offset: 0
    })
    


  function init() {
    document.body.classList.add('ready');
    // logoTimeline.seek(4700);
    logoTimeline.play();
  }

  return {
    init: init
  }

})();

window.onload = function() {
  logoAnimation.init();

}
