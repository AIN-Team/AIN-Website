(function(){
  function fixPaths(fragment){
    var links = fragment.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(function(l){
      if (/assets\/css\/footer\.css$/.test(l.getAttribute('href')) === false) {
        l.setAttribute('href','assets/css/footer.css');
      }
    });
    var logo = fragment.querySelector('.logo img');
    if (logo){
      var src = logo.getAttribute('src') || '';
      if (src.indexOf('../components/') === 0) {
        logo.setAttribute('src', 'components/AINLogo-2.png');
      } else if (src.indexOf('components/') !== 0 && src.indexOf('assets/') !== 0 && src.indexOf('/') !== 0) {
        logo.setAttribute('src','components/AINLogo-2.png');
      }
    }
  }

  function enhance(fragment){
    var y = fragment.getElementById ? fragment.getElementById('year') : null;
    if (!y) y = document.getElementById('year');
    if (y) { y.textContent = new Date().getFullYear(); }
  }

  function loadFooter(){
    var mount = document.getElementById('site-footer');
    if(!mount) return;
    fetch('components/footer.html', {cache:'no-cache'}).then(function(r){return r.text();}).then(function(html){
      var tpl = document.createElement('template');
      tpl.innerHTML = html.trim();
      var fragment = tpl.content;
      fixPaths(fragment);
      mount.innerHTML = '';
      mount.appendChild(fragment);
      enhance(document);
    }).catch(function(e){ console.error('Footer load failed:', e); });
  }

  document.addEventListener('DOMContentLoaded', loadFooter);
})();

// footer.js

document.getElementById("site-footer").innerHTML = `
  <div class="container">
    <div class="footer-brand">
      <a href="/" class="logo" aria-label="Arab Innovation Network home">
        <img src="/image/AINLogo-2.png" alt="AIN" />
      </a>
      <p>Arab Innovation Network<br>
        An-Najah National University Student Society</p>
    </div>

    <nav class="footer-nav" aria-label="Footer">
      <ul>
        <li><a href="/about.html">About</a></li>
        <li><a href="/activities.html">Activities</a></li>
        <li><a href="/societies.html">Societies</a></li>
        <li><a href="/sponsorship.html">Sponsorship</a></li>
        <li><a href="/gallery.html">Gallery</a></li>
        <li><a href="/contact.html">Contact</a></li>
      </ul>
    </nav>

    <div class="footer-meta">
      <p>
        <span id="year"></span> © Arab Innovation Network. All rights reserved.
      </p>
      <p class="meta-links">
        <a href="/privacy.html">Privacy</a>
        <span aria-hidden="true">·</span>
        <a href="/terms.html">Terms</a>
      </p>
    </div>
  </div>
`;

// YEAR AUTO UPDATE
(function () {
  var y = document.getElementById('year');
  if (y) {
    y.textContent = new Date().getFullYear();
  }
})();
