/* ============================================================
   Work detail page — data, gallery, pager, carousel
   ============================================================ */

(function () {
  "use strict";

  var PROJECTS = [
    { id: "01", title: "幻羽 REMOLT", cat: "Womenswear", year: "2026", status: "Featured",
      desc: "A study in controlled volume — fabric shaped over the body with sharp, deliberate folds and a single clean line from shoulder to hem.",
      materials: "Cotton poplin · Silk organza", process: "Draping → Pattern → Sample", role: "Design · Pattern · Construction" },
    { id: "02", title: "水的沉思 Meditation of aqua", cat: "Editorial", year: "2025", status: "Available",
      desc: "Shape and shadow reduced to pure monochrome — line, weight and surface carrying the whole composition.",
      materials: "Wool crepe · Satin", process: "Sketch → Draping → Sample", role: "Design · Styling" },
    { id: "03", title: "品牌视觉 Brand Visual", cat: "Brand", year: "2025", status: "Available",
      desc: "Outerwear built around engineered volume — strong shoulders, clean facings and fabric that keeps its shape.",
      materials: "Wool melton · Cotton twill", process: "Draping → Pattern → Sample", role: "Design · Construction" },
    { id: "04", title: "Layered Silence", cat: "Editorial", year: "2022", status: "Archive",
      desc: "Layers as silence — soft transparencies, quiet proportions and the space between two pieces of cloth.",
      materials: "Organza · Chiffon · Mesh", process: "Research → Draping → Toile", role: "Concept · Design" },
    { id: "05", title: "Zero-Waste Series", cat: "Concept", year: "2023", status: "Available",
      desc: "A zero-waste experiment — every offcut accounted for inside the pattern, nothing left to throw away.",
      materials: "Upcycled cotton · Deadstock", process: "Pattern research → Toile → Sample", role: "Concept · Pattern" },
    { id: "06", title: "Street Archive", cat: "Menswear", year: "2022", status: "Archive",
      desc: "Urban proportion and everyday function, cut with an editorial eye — utility without the uniform.",
      materials: "Cotton twill · Canvas", process: "Sketch → Pattern → Sample", role: "Design · Construction" },
    { id: "07", title: "Black Series", cat: "Womenswear", year: "2024", status: "Available",
      desc: "The black series — discipline, depth and the absence of noise. Colour reduced until only structure remains.",
      materials: "Silk · Wool crepe", process: "Draping → Pattern → Sample", role: "Design · Pattern" },
    { id: "08", title: "Soft Geometry", cat: "Knitwear", year: "2024", status: "Available",
      desc: "Knitwear with a soft geometry — repeats, grids and tactile structure built stitch by stitch.",
      materials: "Merino wool · Linen blend", process: "Gauge test → Grading → Sample", role: "Design · Development" },
    { id: "09", title: "Architectural Linen", cat: "Womenswear", year: "2023", status: "Available",
      desc: "Linen in architectural cut — crisp edges and natural drape, seams treated as structure.",
      materials: "Linen · Cotton poplin", process: "Draping → Pattern → Sample", role: "Design · Construction" },
    { id: "10", title: "Form & Function", cat: "Outerwear", year: "2021", status: "Archive",
      desc: "Where form meets function — utility details, generous ease and pockets you actually use.",
      materials: "Cotton canvas · Nylon", process: "Sketch → Pattern → Sample", role: "Design · Pattern" },
    { id: "11", title: "Evening Studies", cat: "Red Carpet", year: "2021", status: "Archive",
      desc: "Evening studies in light and fabric — silhouettes built to move under light and hold a line in motion.",
      materials: "Silk charmeuse · Lamé", process: "Draping → Toile → Sample", role: "Design · Draping" },
    { id: "12", title: "The Shift Dress", cat: "Archive", year: "2020", status: "Archive",
      desc: "The shift dress — an archive piece re-cut, re-fit and re-considered for a new body and a new time.",
      materials: "Cotton poplin · Viscose", process: "Pattern → Toile → Sample", role: "Design · Pattern" }
  ];

  function pad(n) { return ("0" + n).slice(-2); }
  function workImg(n) { return "assets/work-" + pad(n) + ".jpg"; }
  function workDetailImg(n) { return "assets/work-" + pad(n) + "-d.jpg"; }
  function workVariantImg(n, v) { return "assets/work-" + pad(n) + "-" + v + ".jpg"; }

  /* ---------- Which project? ---------- */

  var params = new URLSearchParams(window.location.search);
  var raw = parseInt(params.get("work"), 10);
  var id = raw >= 1 && raw <= 12 ? raw : 1;
  var proj = PROJECTS[id - 1];

  document.title = proj.title + " — WIKKING HUANG®";

  document.getElementById("crumbName").textContent = proj.title;
  document.getElementById("infoTag").textContent = "5-HT—" + proj.id;
  document.getElementById("infoTitle").textContent = proj.title;
  document.getElementById("infoDesc").textContent = proj.desc;
  document.getElementById("infoCat").textContent = proj.cat;
  document.getElementById("infoYear").textContent = proj.year;
  document.getElementById("infoMat").textContent = proj.materials;
  document.getElementById("infoProc").textContent = proj.process;
  document.getElementById("infoRole").textContent = proj.role;
  document.getElementById("infoStatus").textContent = proj.status;

  /* ---------- Design Details (per-work image sets) ---------- */

  var DESIGN_DETAILS = {
    1: { count: 11, label: "WORK 01", prefix: "dd-" },
    2: { count: 8, label: "WORK 02", prefix: "dd2-" },
    3: {
      count: 31,
      label: "WORK 03",
      prefix: "dd3-",
      book: true,
      ecom: true,
      model: true,
      product: true
    }
  };

  /* Flipbook: two-page spread, realistic page turn with center crease */
  function initBook(cfg, ddList) {
    var total = cfg.count;
    var pages = [];
    for (var pi = 1; pi <= total; pi++) {
      pages.push("assets/" + cfg.prefix + ("0" + pi).slice(-2) + ".jpg");
    }

    var wrap = document.createElement("div");
    wrap.className = "dd-book reveal";

    var label = document.createElement("div");
    label.className = "book-label mono";
    label.textContent = "品牌白皮书 Brand Book — White Paper";

    var viewport = document.createElement("div");
    viewport.className = "book-viewport";

    var spread = document.createElement("div");
    spread.className = "book-spread";

    var underL = document.createElement("div");
    underL.className = "under under-left";
    var underLImg = document.createElement("img");
    underLImg.alt = "";
    underL.appendChild(underLImg);
    var underR = document.createElement("div");
    underR.className = "under under-right";
    var underRImg = document.createElement("img");
    underRImg.alt = "";
    underR.appendChild(underRImg);
    spread.appendChild(underL);
    spread.appendChild(underR);

    function makeLeaf(side) {
      var leaf = document.createElement("div");
      leaf.className = "leaf " + side;
      var front = document.createElement("div");
      front.className = "page front";
      var frontImg = document.createElement("img");
      frontImg.alt = "";
      front.appendChild(frontImg);
      var back = document.createElement("div");
      back.className = "page back";
      var backImg = document.createElement("img");
      backImg.alt = "";
      back.appendChild(backImg);
      leaf.appendChild(front);
      leaf.appendChild(back);
      return {
        leaf: leaf,
        front: front,
        frontImg: frontImg,
        backImg: backImg,
        back: back
      };
    }

    var left = makeLeaf("left");
    var right = makeLeaf("right");
    spread.appendChild(left.leaf);
    spread.appendChild(right.leaf);
    viewport.appendChild(spread);

    var nav = document.createElement("div");
    nav.className = "book-nav mono";
    var prevBtn = document.createElement("button");
    prevBtn.type = "button";
    prevBtn.className = "book-btn";
    prevBtn.textContent = "←";
    var counter = document.createElement("span");
    counter.className = "book-counter";
    var nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.className = "book-btn";
    nextBtn.textContent = "→";
    nav.appendChild(prevBtn);
    nav.appendChild(counter);
    nav.appendChild(nextBtn);

    var book = document.createElement("div");
    book.className = "book-group";
    wrap.appendChild(book);
    book.appendChild(label);
    book.appendChild(viewport);
    book.appendChild(nav);
    if (cfg.ecom) {
      var ecom = document.createElement("div");
      ecom.className = "book-ecom";
      var ecomCap = document.createElement("div");
      ecomCap.className = "book-ecom-cap mono";
      ecomCap.textContent = "电商详情页 E-COMMERCE PRODUCT DETAIL PAGE";
      var ecomRow = document.createElement("div");
      ecomRow.className = "book-ecom-row";
      for (var ei = 1; ei <= 2; ei++) {
        var eimg = document.createElement("img");
        eimg.src = "assets/ecom-0" + ei + ".jpg";
        eimg.alt = "E-commerce product detail page " + ei;
        eimg.loading = "lazy";
        ecomRow.appendChild(eimg);
      }
      ecom.appendChild(ecomCap);
      ecom.appendChild(ecomRow);
      wrap.appendChild(ecom);
    }
    if (cfg.model) {
      var model = document.createElement("div");
      model.className = "book-model";
      var modelCap = document.createElement("div");
      modelCap.className = "book-model-cap mono";
      modelCap.textContent = "模特图精修 Model photos retouched";
      var modelGrid = document.createElement("div");
      modelGrid.className = "model-grid";

      for (var mf = 1; mf <= 6; mf++) {
        var cell = document.createElement("div");
        cell.className = "model-cell";

        var cellLabel = document.createElement("div");
        cellLabel.className = "model-label mono";
        cellLabel.textContent = "0" + mf + " — Model";

        var media = document.createElement("div");
        media.className = "model-media";
        var track = document.createElement("div");
        track.className = "model-track";
        for (var mi = 1; mi <= 4; mi++) {
          var mimg = document.createElement("img");
          mimg.src = "assets/model-" + mf + "-" + mi + ".jpg";
          mimg.alt = "Model photo " + mf + " — " + mi;
          mimg.loading = "lazy";
          track.appendChild(mimg);
        }

        var prevBtn = document.createElement("button");
        prevBtn.type = "button";
        prevBtn.className = "model-btn model-prev";
        prevBtn.textContent = "←";
        var nextBtn = document.createElement("button");
        nextBtn.type = "button";
        nextBtn.className = "model-btn model-next";
        nextBtn.textContent = "→";
        var count = document.createElement("span");
        count.className = "model-count mono";

        media.appendChild(track);
        media.appendChild(prevBtn);
        media.appendChild(nextBtn);
        media.appendChild(count);

        cell.appendChild(cellLabel);
        cell.appendChild(media);
        modelGrid.appendChild(cell);

        (function (trk, pBtn, nBtn, cnt) {
          var idx = 0;
          var total = 4;
          function upd() {
            trk.style.transform = "translateX(-" + (idx * 100) + "%)";
            cnt.textContent = ("0" + (idx + 1)).slice(-2) + " / 04";
          }
          pBtn.addEventListener("click", function () {
            idx = (idx + total - 1) % total;
            upd();
          });
          nBtn.addEventListener("click", function () {
            idx = (idx + 1) % total;
            upd();
          });
          upd();
        })(track, prevBtn, nextBtn, count);
      }

      model.appendChild(modelCap);
      model.appendChild(modelGrid);
      wrap.appendChild(model);
    }
    if (cfg.product) {
      var product = document.createElement("div");
      product.className = "book-product";
      var productCap = document.createElement("div");
      productCap.className = "book-model-cap mono";
      productCap.textContent = "产品图精修 Product photos retouched";
      var productGrid = document.createElement("div");
      productGrid.className = "model-grid";

      var prodFolders = [1, 3, 4];
      for (var pf = 0; pf < prodFolders.length; pf++) {
        var pfolder = prodFolders[pf];
        var pcell = document.createElement("div");
        pcell.className = "model-cell";

        var pLabel = document.createElement("div");
        pLabel.className = "model-label mono";
        pLabel.textContent = "0" + pfolder + " — Product";

        var pmedia = document.createElement("div");
        pmedia.className = "model-media square";
        var ptrack = document.createElement("div");
        ptrack.className = "model-track";
        for (var pi2 = 1; pi2 <= 4; pi2++) {
          var pimg = document.createElement("img");
          pimg.src = "assets/product-" + pfolder + "-" + pi2 + ".jpg";
          pimg.alt = "Product photo " + pfolder + " — " + pi2;
          pimg.loading = "lazy";
          ptrack.appendChild(pimg);
        }

        var pPrev = document.createElement("button");
        pPrev.type = "button";
        pPrev.className = "model-btn model-prev";
        pPrev.textContent = "←";
        var pNext = document.createElement("button");
        pNext.type = "button";
        pNext.className = "model-btn model-next";
        pNext.textContent = "→";
        var pCount = document.createElement("span");
        pCount.className = "model-count mono";

        pmedia.appendChild(ptrack);
        pmedia.appendChild(pPrev);
        pmedia.appendChild(pNext);
        pmedia.appendChild(pCount);

        pcell.appendChild(pLabel);
        pcell.appendChild(pmedia);
        productGrid.appendChild(pcell);

        (function (trk, pBtn, nBtn, cnt) {
          var idx = 0;
          var total = 4;
          function upd() {
            trk.style.transform = "translateX(-" + (idx * 100) + "%)";
            cnt.textContent = ("0" + (idx + 1)).slice(-2) + " / 04";
          }
          pBtn.addEventListener("click", function () {
            idx = (idx + total - 1) % total;
            upd();
          });
          nBtn.addEventListener("click", function () {
            idx = (idx + 1) % total;
            upd();
          });
          upd();
        })(ptrack, pPrev, pNext, pCount);
      }

      product.appendChild(productCap);
      product.appendChild(productGrid);
      wrap.appendChild(product);
    }
    ddList.appendChild(wrap);

    var spreads = Math.max(1, Math.ceil(total / 2));
    var s = 0;
    var turning = false;
    var FLIP_MS = 1050;

    var jump = document.createElement("div");
    jump.className = "book-jump mono";
    var jumpLabel = document.createElement("span");
    jumpLabel.textContent = "Jump";
    var jumpSelect = document.createElement("select");
    jumpSelect.className = "book-jump-select";
    jumpSelect.setAttribute("aria-label", "Jump to page");
    for (var jp = 1; jp <= spreads; jp++) {
      var opt = document.createElement("option");
      opt.value = String(jp - 1);
      opt.textContent = ("0" + jp).slice(-2) + " / " + ("0" + spreads).slice(-2);
      jumpSelect.appendChild(opt);
    }
    jump.appendChild(jumpLabel);
    jump.appendChild(jumpSelect);
    book.appendChild(jump);

    function setImg(img, i) {
      if (i >= 0 && i < total) {
        img.src = pages[i];
        img.style.visibility = "visible";
      } else {
        img.removeAttribute("src");
        img.style.visibility = "hidden";
      }
    }

    function setUnder(underEl, imgEl, i) {
      if (i >= 0 && i < total) {
        imgEl.src = pages[i];
        imgEl.style.visibility = "visible";
      } else {
        imgEl.removeAttribute("src");
        imgEl.style.visibility = "hidden";
      }
    }

    function setSpread() {
      setImg(left.frontImg, s * 2);
      setImg(right.frontImg, s * 2 + 1);
      setImg(left.backImg, s * 2 - 1);
      setImg(right.backImg, s * 2 + 2);
      setUnder(underL, underLImg, s * 2 - 2);
      setUnder(underR, underRImg, s * 2 + 3);
    }

    function setCounter() {
      counter.textContent = ("0" + (s + 1)).slice(-2) + " / " + ("0" + spreads).slice(-2);
      jumpSelect.value = String(s);
      prevBtn.disabled = s <= 0;
      nextBtn.disabled = s >= spreads - 1;
    }
    setSpread();
    setCounter();

    jumpSelect.addEventListener("change", function () {
      if (turning) return;
      var target = parseInt(jumpSelect.value, 10);
      if (!isNaN(target) && target >= 0 && target < spreads) {
        s = target;
        setSpread();
        setCounter();
      }
    });

    function resetTransforms() {
      left.leaf.style.transition = "none";
      right.leaf.style.transition = "none";
      left.front.style.transition = "none";
      right.front.style.transition = "none";
      left.front.style.opacity = "1";
      right.front.style.opacity = "1";
      left.back.style.opacity = "0";
      right.back.style.opacity = "0";
      underL.style.transition = "none";
      underR.style.transition = "none";
      underL.style.opacity = "0";
      underR.style.opacity = "0";
      left.leaf.style.transform = "rotateY(0deg)";
      right.leaf.style.transform = "rotateY(0deg)";
      void spread.offsetWidth;
      left.leaf.style.transition = "";
      right.leaf.style.transition = "";
      left.front.style.transition = "";
      right.front.style.transition = "";
      underL.style.transition = "";
      underR.style.transition = "";
    }

    var flipTimer = null;

    function finishTurn() {
      if (!turning) return;
      try {
        setSpread();
        setCounter();
        resetTransforms();
      } finally {
        turning = false;
      }
    }

    function scheduleFinish() {
      window.clearTimeout(flipTimer);
      flipTimer = window.setTimeout(finishTurn, FLIP_MS + 150);
    }

    left.leaf.addEventListener("transitionend", function (e) {
      if (e.propertyName === "transform") finishTurn();
    });
    right.leaf.addEventListener("transitionend", function (e) {
      if (e.propertyName === "transform") finishTurn();
    });

    function turn(dir) {
      if (turning) return;
      if (dir === 1 && s >= spreads - 1) return;
      if (dir === -1 && s <= 0) return;
      turning = true;
      lastTurnAt = Date.now();
      if (dir === 1) {
        setImg(right.backImg, s * 2 + 2);
        right.back.style.opacity = "1";
        setUnder(underR, underRImg, s * 2 + 3);
        underR.style.opacity = "1";
        right.leaf.style.transform = "rotateY(-180deg)";
      } else {
        setImg(left.backImg, s * 2 - 1);
        left.back.style.opacity = "1";
        setUnder(underL, underLImg, s * 2 - 2);
        underL.style.opacity = "1";
        left.leaf.style.transform = "rotateY(180deg)";
      }
      s += dir;
      scheduleFinish();
    }

    /* Watchdog: never let a turn get stuck */
    var lastTurnAt = 0;
    window.setInterval(function () {
      if (turning && Date.now() - lastTurnAt > 1700) {
        finishTurn();
      }
    }, 400);

    prevBtn.addEventListener("click", function () { turn(-1); });
    nextBtn.addEventListener("click", function () { turn(1); });

    viewport.addEventListener("click", function (e) {
      var r = viewport.getBoundingClientRect();
      turn((e.clientX - r.left) < r.width / 2 ? -1 : 1);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") turn(1);
      if (e.key === "ArrowLeft") turn(-1);
    });
  }

  var dd = document.getElementById("designDetails");
  var ddCfg = DESIGN_DETAILS[id];
  if (dd && ddCfg) {
    document.getElementById("ddMeta").textContent =
      ddCfg.label + " — (" + ddCfg.count + ")" + (ddCfg.video ? " · Video" : "");

    var ddList = document.getElementById("ddList");
    if (ddCfg.book) {
      initBook(ddCfg, ddList);
    } else {
      for (var di = 1; di <= ddCfg.count; di++) {
        var fig = document.createElement("figure");
        fig.className = "dd-item reveal";

        var img = document.createElement("img");
        img.src = "assets/" + ddCfg.prefix + ("0" + di).slice(-2) + ".jpg";
        img.alt = "Design detail " + di;
        img.loading = "lazy";

        var cap = document.createElement("figcaption");
        cap.className = "dd-cap mono";
        var idx = document.createElement("span");
        idx.className = "idx";
        idx.textContent = ("0" + di).slice(-2);
        var lbl = document.createElement("span");
        lbl.textContent = "Design Detail";
        cap.appendChild(idx);
        cap.appendChild(lbl);

        fig.appendChild(img);
        fig.appendChild(cap);
        ddList.appendChild(fig);
      }

      if (ddCfg.video) {
      var vfig = document.createElement("figure");
      vfig.className = "dd-item dd-video reveal";

      var vwrap = document.createElement("div");
      vwrap.className = "dd-video-wrap";

      var video = document.createElement("video");
      video.src = ddCfg.video;
      video.controls = true;
      video.preload = "metadata";
      video.poster = ddCfg.poster || "assets/work-02.jpg";
      video.setAttribute("playsinline", "");

      var overlay = document.createElement("button");
      overlay.type = "button";
      overlay.className = "dd-play";
      overlay.setAttribute("aria-label", "Play video");
      var playLabel = document.createElement("span");
      playLabel.textContent = "▶ Play";
      overlay.appendChild(playLabel);
      overlay.addEventListener("click", function () {
        video.play();
      });
      video.addEventListener("play", function () {
        overlay.classList.add("hidden");
      });
      video.addEventListener("pause", function () {
        overlay.classList.remove("hidden");
      });

      vwrap.appendChild(video);
      vwrap.appendChild(overlay);

      var vcap = document.createElement("figcaption");
      vcap.className = "dd-cap mono";
      var vidx = document.createElement("span");
      vidx.className = "idx";
      vidx.textContent = ("0" + (ddCfg.count + 1)).slice(-2);
      var vlbl = document.createElement("span");
      vlbl.textContent = "Video";
      vcap.appendChild(vidx);
      vcap.appendChild(vlbl);

      vfig.appendChild(vwrap);
      vfig.appendChild(vcap);
      ddList.appendChild(vfig);
      }
    }

    dd.classList.add("show");
  }

  /* ---------- Gallery ---------- */

  var mainImg = document.getElementById("mainImg");
  var thumbs = document.getElementById("thumbs");

  var thumbsList;
  if (id === 1) {
    thumbsList = [
      { src: "assets/g-01.jpg", label: "Main" },
      { src: "assets/g-02.jpg", label: "View 2" },
      { src: "assets/g-03.jpg", label: "View 3" },
      { src: "assets/g-04.jpg", label: "View 4" },
      { src: "assets/g-05.jpg", label: "View 5" }
    ];
  } else if (id === 2) {
    thumbsList = [
      { src: "assets/g2-01.jpg", label: "Main" },
      { src: "assets/g2-02.jpg", label: "View 2" },
      { src: "assets/g2-03.jpg", label: "View 3", pos: "50% 78%" },
      { src: "assets/g2-04.jpg", label: "View 4", pos: "50% 78%" },
      { src: "assets/g2-05.jpg", label: "View 5", pos: "50% 78%" }
    ];
  } else if (id === 3) {
    thumbsList = [
      { src: "assets/dd3-01.jpg", label: "Cover" },
      { src: "assets/dd3-02.jpg", label: "View 2" },
      { src: "assets/dd3-03.jpg", label: "View 3" },
      { src: "assets/dd3-04.jpg", label: "View 4" },
      { src: "assets/dd3-05.jpg", label: "View 5" }
    ];
  } else {
    thumbsList = [
      { src: workImg(id), label: "Main" },
      { src: workVariantImg(id, "b"), label: "View 2" },
      { src: workVariantImg(id, "c"), label: "View 3" },
      { src: workDetailImg(id), label: "Detail" },
      { src: workVariantImg(id, "e"), label: "View 5" }
    ];
  }

  mainImg.src = thumbsList[0].src;
  mainImg.alt = proj.title;
  mainImg.style.objectPosition = thumbsList[0].pos || "50% 50%";

  thumbsList.forEach(function (t, i) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.setAttribute("aria-label", t.label);
    var img = document.createElement("img");
    img.src = t.src;
    img.alt = "";
    img.style.objectPosition = t.pos || "50% 50%";
    btn.appendChild(img);
    if (i === 0) btn.className = "active";
    btn.addEventListener("click", function () {
      mainImg.classList.add("swap");
      window.setTimeout(function () {
        mainImg.src = t.src;
        mainImg.alt = proj.title + " — " + t.label;
        mainImg.style.objectPosition = t.pos || "50% 50%";
        mainImg.classList.remove("swap");
      }, 180);
      Array.prototype.forEach.call(thumbs.children, function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
    });
    thumbs.appendChild(btn);
  });

  /* ---------- Prev / next ---------- */

  document.getElementById("prevBtn").addEventListener("click", function () {
    var n = id === 1 ? 12 : id - 1;
    window.location.href = "work-detail.html?work=" + n;
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    var n = (id % 12) + 1;
    window.location.href = "work-detail.html?work=" + n;
  });

  /* ---------- More from the series (drag carousel) ---------- */

  var carousel = document.getElementById("carousel");

  for (var k = 1; k <= 6; k++) {
    var m = ((id + k - 1) % 12) + 1;
    var p = PROJECTS[m - 1];
    var a = document.createElement("a");
    a.className = "car-card";
    a.href = "work-detail.html?work=" + m;

    var media = document.createElement("div");
    media.className = "car-media";
    var img = document.createElement("img");
    img.src = workImg(m);
    img.alt = p.title;
    img.loading = "lazy";
    media.appendChild(img);

    var cap = document.createElement("div");
    cap.className = "car-cap";
    var tag = document.createElement("span");
    tag.className = "car-tag mono";
    tag.textContent = "5-HT—" + p.id;
    var title = document.createElement("span");
    title.className = "car-title";
    title.textContent = p.title;
    var meta = document.createElement("span");
    meta.className = "car-meta mono";
    meta.textContent = p.cat + " · " + p.year;
    cap.appendChild(tag);
    cap.appendChild(title);
    cap.appendChild(meta);

    a.appendChild(media);
    a.appendChild(cap);
    carousel.appendChild(a);
  }

  /* ---------- Slider / scroll wheel ---------- */

  var slider = document.getElementById("carSlider");

  function updateSlider() {
    var max = carousel.scrollWidth - carousel.clientWidth;
    slider.max = Math.max(1, Math.round(max));
    slider.value = Math.round(carousel.scrollLeft);
  }

  carousel.addEventListener("scroll", updateSlider, { passive: true });
  window.addEventListener("resize", updateSlider);
  updateSlider();

  slider.addEventListener("input", function () {
    carousel.scrollLeft = parseFloat(slider.value);
  });

  carousel.addEventListener(
    "wheel",
    function (e) {
      if (e.deltaY !== 0) {
        carousel.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    },
    { passive: false }
  );

  /* ---------- Reveal ---------- */

  var reveals = Array.prototype.slice.call(document.querySelectorAll(".reveal"));
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
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }
})();
