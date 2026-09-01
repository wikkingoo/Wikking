/* ============================================================
   Work detail page — data, gallery, pager, carousel
   ============================================================ */

(function () {
  "use strict";

  var PROJECTS = [
    { id: "01", title: "女装设计 WOMENSWEAR DESIGN", cat: "Womenswear", year: "2026", status: "Featured",
      desc: "本项目名为幻羽REMOLT，以蝉的生命周期为叙事主线。现实中蝉于地下长久蛰伏，破土后仅有一次羽化振翅的机会。REMOLT打破自然既定规则，畅想可以无限循环的换羽蜕变。剥离蝉的写实躯体，提炼自然符号做抽象化设计，以女式礼服为设计载体，演绎仿生设计的美学表达。",
      materials: "Cotton poplin · Silk organza", process: "构思 → 纸样 → 白胚 → 成衣 → 拍摄", role: "Design · Pattern · Construction",
      rows: [
        ["类别 Category", "服装设计"],
        ["年份 Year", "2026"],
        ["过程 Process", "构思 → 纸样 → 白胚 → 成衣 → 拍摄"],
        ["类型 TYPE", "实体服装"]
      ] },
    { id: "02", title: "数字时装设计 DIGITAL FASHION DESIGN", cat: "Editorial", year: "2023", status: "Available",
      desc: "本项目名为水的沉思·Meditation of aqua，以流动的水为灵感，观水形变，通过设计语言将无形的自然意趣融入有型的服装结构。先经由虚拟服装数字化演绎水的动态肌理，再落地真实可触的实体服饰。虚实双向设计表达，诠释人与自然的共生关系，使服装成为连接自然哲思与设计美学的载体。",
      materials: "Wool crepe · Satin", process: "虚拟服装制作 → 实体服装制作及拍摄", role: "Design · Styling",
      rows: [
        ["类别 Category", "服装设计"],
        ["年份 Year", "2023"],
        ["过程 Process", "虚拟服装制作 → 实体服装制作及拍摄"],
        ["类型 TYPE", "虚拟服装及实体服装"]
      ] },
    { id: "03", title: "品牌视觉 Brand Visual", cat: "Brand", year: "2025", status: "Available",
      desc: "本项目为女装品牌GOLDEN BARRY金和百瑞进行品牌视觉设计工作，涵盖品牌白皮书文案撰写与版式设计、产品图模特图拍摄与精修、电商平台主图及详情页排版落地。项目过程中熟悉电商合规广告用语规范，理解电商运营逻辑。",
      materials: "Wool melton · Cotton twill", process: "Draping → Pattern → Sample", role: "Design · Construction",
      rows: [
        ["类别 Category", "品牌视觉"],
        ["年份 Year", "2026"],
        ["软件 Software", "PS | AI"]
      ] },
    { id: "04", title: "AI模特制作及摄影 AI PHOTOGRAPHY", cat: "Photography", year: "2026", status: "Available",
      desc: "本项目借助AI技术定制化生成虚拟模特，制作专业模卡并模拟商业拍摄，搭建专属模特视觉资产。同时立足LEMAIRE 2026秋冬「mine eyes」系列开展本土化视觉企划创作，选取本季核心单品进行重组搭配，通过AI模特完成服饰上身演绎，创意产出多场景商业视觉大片。",
      materials: "Organza · Chiffon · Mesh", process: "模特制作 → 商业拍摄", role: "Concept · Design",
      rows: [
        ["类别 Category", "AI设计及摄影"],
        ["年份 Year", "2026"],
        ["软件 Software", "LOVART | MIDJOURNEY | PS"],
        ["过程 Process", "模特制作 → 商业拍摄"]
      ] },
    { id: "05", title: "海报设计 Poster Design", cat: "Poster", year: "2026", status: "Available",
      desc: "A zero-waste experiment — every offcut accounted for inside the pattern, nothing left to throw away.",
      materials: "Upcycled cotton · Deadstock", process: "Pattern research → Toile → Sample", role: "Concept · Pattern" },
    { id: "06", title: "产品设计 PRODUCT DESIGN", cat: "Product", year: "2026", status: "Available",
      desc: "本项目名为捕梦网DREAMCATCHER，是一款以深海梦境为主题的香薰小夜灯，集无火香薰、氛围灯光、艺术微景观于一体的桌面治愈系器物。产品初步造型依托Blender三维建模完成，色彩上以静谧蓝紫为主调，辅以机械金属质感做赛博化处理。同时结合主流电商平台视觉逻辑与消费审美，落地产品主图、详情页文案策划与视觉排版设计，打造可视、可感、可闻的实体产品。",
      materials: "Ceramic · Glass · Fragrance oil", process: "三维建模渲染 → 视觉设计制作 → 品牌文案策划 → 电商视觉呈现", role: "Design · Development",
      rows: [
        ["类别 Category", "产品设计"],
        ["年份 Year", "2025"],
        ["软件 Software", "BLENDER | LOVART | PS | AI"],
        ["过程 Process", "三维建模渲染 → 视觉设计制作 → 品牌文案策划 → 电商视觉呈现"]
      ] },
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
  var id = raw >= 1 && raw <= 6 ? raw : 1;
  var proj = PROJECTS[id - 1];
  /* Physical homepage order: 1 → 2 → 4 → 3 → 5 → 6 (labels follow it) */
  var ORDER = [1, 2, 4, 3, 5, 6];
  var orderIdx = ORDER.indexOf(id);
  var labelNum = pad(orderIdx + 1);

  document.title = proj.title + " — WIKKING HUANG®";

  document.getElementById("crumbName").textContent = proj.title;
  document.getElementById("infoTag").textContent = "PROJECT—" + labelNum;
  var infoTitleEl = document.getElementById("infoTitle");
  var titleSpace = proj.title.indexOf(" ");
  if (titleSpace > 0) {
    infoTitleEl.textContent = "";
    var tCn = document.createElement("span");
    tCn.className = "t-cn";
    tCn.textContent = proj.title.slice(0, titleSpace);
    var tEn = document.createElement("span");
    tEn.className = "t-en";
    tEn.textContent = proj.title.slice(titleSpace + 1);
    infoTitleEl.appendChild(tCn);
    infoTitleEl.appendChild(tEn);
  } else {
    infoTitleEl.textContent = proj.title;
  }
  document.getElementById("infoDesc").textContent = proj.desc;
  /* Info rows: per-work override or default set */
  var infoRowsEl = document.querySelector(".info-rows");
  var rowsCfg = proj.rows || [
    ["Category", proj.cat],
    ["Year", proj.year],
    ["Materials", proj.materials],
    ["Process", proj.process],
    ["Role", proj.role],
    ["Status", proj.status, true]
  ];
  if (infoRowsEl) {
    infoRowsEl.textContent = "";
    rowsCfg.forEach(function (r) {
      var row = document.createElement("div");
      row.className = "row";
      var dt = document.createElement("dt");
      dt.textContent = r[0];
      var dd = document.createElement("dd");
      dd.textContent = r[1];
      if (r[2]) dd.className = "blue";
      row.appendChild(dt);
      row.appendChild(dd);
      infoRowsEl.appendChild(row);
    });
  }

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
    },
    4: { count: 20, label: "WORK 04", prefix: "dd4-" },
    6: { count: 5, label: "WORK 06", prefix: "g6-", phone: true }
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
    /* Bind directly to the real book buttons — later model/product loops
       reuse `var prevBtn/nextBtn` names which would clobber these refs */
    prevBtn.addEventListener("click", function () { onArrow(-1); });
    nextBtn.addEventListener("click", function () { onArrow(1); });

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

    function onArrow(dir) {
      console.log("[book] arrow click", dir, "s=", s, "turning=", turning);
      if (turning) finishTurn(); /* self-heal any stuck state before turning */
      turn(dir);
    }

    viewport.addEventListener("click", function (e) {
      var r = viewport.getBoundingClientRect();
      turn((e.clientX - r.left) < r.width / 2 ? -1 : 1);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") turn(1);
      if (e.key === "ArrowLeft") turn(-1);
    });

  }

  /* iPhone mockup (work 06): static shell PNG with a transparent screen
     area; a stitched vertical long image scrolls inside the screen via
     drag only — the outer page never scrolls during the gesture */
  function initPhone(cfg, ddList) {
    var wrap = document.createElement("div");
    wrap.className = "dd-phone reveal";

    var label = document.createElement("div");
    label.className = "phone-label mono";
    label.textContent = "Product Detail — Scroll View";

    var mock = document.createElement("div");
    mock.className = "phone-mock";

    var base = document.createElement("img");
    base.className = "phone-base";
    base.src = "assets/g6-phone.png";
    base.alt = "iPhone mockup";
    base.draggable = false;

    var screen = document.createElement("div");
    screen.className = "phone-screen";

    /* Stitched long image split into 5 normal-size segments so every
       browser decodes and renders it reliably */
    var stack = document.createElement("div");
    stack.className = "phone-stack";
    for (var si = 1; si <= 5; si++) {
      var long = document.createElement("img");
      long.className = "phone-long";
      long.src = "assets/g6-phone-long-" + ("0" + si).slice(-2) + ".jpg";
      long.alt = "Product detail long image " + si;
      long.draggable = false;
      stack.appendChild(long);
      long.addEventListener("load", measure);
    }

    screen.appendChild(stack);
    mock.appendChild(base);
    mock.appendChild(screen);
    wrap.appendChild(label);
    wrap.appendChild(mock);

    var hint = document.createElement("div");
    hint.className = "phone-hint mono";
    var hintCn = document.createElement("span");
    hintCn.className = "hint-cn";
    hintCn.textContent = "拖动滚动 · 点击放大";
    var hintEn = document.createElement("span");
    hintEn.className = "hint-en";
    hintEn.textContent = "DRAG TO SCROLL · TAP TO ENLARGE";
    hint.appendChild(hintCn);
    hint.appendChild(hintEn);
    wrap.appendChild(hint);

    ddList.appendChild(wrap);

    var offset = 0;
    var maxY = 0;

    function measure() {
      var imgH = stack.offsetHeight;
      var scrH = screen.clientHeight;
      maxY = Math.max(0, imgH - scrH);
      offset = Math.max(-maxY, Math.min(0, offset));
      stack.style.transform = "translateY(" + offset + "px)";
    }

    var dragging = false;
    var startPt = null;
    var startOff = 0;
    var movedDist = 0;

    function openLongViewer() {
      var ov = document.createElement("div");
      ov.className = "lightbox longbox";
      var limg = document.createElement("div");
      limg.className = "longbox-stack";
      for (var li = 1; li <= 5; li++) {
        var limgi = document.createElement("img");
        limgi.src = "assets/g6-phone-long-" + ("0" + li).slice(-2) + ".jpg";
        limgi.alt = "Product detail long image " + li;
        limg.appendChild(limgi);
      }
      ov.appendChild(limg);
      document.body.appendChild(ov);
      document.body.style.overflow = "hidden";

      function close() {
        if (ov.parentNode) ov.parentNode.removeChild(ov);
        document.body.style.overflow = "";
        document.removeEventListener("keydown", keyFn);
      }
      function keyFn(e) {
        if (e.key === "Escape") close();
      }
      document.addEventListener("keydown", keyFn);
      ov.addEventListener("click", function (e) {
        if (e.target === ov) close();
      });
    }

    screen.addEventListener("pointerdown", function (e) {
      dragging = true;
      startPt = e.clientY;
      startOff = offset;
      movedDist = 0;
      screen.setPointerCapture(e.pointerId);
      screen.classList.add("dragging");
      e.preventDefault();
    });

    screen.addEventListener("pointermove", function (e) {
      if (!dragging || startPt === null) return;
      var dy = e.clientY - startPt;
      movedDist = Math.abs(dy);
      offset = Math.max(-maxY, Math.min(0, startOff + dy));
      stack.style.transform = "translateY(" + offset + "px)";
      e.preventDefault();
    });

    function endDrag(openOnTap) {
      dragging = false;
      var wasTap = startPt !== null && movedDist < 6;
      startPt = null;
      screen.classList.remove("dragging");
      if (openOnTap && wasTap) openLongViewer();
    }
    screen.addEventListener("pointerup", function () { endDrag(true); });
    screen.addEventListener("pointercancel", function () { endDrag(false); });

    window.addEventListener("resize", measure);
    measure();
  }

  /* Product gallery grid below the phone (work 06): only the square set
     (05–08), two per row, centered; seamless loop GIF below at same width */
  function initProductGrid(ddList) {
    var wrap = document.createElement("div");
    wrap.className = "dd-phone-grid reveal";

    var label = document.createElement("div");
    label.className = "phone-grid-label mono";
    label.textContent = "Product Gallery — 04";

    var grid = document.createElement("div");
    grid.className = "g6-grid";

    var imgs = [];
    var ids = [5, 6, 7, 8];
    for (var i = 0; i < ids.length; i++) {
      var cell = document.createElement("figure");
      cell.className = "g6-cell square";

      var img = document.createElement("img");
      img.className = "g6-img";
      img.src = "assets/g6-grid-" + ("0" + ids[i]).slice(-2) + ".jpg";
      img.alt = "Product detail " + ids[i];
      img.loading = "lazy";
      img.draggable = false;

      cell.appendChild(img);
      grid.appendChild(cell);
      imgs.push(img);
    }

    wrap.appendChild(label);
    wrap.appendChild(grid);

    var photoWrap = document.createElement("div");
    photoWrap.className = "g6-photo";
    var photoImg = document.createElement("img");
    photoImg.src = "assets/g6-grid-photo.jpg";
    photoImg.alt = "Product scene";
    photoImg.loading = "lazy";
    photoWrap.appendChild(photoImg);

    var gifImg = document.createElement("img");
    gifImg.className = "g6-gif";
    gifImg.src = "assets/g6-loop.gif";
    gifImg.alt = "Cyber sea music box — seamless loop";
    gifImg.loading = "lazy";
    photoWrap.appendChild(gifImg);

    wrap.appendChild(photoWrap);

    ddList.appendChild(wrap);

    var hires = [];
    for (var j = 0; j < ids.length; j++) {
      hires.push({
        src: "assets/g6-grid-hi-" + ("0" + ids[j]).slice(-2) + ".jpg",
        title: "Product Detail — 0" + ids[j]
      });
    }
    var lb = createLightbox(hires);
    for (var k = 0; k < imgs.length; k++) {
      (function (idx) {
        imgs[idx].addEventListener("click", function () { lb.open(idx); });
      })(k);
    }
  }

  var dd = document.getElementById("designDetails");
  var ddCfg = DESIGN_DETAILS[id];
  if (dd && ddCfg) {
    document.getElementById("ddMeta").textContent =
      ddCfg.label + " — (" + ddCfg.count + ")" + (ddCfg.video ? " · Video" : "");

    var ddList = document.getElementById("ddList");
    if (ddCfg.book) {
      initBook(ddCfg, ddList);
    } else if (ddCfg.phone) {
      initPhone(ddCfg, ddList);
      initProductGrid(ddList);
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
        cap.appendChild(idx);

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

  /* Shared poster lightbox: prev/next/close + keyboard */
  function createLightbox(posters) {
    var lbEl = null;
    var lbIndex = 0;
    var lbImg = null;
    var lbCounter = null;
    var total = posters.length;

    function lbRender() {
      lbImg.src = posters[lbIndex].src;
      lbImg.alt = posters[lbIndex].title;
      lbCounter.textContent = ("0" + (lbIndex + 1)).slice(-2) + " / " + ("0" + total).slice(-2);
    }

    function lbStep(d) {
      lbIndex = (lbIndex + d + total) % total;
      lbRender();
    }

    function lbClose() {
      if (lbEl && lbEl.parentNode) lbEl.parentNode.removeChild(lbEl);
      document.body.style.overflow = "";
    }

    function lbKey(e) {
      if (!lbEl || !lbEl.parentNode) return;
      if (e.key === "Escape") lbClose();
      if (e.key === "ArrowLeft") lbStep(-1);
      if (e.key === "ArrowRight") lbStep(1);
    }

    function open(i) {
      lbIndex = i;
      if (!lbEl) {
        lbEl = document.createElement("div");
        lbEl.className = "lightbox";

        lbImg = document.createElement("img");
        lbImg.className = "lightbox-img";
        lbEl.appendChild(lbImg);

        var top = document.createElement("div");
        top.className = "lightbox-top mono";
        lbCounter = document.createElement("span");
        lbCounter.className = "lightbox-counter";
        var close = document.createElement("button");
        close.type = "button";
        close.className = "lightbox-close mono";
        close.textContent = "✕ Close";
        close.setAttribute("aria-label", "Close");
        close.addEventListener("click", lbClose);
        top.appendChild(lbCounter);
        top.appendChild(close);
        lbEl.appendChild(top);

        var prev = document.createElement("button");
        prev.type = "button";
        prev.className = "lightbox-btn lightbox-prev mono";
        prev.textContent = "←";
        prev.setAttribute("aria-label", "Previous poster");
        prev.addEventListener("click", function () { lbStep(-1); });
        lbEl.appendChild(prev);

        var next = document.createElement("button");
        next.type = "button";
        next.className = "lightbox-btn lightbox-next mono";
        next.textContent = "→";
        next.setAttribute("aria-label", "Next poster");
        next.addEventListener("click", function () { lbStep(1); });
        lbEl.appendChild(next);

        lbEl.addEventListener("click", function (e) {
          if (e.target === lbEl) lbClose();
        });
        document.addEventListener("keydown", lbKey);
      }
      lbRender();
      document.body.appendChild(lbEl);
      document.body.style.overflow = "hidden";
    }

    return { open: open };
  }

  /* Pinned full-page fan carousel (work 05): exactly 9 arc slots — middle
     largest, 4 each side gradually smaller, stepped fan silhouette; the
     posters loop infinitely through the slots; vertical wheel scroll drives
     horizontal motion while the section stays pinned. */
  function buildPosterFan(container) {
    var posters = [];
    for (var pA = 1; pA <= 5; pA++) {
      posters.push({
        src: "assets/g5-" + ("0" + pA).slice(-2) + ".jpg",
        title: "Poster " + pA
      });
    }

    var section = document.createElement("section");
    section.className = "poster-scroll";

    var sticky = document.createElement("div");
    sticky.className = "poster-scroll-sticky";

    var stage = document.createElement("div");
    stage.className = "poster-scroll-stage";

    var N = 30; /* posters repeated 6×; pinned range covers 3 full cycles */
    var cards = [];
    for (var i = 0; i < N; i++) {
      var card = document.createElement("button");
      card.type = "button";
      card.className = "fan-card";
      card.setAttribute("aria-label", "Enlarge " + posters[i % 5].title);

      var img = document.createElement("img");
      img.src = posters[i % 5].src;
      img.alt = posters[i % 5].title;
      img.loading = "lazy";
      card.appendChild(img);
      stage.appendChild(card);
      cards.push(card);
    }

    var cap = document.createElement("div");
    cap.className = "fan-cap mono";
    cap.textContent = "WIKKING HUANG® — Poster Series";

    sticky.appendChild(stage);
    sticky.appendChild(cap);
    section.appendChild(sticky);

    /* Pinned hero position: right after the breadcrumb */
    var gridEl = container.querySelector(".detail-grid");
    if (gridEl && gridEl.parentNode === container) {
      container.insertBefore(section, gridEl);
    } else {
      container.appendChild(section);
    }

    var lb = createLightbox(posters);
    for (var c = 0; c < cards.length; c++) {
      (function (i) {
        cards[i].addEventListener("click", function () { lb.open(i % 5); });
      })(c);
    }

    var reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Arc geometry: center-symmetric fan — sizes shrink gradually outward,
       vertical lift steps down by one uniform height per slot (smooth arc),
       cards overlap with the center on top; shifted slightly left and sized
       so the outermost cards always stay fully on screen */
    var FAN_MIN = 0;
    var FAN_MAX = 15; /* 3 poster cycles (15 card-steps) per full sweep */
    var fanPos = 0; /* current center offset in card units */
    var centerW = 0;
    var centerH = 0;
    var spacing = 0;
    var stepH = 0;

    function scaleAt(d) {
      return Math.max(0.58, 1 - 0.105 * d);
    }

    function layout() {
      var avail = sticky.clientWidth;
      if (!avail) return;
      var stickyH = sticky.offsetHeight || window.innerHeight;
      centerW = avail * 0.19;
      centerH = centerW / 0.75; /* 3:4 card ratio */
      spacing = centerW * 0.52; /* ~35% overlap between neighbours */
      stepH = centerH * 0.055; /* one uniform vertical step */
      var fanH = 4 * stepH + centerH;
      var baseline = Math.max(36, (stickyH - fanH) / 2);
      for (var i = 0; i < cards.length; i++) {
        cards[i].style.width = centerW + "px";
        cards[i].style.height = centerH + "px";
        cards[i].style.bottom = baseline + "px";
        /* Anchor the card CENTER on the stage center, not its left edge —
           this is what keeps the whole fan truly centered on the page */
        cards[i].style.left = "50%";
        cards[i].style.marginLeft = -centerW / 2 + "px";
      }
      update();
    }

    function update() {
      /* active = center card index; wheel moves it across 3 poster cycles */
      var active = (reduced ? 0 : fanPos) + 4;
      for (var i = 0; i < cards.length; i++) {
        var d = i - active;
        var ad = Math.abs(d);
        if (ad > 4.2) {
          cards[i].style.visibility = "hidden";
          continue;
        }
        cards[i].style.visibility = "visible";
        var slot = Math.min(4, Math.round(ad));
        var s = scaleAt(ad);
        /* smooth, symmetric arc: center lifted highest, uniform step down */
        var lift = Math.max(0, (4 - ad)) * stepH;
        var dx = d * spacing;
        var dy = -lift;
        cards[i].style.zIndex = String(20 - slot);
        cards[i].style.transform =
          "translateX(" + dx + "px) translateY(" + dy + "px) scale(" + s + ")";
      }
    }

    /* Wheel drives the fan directly — while the fan still has room in the
       scroll direction, the page itself does not scroll */
    sticky.addEventListener(
      "wheel",
      function (e) {
        if (reduced) return;
        var dy = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
        if (!dy) return;
        var blocked =
          (dy > 0 && fanPos < FAN_MAX) || (dy < 0 && fanPos > FAN_MIN);
        if (blocked) {
          fanPos = Math.max(FAN_MIN, Math.min(FAN_MAX, fanPos + dy * 0.006));
          update();
          e.preventDefault();
        }
      },
      { passive: false }
    );

    layout();
    window.addEventListener("resize", layout);
  }

  if (id === 5) {
    var gEl5 = document.getElementById("gallery");
    if (gEl5) gEl5.style.display = "none";
    var gridEl5 = document.querySelector(".detail-grid");
    if (gridEl5) gridEl5.classList.add("poster-page");
    /* Work 05: hide the project info block (5-HT—05 … Status Available),
       keep only the back / prev / next actions */
    var hideIds5 = ["infoTag", "infoTitle", "infoDesc"];
    for (var hI = 0; hI < hideIds5.length; hI++) {
      var hideEl = document.getElementById(hideIds5[hI]);
      if (hideEl) hideEl.style.display = "none";
    }
    var rows5 = document.querySelector(".info-rows");
    if (rows5) rows5.style.display = "none";
    var fanHost = document.querySelector(".detail") || document.body;
    buildPosterFan(fanHost);
  }

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
      { src: "assets/g3-01.jpg", label: "Main" },
      { src: "assets/g3-02.jpg", label: "View 2" },
      { src: "assets/g3-03.jpg", label: "View 3" },
      { src: "assets/g3-04.jpg", label: "View 4" },
      { src: "assets/g3-05.jpg", label: "View 5" }
    ];
  } else if (id === 4) {
    thumbsList = [
      { src: "assets/g4-01.jpg", label: "Main" },
      { src: "assets/g4-02.jpg", label: "View 2" },
      { src: "assets/g4-03.jpg", label: "View 3" },
      { src: "assets/g4-04.jpg", label: "View 4" },
      { src: "assets/g4-05.jpg", label: "View 5" }
    ];
  } else if (id === 5) {
    thumbsList = [
      { src: "assets/g5-01.jpg", label: "Main" },
      { src: "assets/g5-02.jpg", label: "View 2" },
      { src: "assets/g5-03.jpg", label: "View 3" },
      { src: "assets/g5-04.jpg", label: "View 4" },
      { src: "assets/g5-05.jpg", label: "View 5" }
    ];
  } else if (id === 6) {
    thumbsList = [
      { src: "assets/g6-01.jpg", label: "Main" },
      { src: "assets/g6-02.jpg", label: "View 2" },
      { src: "assets/g6-03.jpg", label: "View 3" },
      { src: "assets/g6-04.jpg", label: "View 4" },
      { src: "assets/g6-05.jpg", label: "View 5" }
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

  var currentThumb = 0;
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
      currentThumb = i;
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

  /* ---------- Work 06: click the main image to enlarge (hi-res) ---------- */

  if (id === 6) {
    var hi6 = [
      { src: "assets/g6-hi-01.jpg", title: proj.title + " — 01" },
      { src: "assets/g6-hi-02.jpg", title: proj.title + " — 02" },
      { src: "assets/g6-hi-03.jpg", title: proj.title + " — 03" },
      { src: "assets/g6-hi-04.jpg", title: proj.title + " — 04" },
      { src: "assets/g6-hi-05.jpg", title: proj.title + " — 05" }
    ];
    var lb6 = createLightbox(hi6);
    var mainWrap6 = document.getElementById("galleryMain");
    if (mainWrap6) mainWrap6.classList.add("zoomable");
    mainImg.addEventListener("click", function () {
      lb6.open(currentThumb || 0);
    });
  }

  /* ---------- Big image grows to align with "Back to works" bottom ---------- */

  function layoutGallery() {
    var gallery = document.getElementById("gallery");
    var thumbsEl = document.getElementById("thumbs");
    var backBtn = document.getElementById("backBtn");
    var mainWrap = document.getElementById("galleryMain");
    if (!gallery || !mainWrap) return;
    if (gallery.style.display === "none") return;

    var ratio =
      mainImg.naturalWidth && mainImg.naturalHeight
        ? mainImg.naturalWidth / mainImg.naturalHeight
        : 0.75;

    var targetH = 0;
    if (backBtn && window.innerWidth >= 901) {
      targetH = backBtn.getBoundingClientRect().bottom - gallery.getBoundingClientRect().top;
    } else if (thumbsEl) {
      targetH = thumbsEl.getBoundingClientRect().height;
    }

    var maxByWidth = mainWrap.clientWidth / ratio;
    var H = Math.max(120, Math.min(targetH, maxByWidth));
    mainImg.style.height = H + "px";
    mainImg.style.width = "auto";

    /* Bigger thumbs with small fixed gaps, total = big image height */
    if (thumbsEl) {
      var gap = 6;
      var thumbH = (H - 4 * gap) / 5;
      var thumbW = Math.max(48, Math.min(120, Math.round(thumbH * 0.75)));
      thumbs.style.gap = gap + "px";
      thumbs.style.width = thumbW + "px";
      thumbs.style.flexBasis = thumbW + "px";
    }
  }

  layoutGallery();
  window.addEventListener("resize", layoutGallery);
  mainImg.addEventListener("load", layoutGallery);

  /* ---------- Prev / next ---------- */

  document.getElementById("prevBtn").addEventListener("click", function () {
    var n = ORDER[(orderIdx + 5) % 6];
    window.location.href = "work-detail-v2.html?work=" + n;
  });

  document.getElementById("nextBtn").addEventListener("click", function () {
    var n = ORDER[(orderIdx + 1) % 6];
    window.location.href = "work-detail-v2.html?work=" + n;
  });

  /* ---------- More from the series (drag carousel) ---------- */

  var carousel = document.getElementById("carousel");

  var shown = 0;
  for (var k = 0; k < ORDER.length && shown < 5; k++) {
    var m = ORDER[k];
    if (m === id) continue;
    shown++;
    var p = PROJECTS[m - 1];
    var a = document.createElement("a");
    a.className = "car-card";
    a.href = "work-detail-v2.html?work=" + m;

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
    tag.textContent = "PROJECT—" + pad(ORDER.indexOf(m) + 1);
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
