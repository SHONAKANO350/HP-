document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('global-nav');
  var backdrop = document.getElementById('nav-backdrop');
  if (!toggle || !nav) return;

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.classList.remove('is-active');
    toggle.setAttribute('aria-expanded', 'false');
    if (backdrop) backdrop.classList.remove('is-open');
  }

  function toggleNav() {
    var isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (backdrop) backdrop.classList.toggle('is-open', isOpen);
  }

  toggle.addEventListener('click', toggleNav);
  if (backdrop) backdrop.addEventListener('click', closeNav);
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });
});
