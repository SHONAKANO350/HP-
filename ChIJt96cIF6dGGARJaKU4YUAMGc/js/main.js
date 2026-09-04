document.addEventListener("DOMContentLoaded", function () {
  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("global-nav");

  if (!header || !toggle || !nav) return;

  toggle.addEventListener("click", function () {
    var isOpen = header.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 880) {
      header.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
});
