/* ============================================================
   WIKKING HUANG® — Fashion Portfolio
   Hero cursor trail · Torn seam parallax · 2-col masonry · Reveal
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Hero: images follow the cursor (hero only) ---------- */

  var HERO_IMGS = [];
  for (var h = 1; h <= 14; h++) HERO_IMGS.push("assets/hero-" + ("0" + h).slice(-2) + ".jpg");
  /* random display order */
  for (var ri = HERO_IMGS.length - 1; ri > 0; ri--) {
    var rj = Math.floor(Math.random() * (ri + 1));
    var tmp = HERO_IMGS[ri];
    HERO_IMGS[ri] = HERO_IMGS[rj];
    HERO_IMGS[rj] = tmp;
  }

  var activeTrail = [];
  var lastSpawn = 0;
  var MAX_TRAIL = 9;
  var hero = document.querySelector(".hero");
  var heroRect = hero.getBoundingClientRect();

  function refreshHeroRect() {
    heroRect = hero.getBoundingClientRect();
  }

  window.addEventListener("scroll", refreshHeroRect, { passive: true });
  window.addEventListener("resize", refreshHeroRect);

  function spawnTrail(x, y) {
    if (activeTrail.length >= MAX_TRAIL) {
      var oldest = activeTrail.shift();
      if (oldest && oldest.parentNode) oldest.parentNode.removeChild(oldest);
    }

    var img = new Image();
    img.className = "trail-img";
    img.alt = "";

    var size = 140 + Math.random() * 110;
    var rot = Math.round(Math.random() * 14 - 7);
    var dur = (1.1 + Math.random() * 0.5).toFixed(2);

    img.style.width = size + "px";
    img.style.left = Math.round(x - size / 2) + "px";
    img.style.top = Math.round(y - size / 2) + "px";
    img.style.setProperty("--rot", rot + "deg");
    img.style.animationDuration = dur + "s";
    img.src = HERO_IMGS[Math.floor(Math.random() * HERO_IMGS.length)];

    document.body.appendChild(img);
    activeTrail.push(img);

    img.addEventListener("animationend", function () {
      var i = activeTrail.indexOf(img);
      if (i !== -1) activeTrail.splice(i, 1);
      if (img.parentNode) img.parentNode.removeChild(img);
    });
  }

  window.addEventListener("pointermove", function (e) {
    if (e.pointerType && e.pointerType !== "mouse") return;
    if (
      e.clientX < heroRect.left || e.clientX > heroRect.right ||
      e.clientY < heroRect.top || e.clientY > heroRect.bottom
    ) {
      return;
    }
    var now = performance.now();
    if (now - lastSpawn < 55) return;
    lastSpawn = now;
    spawnTrail(e.clientX, e.clientY);
  });

  document.addEventListener("mouseleave", function () {
    activeTrail.forEach(function (img) {
      if (img.parentNode) img.parentNode.removeChild(img);
    });
    activeTrail.length = 0;
  });

  /* Touch fallback: quietly cycle images inside the hero */
  if (window.matchMedia("(pointer: coarse)").matches) {
    setInterval(function () {
      var x = window.innerWidth * (0.3 + Math.random() * 0.4);
      var y = window.innerHeight * (0.38 + Math.random() * 0.22);
      spawnTrail(x, y);
    }, 1700);
  }

  /* ---------- Work cards open their detail page ---------- */

  Array.prototype.forEach.call(document.querySelectorAll(".card"), function (card) {
    card.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;
      var n = card.getAttribute("data-work");
      if (n) window.location.href = "work-detail-v3.html?work=" + n;
    });
  });

  /* ---------- Scroll reveal ---------- */

  /* ---------- Infinite marquees: duplicate content until no gaps ---------- */

  function fillMarquee(trackEl, wrapEl) {
    if (!trackEl || !wrapEl) return;
    var all = Array.prototype.slice.call(trackEl.children);
    if (!all.length) return;
    var half = all.length / 2;
    var unit = all.slice(0, half);
    var unitW = trackEl.scrollWidth / 2;
    if (!unitW) return;
    var need = Math.ceil((wrapEl.clientWidth * 2) / unitW);
    var copies = Math.max(2, Math.ceil(need / 2) * 2);
    trackEl.innerHTML = "";
    for (var c = 0; c < copies; c++) {
      unit.forEach(function (n) {
        trackEl.appendChild(n.cloneNode(true));
      });
    }
  }

  var bandEl = document.querySelector(".band");
  var bandTrackEl = document.querySelector(".band-track");
  fillMarquee(bandTrackEl, bandEl);

  var tickerEl = document.querySelector(".ticker");
  var tickerTrackEl = document.querySelector(".ticker-track");
  fillMarquee(tickerTrackEl, tickerEl);

  window.addEventListener("resize", function () {
    fillMarquee(bandTrackEl, bandEl);
    fillMarquee(tickerTrackEl, tickerEl);
  });

  var revealables = Array.prototype.slice.call(
    document.querySelectorAll(".card, .reveal")
  );

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add("visible"); });
  }
})();
