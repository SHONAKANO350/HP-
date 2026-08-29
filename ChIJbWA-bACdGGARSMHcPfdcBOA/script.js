document.addEventListener("DOMContentLoaded", function () {
  var page = document.body.getAttribute("data-page");
  document.querySelectorAll("[data-nav]").forEach(function (link) {
    if (link.getAttribute("data-nav") === page) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });

  var hamburger = document.getElementById("hamburger");
  var siteNav = document.getElementById("site-nav");
  if (hamburger && siteNav) {
    hamburger.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }
});
