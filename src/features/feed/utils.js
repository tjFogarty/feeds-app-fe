export function loadScript(src) {
  let s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = src;
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
}

export function loadStyle(src, className = "hljs-styles") {
  let s = document.createElement("link");
  s.rel = "stylesheet";
  s.className = className;
  s.href = src;
  var x = document.getElementsByTagName("link")[0];
  x.parentNode.insertBefore(s, x);
}

export function loadSyntaxHighlighterStyles() {
  let theme = "light";
  let syntaxStyle = document.querySelector(".hljs-styles");
  let body = document.body;

  if (syntaxStyle) {
    syntaxStyle.parentNode.removeChild(syntaxStyle);
  }

  if (body.classList.contains("is-dark-theme")) {
    theme = "dark";
  }

  loadStyle(
    `https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-${theme}.min.css`
  );
}
