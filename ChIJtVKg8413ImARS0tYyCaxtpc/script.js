document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.getElementById("hamburger");
  var mobileNav = document.getElementById("mobile-nav");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", function () {
      var isOpen = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.classList.toggle("is-open", !isOpen);
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.setAttribute("aria-expanded", "false");
        mobileNav.classList.remove("is-open");
      });
    });
  }

  var lightbox = document.getElementById("lightbox");
  if (lightbox) {
    var lightboxImg = document.getElementById("lightbox-image");
    var lightboxCaption = document.getElementById("lightbox-caption");
    var closeBtn = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll(".gallery-trigger").forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var img = trigger.querySelector("img");
        lightboxImg.src = img.getAttribute("src");
        lightboxImg.alt = img.getAttribute("alt");

        var alt = trigger.getAttribute("data-alt") || "";
        var creditText = trigger.getAttribute("data-credit-text") || "";
        var creditUri = trigger.getAttribute("data-credit-uri") || "";

        lightboxCaption.textContent = "";
        var altNode = document.createTextNode(alt);
        lightboxCaption.appendChild(altNode);
        lightboxCaption.appendChild(document.createElement("br"));

        var prefix = document.createTextNode("撮影提供: ");
        lightboxCaption.appendChild(prefix);

        var creditLink = document.createElement("a");
        creditLink.href = creditUri;
        creditLink.target = "_blank";
        creditLink.rel = "noopener noreferrer";
        creditLink.textContent = creditText;
        lightboxCaption.appendChild(creditLink);

        lightbox.classList.add("is-open");
      });
    });

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightboxImg.src = "";
    }

    closeBtn.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeLightbox();
      }
    });
  }
});
