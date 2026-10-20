/* Asconix Systems — contour hero, language toggle, contact form */

(function () {
  "use strict";

  /* ---------- Language toggle (EN default, NO available) ---------- */

  var NO = {
    skip: "Hopp til innhold",
    nav_services: "Tjenester",
    nav_approach: "Slik jobber vi",
    nav_contact: "Kontakt",
    hero_title: "Systemer som holder.",
    hero_lead: "Asconix Systems utvikler og sikrer IT-infrastruktur, web- og mobilløsninger for virksomheter i hele Norge.",
    cta_talk: "Ta kontakt",
    cta_services: "Se hva vi gjør",
    services_title: "Hva vi gjør",
    services_lead: "Tre fagområder, ett team. Du får én kontaktperson som forstår hvordan serverne, appene og sikkerheten din henger sammen.",
    s1_title: "IT-infrastruktur",
    s1_desc: "Fundamentet virksomheten din går på. Vi planlegger, bygger og drifter nettverk, servere og skyplattformer, slik at de er raske, gjenopprettbare og enkle å administrere.",
    s1_a: "Sky- og hybridplattformer",
    s1_b: "Nettverk, servere og lagring",
    s1_c: "Backup og katastrofegjenoppretting",
    s1_d: "Overvåking og løpende drift",
    s1_e: "Migrering fra eldre systemer",
    s2_title: "Web og mobil",
    s2_desc: "Nettsider, webapplikasjoner og mobilapper folk faktisk liker å bruke, bygget for å vedlikeholdes i årevis i stedet for å skrives om annethvert år.",
    s2_a: "Nettsider og webapplikasjoner",
    s2_b: "iOS- og Android-apper",
    s2_c: "API-er og systemintegrasjoner",
    s2_d: "Design og brukeropplevelse",
    s2_e: "Hosting og vedlikehold",
    s3_title: "IT-sikkerhet",
    s3_desc: "Sikkerhet som er en del av byggingen, ikke noe som legges på etterpå. Vi finner svakhetene, tetter dem og forbereder teamet ditt på den dagen noe går galt likevel.",
    s3_a: "Sikkerhetsvurderinger og penetrasjonstesting",
    s3_b: "Identitet, tilgang og flerfaktorautentisering",
    s3_c: "Herding av servere og skykontoer",
    s3_d: "Beredskapsplaner for sikkerhetshendelser",
    s3_e: "Klar for GDPR og NIS2",
    approach_title: "Slik jobber vi",
    approach_lead: "Alle prosjekter følger de samme fire stegene, enten det er en ny nettside eller en full ombygging av infrastrukturen.",
    p1_title: "Kartlegge",
    p1_desc: "Vi starter med systemene dine, menneskene dine og det som ville svidd mest om det sluttet å virke.",
    p2_title: "Utforme",
    p2_desc: "Du får en skriftlig plan med tydelige prioriteringer, kostnader og avveininger før vi bygger noe.",
    p3_title: "Bygge",
    p3_desc: "Vi leverer i små steg du kan se og teste, og dokumenterer underveis.",
    p4_title: "Drifte",
    p4_desc: "Vi blir med etter lansering for å overvåke, oppdatere og forbedre, eller overleverer ryddig hvis du heller vil det.",
    expect_title: "Hva du kan forvente",
    e1_title: "Vanlig språk.",
    e1_desc: "Vi forklarer valg ut fra kostnad og risiko, ikke fagsjargong.",
    e2_title: "Sikkerhet fra første dag.",
    e2_desc: "Hver designbeslutning vurderes mot hvordan den kan angripes.",
    e3_title: "Norsk selskap, lokal støtte.",
    e3_desc: "Du når oss på norsk eller engelsk, i din tidssone.",
    contact_title: "Fortell oss hva du jobber med",
    contact_lead: "Send noen linjer, så tar vi kontakt.",
    f_name: "Navn",
    f_email: "E-post",
    f_msg: "Melding",
    f_error: "Fyll inn navn, en gyldig e-postadresse og en melding.",
    f_send: "Send melding",
    f_note: "Åpner e-postprogrammet ditt med meldingen klar til sending.",
    footer_country: "Norge",
    nav_products: "Produkter",
    products_title: "Våre produkter",
    products_lead: "Vi bygger også for oss selv. Kvile er vårt fargetema for verktøyene utviklere bruker hele dagen.",
    k_tag: "Farger som lar øynene hvile.",
    k_desc: "Kvile betyr hvile. Det er én rolig palett for 52 apper: editorer, terminaler, skall, kommandolinjeverktøy og nettlesere, i fire varianter fra natt til høy kontrast.",
    k_f1: "Én palettfil genererer alle 52 appene, så en endring når alle samtidig.",
    k_f2: "Kontrasten er målt i hver variant, og aksentene er kontrollert for fargeblindhet.",
    k_f3: "En gratis versjon og en gratis e-bok på 60 sider om farger på skjerm.",
    k_cta: "Besøk kvile.dev",
    k_book: "Gratis e-bok (PDF)",
    k_variants: "Kvile-variant"
  };

  var META_DESC = {
    en: "Asconix Systems is a Norwegian IT company offering IT consulting, IT security, and web and mobile solutions for businesses across Norway.",
    no: "Asconix Systems er et norsk IT-selskap som tilbyr IT-rådgivning, IT-sikkerhet og web- og mobilløsninger for virksomheter i hele Norge."
  };
  var TITLE = {
    en: "Asconix Systems | IT consulting, IT security, web and mobile solutions",
    no: "Asconix Systems | IT-rådgivning, IT-sikkerhet, web- og mobilløsninger"
  };

  var nodes = document.querySelectorAll("[data-i18n]");
  nodes.forEach(function (el) { el.dataset.en = el.textContent; });

  var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
  ariaNodes.forEach(function (el) { el.dataset.enAria = el.getAttribute("aria-label"); });

  var currentLang = "en";

  var metaDesc = document.querySelector('meta[name="description"]');
  var buttons = document.querySelectorAll(".lang button");

  function setLang(lang, persist) {
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      el.textContent = lang === "no" && NO[key] ? NO[key] : el.dataset.en;
    });
    ariaNodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      el.setAttribute("aria-label", lang === "no" && NO[key] ? NO[key] : el.dataset.enAria);
    });
    currentLang = lang;
    renderKvile();
    document.documentElement.lang = lang === "no" ? "nb" : "en";
    var fullLogo = document.querySelector(".brand-full");
    if (fullLogo) {
      fullLogo.alt = lang === "no"
        ? "Asconix Systems: IT-rådgivning, IT-sikkerhet, web- og mobilløsninger"
        : "Asconix Systems: IT consulting, IT security, web and mobile solutions";
    }
    document.title = TITLE[lang];
    if (metaDesc) metaDesc.setAttribute("content", META_DESC[lang]);
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    if (persist) {
      try { localStorage.setItem("asconix-lang", lang); } catch (e) { /* storage unavailable */ }
    }
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { setLang(b.dataset.lang, true); });
  });

  var saved = null;
  try { saved = localStorage.getItem("asconix-lang"); } catch (e) { /* ignore */ }
  if (saved === "no" || saved === "en") {
    setLang(saved, false);
  } else if ((navigator.language || "").toLowerCase().match(/^(nb|nn|no)/)) {
    setLang("no", false);
  }

  /* ---------- Kvile: variant switcher (screenshot, accent colours, caption) ---------- */

  // Accent colours and background of each variant, taken from kvile.dev
  var KVILE = {
    natt:     { bg: "#0d151b", colors: ["#bdb1fe", "#85c38f", "#57a3f7", "#01dfd5", "#e29e2c", "#cdc94b", "#ca87b4", "#eb7b5f"] },
    skumring: { bg: "#1a232b", colors: ["#ac8cb9", "#3dc2a0", "#5d9de5", "#46cef3", "#c88c3b", "#d0ba53", "#f49bd0", "#f18c7e"] },
    dag:      { bg: "#f0f8ff", colors: ["#683f9f", "#477d3e", "#0a73cb", "#076767", "#b75001", "#6c4e00", "#935891", "#8f3e48"] },
    kontrast: { bg: "#050a0f", colors: ["#a7afff", "#57cba3", "#a8d8ff", "#1ff5ce", "#efbb70", "#dfde4f", "#e294d5", "#fe8f7b"] }
  };
  var KVILE_TEXT = {
    en: {
      natt:     { name: "Natt, night.",     text: "Deep blue-black with a soft, cool light. Made for long evenings.", alt: "Xcode showing a Swift file in Kvile Natt" },
      skumring: { name: "Skumring, dusk.",  text: "A little lighter than Natt, for rooms that are not quite dark.", alt: "Xcode showing a Swift file in Kvile Skumring" },
      dag:      { name: "Dag, day.",        text: "Pale blue-white paper and ink that stays readable in daylight.", alt: "Xcode showing a Swift file in Kvile Dag" },
      kontrast: { name: "Kontrast, high contrast.", text: "The same palette pushed to the highest contrast, for bright rooms and tired eyes.", alt: "Xcode showing a Swift file in Kvile Kontrast" }
    },
    no: {
      natt:     { name: "Natt.",     text: "Dyp blåsvart med mykt, kjølig lys. Laget for lange kvelder.", alt: "Xcode med en Swift-fil i Kvile Natt" },
      skumring: { name: "Skumring.", text: "Litt lysere enn Natt, for rom som ikke er helt mørke.", alt: "Xcode med en Swift-fil i Kvile Skumring" },
      dag:      { name: "Dag.",      text: "Blekt blåhvitt papir og blekk som er lesbart i dagslys.", alt: "Xcode med en Swift-fil i Kvile Dag" },
      kontrast: { name: "Kontrast.", text: "Samme palett skrudd til høyeste kontrast, for lyse rom og slitne øyne.", alt: "Xcode med en Swift-fil i Kvile Kontrast" }
    }
  };

  var kvVariant = "natt";
  var kvShot = document.getElementById("kvile-shot");
  var kvImg = document.getElementById("kv-img");
  var kvCaption = document.getElementById("kv-caption");
  var kvSwatches = document.getElementById("kv-swatches");
  var kvButtons = document.querySelectorAll(".kv-controls button");

  function renderKvile() {
    if (!kvShot) return;
    var v = kvVariant || "natt";
    var t = KVILE_TEXT[currentLang || "en"][v];
    var def = KVILE[v];
    var src = "images/kvile-" + v + ".webp";
    if (kvImg.getAttribute("src") !== src) kvImg.setAttribute("src", src);
    kvImg.alt = t.alt;
    kvCaption.textContent = t.name + " " + t.text;
    kvShot.style.setProperty("--kv-bg", def.bg);
    var chips = kvSwatches.children;
    for (var i = 0; i < chips.length; i++) chips[i].style.setProperty("--c", def.colors[i]);
    kvButtons.forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.variant === v)); });
  }

  if (kvShot) {
    kvButtons.forEach(function (b) {
      b.addEventListener("click", function () {
        kvVariant = b.dataset.variant;
        renderKvile();
      });
    });

    // Load the other three screenshots shortly before the section scrolls into view,
    // so switching variants is instant without slowing down the first page load.
    var preloaded = false;
    var preload = function () {
      if (preloaded) return;
      preloaded = true;
      Object.keys(KVILE).forEach(function (k) { (new Image()).src = "images/kvile-" + k + ".webp"; });
    };
    if ("IntersectionObserver" in window) {
      var kvObs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { preload(); kvObs.disconnect(); }
      }, { rootMargin: "600px 0px" });
      kvObs.observe(kvShot);
    } else {
      preload();
    }
    renderKvile();
  }

  /* ---------- Header: full logo with tagline at the top, compact logo once scrolled ---------- */

  var header = document.getElementById("site-header");
  if (header) {
    var compact = false;
    var onScroll = function () {
      var y = window.scrollY || window.pageYOffset;
      if (!compact && y > 80) { compact = true; header.classList.add("is-compact"); }
      else if (compact && y < 8) { compact = false; header.classList.remove("is-compact"); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Footer year ---------- */

  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---------- Contact form (opens the visitor's email app) ---------- */

  var form = document.getElementById("contact-form");
  var errorEl = document.getElementById("form-error");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.elements.name;
      var email = form.elements.email;
      var msg = form.elements.message;

      var okName = name.value.trim().length > 0;
      var okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      var okMsg = msg.value.trim().length > 0;

      name.setAttribute("aria-invalid", String(!okName));
      email.setAttribute("aria-invalid", String(!okEmail));
      msg.setAttribute("aria-invalid", String(!okMsg));

      if (!(okName && okEmail && okMsg)) {
        errorEl.hidden = false;
        (!okName ? name : !okEmail ? email : msg).focus();
        return;
      }
      errorEl.hidden = true;

      var subject = "Enquiry from " + name.value.trim();
      var body = msg.value.trim() + "\n\n" + name.value.trim() + "\n" + email.value.trim();
      window.location.href =
        "mailto:info@asconix.com?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  /* ---------- Contour field (hero) ---------- */

  var canvas = document.querySelector(".contours");
  if (!canvas || !canvas.getContext) return;
  var ctx = canvas.getContext("2d");
  var hero = canvas.parentElement;

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Smooth value noise
  var P = new Uint8Array(512);
  (function seed() {
    var p = [], i;
    for (i = 0; i < 256; i++) p[i] = i;
    var s = 7;
    for (i = 255; i > 0; i--) {
      s = (s * 16807) % 2147483647;
      var j = s % (i + 1);
      var t = p[i]; p[i] = p[j]; p[j] = t;
    }
    for (i = 0; i < 512; i++) P[i] = p[i & 255];
  })();

  function hash(x, y) { return P[P[x & 255] + (y & 255)] / 255; }
  function fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
  function noise(x, y) {
    var xi = Math.floor(x), yi = Math.floor(y);
    var xf = x - xi, yf = y - yi;
    var u = fade(xf), v = fade(yf);
    var a = hash(xi, yi), b = hash(xi + 1, yi);
    var c = hash(xi, yi + 1), d = hash(xi + 1, yi + 1);
    return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
  }
  function field(x, y) {
    return (noise(x, y) * 0.62 + noise(x * 2.1 + 9.3, y * 2.1 + 4.7) * 0.28 + noise(x * 4.3 + 1.1, y * 4.3 + 8.2) * 0.10);
  }

  var LEVELS = [];
  for (var li = 0; li < 16; li++) LEVELS.push(0.26 + li * 0.032);
  var INDEX_EVERY = 5;   // every fifth line is heavier, like a printed map
  var ACCENT_LEVEL = 10; // one index contour is picked out in Teal Light (amber is reserved for the logo)

  var CELL = 16;
  var w = 0, h = 0, cols = 0, rows = 0, dpr = 1;
  var grid = null;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = hero.clientWidth;
    h = hero.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    CELL = w < 700 ? 14 : 16;
    cols = Math.ceil(w / CELL) + 1;
    rows = Math.ceil(h / CELL) + 1;
    grid = new Float32Array(cols * rows);
  }

  function lerp(L, v1, v2) {
    var d = v2 - v1;
    return d === 0 ? 0.5 : (L - v1) / d;
  }

  function draw(t) {
    var scale = 0.0042 * CELL / 1; // noise units per cell
    var ox = t * 0.00006 * 1, oy = t * 0.00004;
    var i, j, k;

    for (j = 0; j < rows; j++) {
      for (i = 0; i < cols; i++) {
        grid[j * cols + i] = field(i * scale * 4 + ox * 40, j * scale * 4 - oy * 40);
      }
    }

    ctx.clearRect(0, 0, w, h);
    ctx.lineCap = "round";

    for (k = 0; k < LEVELS.length; k++) {
      var L = LEVELS[k];
      var isIndex = k % INDEX_EVERY === 0;
      var isAccent = k === ACCENT_LEVEL;

      ctx.beginPath();
      for (j = 0; j < rows - 1; j++) {
        for (i = 0; i < cols - 1; i++) {
          var va = grid[j * cols + i];
          var vb = grid[j * cols + i + 1];
          var vc = grid[(j + 1) * cols + i + 1];
          var vd = grid[(j + 1) * cols + i];
          var idx = (va > L ? 8 : 0) | (vb > L ? 4 : 0) | (vc > L ? 2 : 0) | (vd > L ? 1 : 0);
          if (idx === 0 || idx === 15) continue;

          var x0 = i * CELL, y0 = j * CELL;
          var tx = x0 + lerp(L, va, vb) * CELL, ty = y0;                 // top
          var rx = x0 + CELL, ry = y0 + lerp(L, vb, vc) * CELL;          // right
          var bx = x0 + lerp(L, vd, vc) * CELL, by = y0 + CELL;          // bottom
          var lx = x0, ly = y0 + lerp(L, va, vd) * CELL;                 // left

          switch (idx) {
            case 1: case 14: seg(lx, ly, bx, by); break;
            case 2: case 13: seg(bx, by, rx, ry); break;
            case 3: case 12: seg(lx, ly, rx, ry); break;
            case 4: case 11: seg(tx, ty, rx, ry); break;
            case 5: seg(tx, ty, rx, ry); seg(lx, ly, bx, by); break;
            case 6: case 9: seg(tx, ty, bx, by); break;
            case 7: case 8: seg(tx, ty, lx, ly); break;
            case 10: seg(tx, ty, lx, ly); seg(bx, by, rx, ry); break;
          }
        }
      }

      if (isAccent) {
        ctx.strokeStyle = "rgba(46, 201, 191, 0.95)";
        ctx.lineWidth = 2;
      } else if (isIndex) {
        ctx.strokeStyle = "rgba(46, 201, 191, 0.3)";
        ctx.lineWidth = 1.4;
      } else {
        ctx.strokeStyle = "rgba(155, 167, 177, 0.17)";
        ctx.lineWidth = 1;
      }
      ctx.stroke();
    }
  }

  function seg(x1, y1, x2, y2) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
  }

  var running = false, visible = true, raf = 0, last = 0;

  function frame(now) {
    raf = 0;
    if (!running || !visible || document.hidden) return;
    if (now - last > 40) { // about 25 fps is plenty for slow drift
      draw(now);
      last = now;
    }
    raf = requestAnimationFrame(frame);
  }

  function start() {
    if (reduceMotion || running) return;
    running = true;
    if (!raf) raf = requestAnimationFrame(frame);
  }

  resize();
  draw(0);

  if (!reduceMotion) {
    start();
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        visible = entries[0].isIntersecting;
        if (visible && running && !raf) raf = requestAnimationFrame(frame);
      }).observe(hero);
    }
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden && running && !raf) raf = requestAnimationFrame(frame);
    });
  }

  var resizeTimer = 0;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
      draw(performance.now());
    }, 120);
  });
})();
