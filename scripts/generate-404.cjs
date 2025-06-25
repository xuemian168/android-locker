const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, '../dist');
const indexPath = path.join(distDir, 'index.html');
const outPath = path.join(distDir, '404.html');

const fallbackScript = `\n<script type="text/javascript">\n  // Single Page Apps for GitHub Pages\n  // https://github.com/rafgraph/spa-github-pages\n  (function(l) {\n    if (l.search[1] === '/') {\n      var decoded = l.search.slice(1).split('&').map(function(s) {\n        return s.replace(/~and~/g, '&')\n      }).join('?');\n      window.history.replaceState(null, null,\n          l.pathname.slice(0, -1) + decoded + l.hash\n      );\n    }\n  }(window.location))\n</script>\n`;

let html = fs.readFileSync(indexPath, 'utf-8');
if (!html.includes('</body>')) {
  throw new Error('index.html does not contain </body>');
}
html = html.replace('</body>', fallbackScript + '</body>');
fs.writeFileSync(outPath, html, 'utf-8');
console.log('✅ 404.html generated from index.html with SPA fallback script.'); 