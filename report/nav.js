/* nav.js — single source of truth for the gallery top-nav.
   Every page includes this (root pages: "nav.js"; pages/ pages: "../nav.js").
   It rewrites <nav class="top"> identically everywhere, fixes the relative paths for the
   page's location, and marks the active link — so switching pages never drops an option.
   Styling comes from each page's existing nav.top CSS (page.css / inline). */
(function () {
  // hrefs are written relative to the report/ ROOT; nav.js rewrites them per location.
  // Live tools only — the deprecated per-experiment pages were archived in the 2026-07
  // pivot (site/archive/report-pages/). The gallery is being rebuilt for the new architecture.
  var LINKS = [
    ['index.html', 'Overview'],
    ['arenas.html', 'Arenas'],
    ['mapmaker.html', 'Map maker'],
    ['__spacer__', ''],
    ['../index.html', '← Research hub']
  ];
  function apply() {
    var nav = document.querySelector('nav.top');
    if (!nav) return;
    var path = location.pathname;
    var inPages = /\/pages\//.test(path);
    var prefix = inPages ? '../' : '';
    var file = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
    var curKey = (inPages ? 'pages/' : '') + file;
    var html = '<a class="home" href="' + prefix + 'index.html">ZYMERA · coverage gallery</a>';
    for (var i = 0; i < LINKS.length; i++) {
      var href = LINKS[i][0], label = LINKS[i][1];
      if (href === '__spacer__') { html += '<span style="flex:1"></span>'; continue; }
      var active = (href === curKey) ? ' active' : '';
      html += '<a class="lnk' + active + '" href="' + prefix + href + '">' + label + '</a>';
    }
    nav.innerHTML = html;
  }
  apply();  // the script is included after <nav>, so this rewrites it with no flash…
  // …and again once the DOM is fully parsed, in case a page includes nav.js from <head>.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', apply);
})();
