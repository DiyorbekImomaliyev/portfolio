/* Builds project cards and popups from projects.js */
var grid = document.getElementById("project-grid");
var popups = document.getElementById("popups");

function el(html) {
  var t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstChild;
}

function thumbSrc(item) {
  if (item.type === "youtube") return "https://img.youtube.com/vi/" + item.id + "/hqdefault.jpg";
  if (item.type === "video") return item.poster;
  return item.src;
}

PROJECTS.forEach(function (p) {
  // ----- card -----
  grid.appendChild(el(
    '<button class="project-card" data-open="' + p.id + '">' +
      '<div class="media' + (p.fit === "contain" ? " contain" : "") + '"><img src="' + p.cover + '" alt="' + p.title + '" loading="lazy"></div>' +
      '<h3>' + p.title + '</h3>' +
      '<p class="muted">' + p.card + '</p>' +
      '<p class="tags">' + p.tag + '</p>' +
    '</button>'
  ));

  // ----- popup -----
  var multi = p.gallery.length > 1;
  var thumbs = multi ? p.gallery.map(function (item, i) {
    return '<button class="thumb' + (item.type !== "image" ? " is-video" : "") + '" data-i="' + i + '" aria-label="Show item ' + (i + 1) + '">' +
      '<img src="' + thumbSrc(item) + '" alt="" loading="lazy"></button>';
  }).join("") : "";

  var did = p.did.map(function (d) { return "<li>" + d + "</li>"; }).join("");
  var links = p.links.map(function (l) {
    return '<a href="' + l.url + '" class="button' + (l.primary ? " button-primary" : "") + '" target="_blank" rel="noopener">' + l.label + "</a>";
  }).join("");

  var dlg = el(
    '<dialog id="' + p.id + '" class="popup" aria-label="' + p.title + '">' +
      '<button class="close-button" data-close aria-label="Close">✕</button>' +
      '<div class="popup-body">' +
        '<div class="viewer">' +
          '<div class="stage-wrap"><div class="stage"></div>' +
          (multi ? '<button class="nav-arrow prev" aria-label="Previous">‹</button><button class="nav-arrow next" aria-label="Next">›</button>' : '') +
          '</div>' +
          (multi ? '<span class="counter"></span>' : '') +
          (multi ? '<div class="thumbs">' + thumbs + '</div>' : '') +
        '</div>' +
        '<div class="details">' +
          '<p class="eyebrow">' + p.tag + '</p>' +
          '<h2>' + p.title + '</h2>' +
          '<p class="muted">' + p.summary + '</p>' +
          '<h3>What I did</h3><ul class="muted">' + did + '</ul>' +
          (p.result ? '<h3>Result</h3><p class="muted">' + p.result + '</p>' : '') +
          '<h3>Tools</h3><p class="muted">' + p.tools + '</p>' +
          (links ? '<div class="buttons">' + links + '</div>' : '') +
        '</div>' +
      '</div>' +
    '</dialog>'
  );
  popups.appendChild(dlg);

  var stage = dlg.querySelector(".stage");
  var counter = dlg.querySelector(".counter");
  var current = 0;

  function show(i) {
    current = (i + p.gallery.length) % p.gallery.length;
    var item = p.gallery[current];
    if (item.type === "youtube") {
      stage.innerHTML = '<iframe src="https://www.youtube.com/embed/' + item.id + '" title="' + p.title + ' video" allowfullscreen></iframe>';
    } else if (item.type === "video") {
      stage.innerHTML = '<video src="' + item.src + '" poster="' + item.poster + '" controls preload="none"></video>';
    } else {
      stage.innerHTML = '<img src="' + item.src + '" alt="' + (item.alt || p.title) + '">';
    }
    if (counter) counter.textContent = (current + 1) + " / " + p.gallery.length;
    dlg.querySelectorAll(".thumb").forEach(function (t, n) {
      t.classList.toggle("active", n === current);
    });
  }

  dlg._show = show;
  dlg._current = function () { return current; };
  dlg._reset = function () { stage.innerHTML = ""; }; // stops any video

  dlg.querySelectorAll(".thumb").forEach(function (t) {
    t.addEventListener("click", function () { show(+t.dataset.i); });
  });
  var prev = dlg.querySelector(".prev"), next = dlg.querySelector(".next");
  if (prev) prev.addEventListener("click", function () { show(current - 1); });
  if (next) next.addEventListener("click", function () { show(current + 1); });

  dlg.querySelector("[data-close]").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", dlg._reset);
  dlg.addEventListener("keydown", function (e) {
    if (!multi) return;
    if (e.key === "ArrowLeft") show(current - 1);
    if (e.key === "ArrowRight") show(current + 1);
  });
});

grid.addEventListener("click", function (e) {
  var card = e.target.closest("[data-open]");
  if (!card) return;
  var dlg = document.getElementById(card.dataset.open);
  dlg._show(0);
  dlg.showModal();
});

/* Highlight the nav link of the section being read */
(function () {
  var links = document.querySelectorAll(".nav-links a");
  var map = {};
  links.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
  if (!("IntersectionObserver" in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting && map[en.target.id]) {
        links.forEach(function (a) { a.classList.remove("active"); });
        map[en.target.id].classList.add("active");
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  Object.keys(map).forEach(function (id) {
    var sec = document.getElementById(id);
    if (sec) io.observe(sec);
  });
})();
