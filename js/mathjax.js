// mathjax.js - Configuration for MathJax to render LaTeX equations

window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)']], // Inline math delimiters
    displayMath: [['$$', '$$'], ['\\[', '\\]']], // Display math delimiters
    processEscapes: true, // Process \$ as dollar sign
    processEnvironments: true, // Process LaTeX environments like align
    packages: ['base', 'ams', 'autoload'] // Load necessary packages
  },
  options: {
    skipHtmlTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'], // Skip processing in these tags
    ignoreHtmlClass: 'tex2jax_ignore', // Ignore elements with this class
    renderActions: {
      find: [10, function (doc) {
        for (const node of document.querySelectorAll('script[type^="math/tex"]')) {
          const display = !!node.type.match(/; *mode=display/);
          const math = new doc.options.MathItem(node.textContent, doc.inputJax[0], display);
          math.start = { node: node, delim: '', n: 0 };
          math.end = { node: node, delim: '', n: 0 };
          doc.math.push(math);
        }
      }, '']
    }
  },
  chtml: {
    fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2', // Font for rendering
    adaptiveCSS: true // Optimize CSS for performance
  },
  startup: {
    ready: () => {
      MathJax.startup.defaultReady();
      MathJax.startup.promise.then(() => {
        console.log('MathJax is loaded and ready');
      });
    }
  }
};