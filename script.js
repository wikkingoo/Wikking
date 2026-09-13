/* ============================================================
   WIKKING HUANG® — Fashion Portfolio
   Hero cursor trail · Torn seam parallax · 2-col masonry · Reveal
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Hero: images follow the cursor (hero only) ---------- */

  var HERO_IMGS = [];
  var HERO_IMGS_SMALL = []; /* lighter set for touch devices */
  for (var h = 1; h <= 14; h++) {
    var hName = ("0" + h).slice(-2);
    HERO_IMGS.push("assets/hero-" + hName + ".jpg");
    HERO_IMGS_SMALL.push("assets/hero-m" + hName + ".jpg");
  }
  /* random display order (both sets share the same shuffle) */
  for (var ri = HERO_IMGS.length - 1; ri > 0; ri--) {
    var rj = Math.floor(Math.random() * (ri + 1));
    var tmp = HERO_IMGS[ri];
    HERO_IMGS[ri] = HERO_IMGS[rj];
    HERO_IMGS[rj] = tmp;
    var tmp2 = HERO_IMGS_SMALL[ri];
    HERO_IMGS_SMALL[ri] = HERO_IMGS_SMALL[rj];
    HERO_IMGS_SMALL[rj] = tmp2;
  }

  /* cycle instead of random-picking: every image shows once before repeating */
  var heroIdx = 0;
  function nextHeroSrc(list) {
    var arr = list || HERO_IMGS;
    var src = arr[heroIdx % arr.length];
    heroIdx++;
    return src;
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

  function spawnTrail(x, y, size, cap, list) {
    var limit = cap || MAX_TRAIL;
    if (activeTrail.length >= limit) {
      var oldest = activeTrail.shift();
      if (oldest && oldest.parentNode) oldest.parentNode.removeChild(oldest);
    }

    var img = new Image();
    img.className = "trail-img";
    img.alt = "";
    img.decoding = "async";

    size = size || 140 + Math.random() * 110;
    var rot = Math.round(Math.random() * 14 - 7);
    var dur = (1.1 + Math.random() * 0.5).toFixed(2);

    img.style.width = size + "px";
    img.style.left = Math.round(x - size / 2) + "px";
    img.style.top = Math.round(y - size / 2) + "px";
    img.style.setProperty("--rot", rot + "deg");
    img.style.animationDuration = dur + "s";
    img.src = nextHeroSrc(list);

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

  /* Touch: finger-follow trail inside the hero (small images).
     Vertical swipes are released to normal page scroll. */
  var isTouchDevice =
    "ontouchstart" in window ||
    (navigator.maxTouchPoints || 0) > 0 ||
    window.matchMedia("(pointer: coarse)").matches;
  if (isTouchDevice) {
    var tActive = false;
    var tScroll = false;
    var tStart = { x: 0, y: 0 };

    /* warm the light image set so the first touches paint instantly */
    function warmTrailImages() {
      var wi = 0;
      (function step() {
        if (wi >= HERO_IMGS_SMALL.length) return;
        var wim = new Image();
        wim.decoding = "async";
        wim.src = HERO_IMGS_SMALL[wi++];
        setTimeout(step, 120); /* staggered: never competes with the page load */
      })();
    }
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(warmTrailImages, { timeout: 2000 });
    } else {
      setTimeout(warmTrailImages, 800);
    }

    hero.addEventListener("touchstart", function (e) {
      if (e.touches.length !== 1) return;
      /* leave the screen-edge swipe zone to the browser / OS (back gesture) */
      if (e.touches[0].clientX < 24 || e.touches[0].clientX > window.innerWidth - 24) {
        tActive = false;
        return;
      }
      tActive = true;
      tScroll = false;
      tStart.x = e.touches[0].clientX;
      tStart.y = e.touches[0].clientY;
    }, { passive: true });

    hero.addEventListener("touchmove", function (e) {
      if (!tActive || e.touches.length !== 1) return;
      var t = e.touches[0];
      var dx = t.clientX - tStart.x;
      var dy = t.clientY - tStart.y;
      /* judge by the whole gesture: a mostly-vertical swipe scrolls the page,
         a mostly-horizontal one keeps drawing the trail */
      if (!tScroll && Math.abs(dy) > 14 && Math.abs(dy) > Math.abs(dx) * 1.2) {
        tScroll = true;
        return;
      }
      if (tScroll) return;
      if (
        t.clientX < heroRect.left || t.clientX > heroRect.right ||
        t.clientY < heroRect.top || t.clientY > heroRect.bottom
      ) {
        return;
      }
      var now = performance.now();
      if (now - lastSpawn < 55) return;
      lastSpawn = now;
      spawnTrail(t.clientX, t.clientY, 80 + Math.random() * 40, 10, HERO_IMGS_SMALL);
    }, { passive: true });

    function endTouch() {
      tActive = false;
      tScroll = false;
    }
    hero.addEventListener("touchend", endTouch);
    hero.addEventListener("touchcancel", endTouch);
  }

  /* ---------- Work cards open their detail page ---------- */

  function loadHoverImg(img) {
    if (!img || img.getAttribute("src")) return;
    img.setAttribute("src", img.getAttribute("data-src"));
    var hoverSet = img.getAttribute("data-srcset");
    if (hoverSet) img.setAttribute("srcset", hoverSet);
  }

  var cardEls = Array.prototype.slice.call(document.querySelectorAll(".card"));
  var hoverImgs = [];

  /* mouse/trackpad: warm the covers so the first hover switches instantly */
  if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    cardEls.forEach(function (card) {
      var img = card.querySelector("img.d[data-src]");
      if (img) hoverImgs.push(img);
    });
    var warmHoverImgs = function () {
      var hi = 0;
      (function nextHover() {
        if (hi >= hoverImgs.length) return;
        loadHoverImg(hoverImgs[hi++]);
        setTimeout(nextHover, 200); /* staggered, never blocks the page */
      })();
    };
    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(warmHoverImgs, { timeout: 3000 });
    } else {
      setTimeout(warmHoverImgs, 1200);
    }
  }

  /* touch-only devices (no hover): switch each card's two images by itself
     while the card is on screen — same look as hovering, no tap needed */
  if (window.matchMedia("(hover: none)").matches && "IntersectionObserver" in window) {
    cardEls.forEach(function (card, ci) {
      var img = card.querySelector("img.d[data-src]");
      if (!img) return;
      var timer = null;
      var first = null;
      var shown = false;
      var inView = false;

      function flip() {
        shown = !shown;
        card.classList.toggle("is-revealed", shown);
      }
      function startCycle() {
        if (timer) return;
        loadHoverImg(img);
        first = setTimeout(function () { if (inView) flip(); }, 800 + (ci % 6) * 420);
        timer = setInterval(function () { if (inView) flip(); }, 4200);
      }
      function stopCycle() {
        if (first) { clearTimeout(first); first = null; }
        if (timer) { clearInterval(timer); timer = null; }
        shown = false;
        card.classList.remove("is-revealed");
      }

      var cardIO = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          inView = en.isIntersecting;
          if (inView) startCycle();
          else stopCycle();
        });
      }, { rootMargin: "120px 0px" });
      cardIO.observe(card);
    });
  }

  cardEls.forEach(function (card) {
    var hoverImg = card.querySelector("img.d[data-src]");
    if (hoverImg) {
      card.addEventListener("pointerenter", function (e) {
        if (!e.pointerType || e.pointerType === "mouse" || e.pointerType === "pen") {
          loadHoverImg(hoverImg);
        }
      });
    }

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
