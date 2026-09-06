// ハンバーガーメニューの開閉制御(モバイル・タブレット表示向け)
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('site-nav');
  var overlay = document.getElementById('nav-overlay');

  if (!toggle || !nav) {
    return;
  }

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    if (overlay) {
      overlay.classList.remove('is-open');
    }
  }

  function openNav() {
    nav.classList.add('is-open');
    toggle.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    if (overlay) {
      overlay.classList.add('is-open');
    }
  }

  toggle.addEventListener('click', function () {
    if (nav.classList.contains('is-open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  if (overlay) {
    overlay.addEventListener('click', closeNav);
  }

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeNav();
    }
  });
});
