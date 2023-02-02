const colors = document.getElementById("theme");
const imgColorMode = document.getElementById("imgColorMode");
const pp = document.getElementById("pp");
const root = document.documentElement.style;
const body = document.body;

colors.addEventListener("click", colorMode);

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.replace("light", "dark");
  colorModeSwitch();
} else if (window.matchMedia("(prefers-color-scheme; light").matches) {
  body.classList.replace("dark", "light");
  colorModeSwitch();
}

function dark() {
  root.setProperty("--textColor", "#f1f1f1");
  root.setProperty("--backgroundColor", "#001219");

  root.setProperty("--colorAnimation1", "#fc618d");
  root.setProperty("--colorAnimation2", "#5ad4e6");
  root.setProperty("--colorAnimation3", "#7bd88f");
  root.setProperty("--colorAnimation4", "#fce566");

  root.setProperty("--colorUnderline", "#005f73");
  imgColorMode.src = "Ressources/icon/moon.png";
  pp.src = "Ressources/image/photoProfilDark.jpg";
}

function light() {
  root.setProperty("--textColor", "#111111");
  root.setProperty("--backgroundColor", "#f2e8cf");

  root.setProperty("--colorAnimation1", "#d90429");
  root.setProperty("--colorAnimation2", "#0a9396");
  root.setProperty("--colorAnimation3", "#a7c957");
  root.setProperty("--colorAnimation4", "#ff5400");

  root.setProperty("--colorUnderline", "#9b2226");
  imgColorMode.src = "Ressources/icon/sun.png";
  pp.src = "Ressources/image/photoProfilLight.jpg";
}

function colorModeSwitch() {
  if (body.classList.contains("dark")) {
    dark();
  } else if (body.classList.contains("light")) {
    light();
  }
}

function colorMode() {
  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    colorModeSwitch();
  } else if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    colorModeSwitch();
  }
}
