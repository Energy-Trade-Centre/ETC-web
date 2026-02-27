/**
 * ETC Navigation — Mobile menu toggle
 */
(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('mobile-menu');

  if (!toggle || !menu) return;

  var openIcon = toggle.querySelector('.nav-toggle-open');
  var closeIcon = toggle.querySelector('.nav-toggle-close');

  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.contains('active');

    if (isOpen) {
      menu.classList.remove('active');
      if (openIcon) openIcon.style.display = '';
      if (closeIcon) closeIcon.style.display = 'none';
    } else {
      menu.classList.add('active');
      if (openIcon) openIcon.style.display = 'none';
      if (closeIcon) closeIcon.style.display = '';
    }
  });

  // Close menu when clicking a link
  var links = menu.querySelectorAll('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      menu.classList.remove('active');
      if (openIcon) openIcon.style.display = '';
      if (closeIcon) closeIcon.style.display = 'none';
    });
  }
})();
