// おうちネイル 試作サイト共通スクリプト(モバイルナビ・フローティング予約ボタンの開閉)
document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.getElementById("navToggle");
  var siteNav = document.getElementById("siteNav");
  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  var ctaToggle = document.getElementById("floatingCtaToggle");
  var ctaMenu = document.getElementById("floatingCtaMenu");
  if (ctaToggle && ctaMenu) {
    ctaToggle.addEventListener("click", function () {
      var isOpen = ctaMenu.classList.toggle("is-open");
      ctaToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    document.addEventListener("click", function (event) {
      if (!ctaMenu.contains(event.target) && !ctaToggle.contains(event.target)) {
        ctaMenu.classList.remove("is-open");
        ctaToggle.setAttribute("aria-expanded", "false");
      }
    });
  }
});
