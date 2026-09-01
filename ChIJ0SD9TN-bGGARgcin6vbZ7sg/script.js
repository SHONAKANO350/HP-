// ハンバーガーメニュー開閉(モバイルナビ)
document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburger");
  var nav = document.getElementById("main-nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      hamburger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ギャラリーライトボックス(gallery.htmlのみ該当要素が存在)
  var lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  var lightboxImg = lightbox.querySelector("[data-lightbox-img]");
  var lightboxCaption = lightbox.querySelector("[data-lightbox-caption]");
  var closeBtn = lightbox.querySelector("[data-lightbox-close]");

  document.querySelectorAll("[data-lightbox-trigger]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      lightboxImg.src = trigger.getAttribute("data-full");
      lightboxImg.alt = trigger.getAttribute("data-alt") || "";
      lightboxCaption.textContent = trigger.getAttribute("data-caption") || "";
      lightbox.classList.add("is-open");
    });
  });

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightboxImg.src = "";
  }

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
});
