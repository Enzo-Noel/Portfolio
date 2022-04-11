var mail = document.getElementById("mail");
var Presentation = document.getElementById("Presentation");
var AboutMe = document.getElementById("AboutMe");
var Projects = document.getElementById("Projects");
var Contact = document.getElementById("Contact");
var Lowatem = document.getElementById("Lowatem");
var Graphes = document.getElementById("Graphes");
var Pong = document.getElementById("Pong");
var NameHeader = document.getElementById("nameH");
var ProjectsHeader = document.getElementById("projectH");
var Contactheader = document.getElementById("contactH");

var allContainers = [];
allContainers.push(
  Presentation,
  AboutMe,
  Projects,
  Contact,
  Lowatem,
  Graphes,
  Pong
);

var allHeaders = [];
allHeaders.push(NameHeader, ProjectsHeader, Contactheader);

var allSubProjects = [];
allSubProjects.push(Lowatem, Graphes, Pong);

window.addEventListener("click", () => {
  allContainers.forEach((element) => {
    if (!element.classList.contains("actif")) {
      element.style.display = "none";
    } else {
      element.style.display = "flex";
    }
  });
});

function defaultText() {
  mail.textContent = "Email";
  mail.classList.remove("changeMail");
  mail.classList.add("defaultMail");
}

function changeText() {
  mail.textContent = "noel.enzo.45@gmail.com";
  mail.classList.remove("defaultMail");
  mail.classList.add("changeMail");
}

function removeActifAll() {
  allContainers.forEach((element) => {
    if (element.classList.contains("actif")) {
      element.classList.remove("actif");
    }
  });
  allHeaders.forEach((element) => {
    if (element.classList.contains("actifH")) {
      element.classList.remove("actifH");
    }
  });
}

function display(element) {
  removeActifAll();
  element.classList.add("actif");
  switch (element) {
    case Presentation:
      NameHeader.classList.add("actifH");
      break;
    case Projects:
      ProjectsHeader.classList.add("actifH");
      break;
    case Contact:
      Contactheader.classList.add("actifH");
      break;
  }
  if (allSubProjects.includes(element)) {
    ProjectsHeader.classList.add("actifH");
  }
  if (element == AboutMe) {
    NameHeader.classList.add("actifH");
  }
}

switch (true) {
  case window.location.href.indexOf("Presentation") > -1:
    display(Presentation);
    break;
  case window.location.href.indexOf("Projects") > -1:
    display(Projects);
    break;
  case window.location.href.indexOf("Contact") > -1:
    display(Contact);
    break;
  case window.location.href.indexOf("Lowatem") > -1:
    display(Lowatem);
    break;
  case window.location.href.indexOf("Graphes") > -1:
    display(Graphes);
    break;
  case window.location.href.indexOf("Pong") > -1:
    display(Pong);
    break;
  case window.location.href.indexOf("AboutMe") > -1:
    display(AboutMe);
    break;
  default:
    display(Presentation);
    break;
}

const lightAndDark = document.querySelector(".lightAndDark");
const imgColorMode = document.getElementById("imgColorMode");
const root = document.documentElement.style;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.replace("light", "dark");
  colorMode();
} else if (window.matchMedia("(prefers-color-scheme; light").matches) {
  body.classList.replace("dark", "light");
  colorMode();
}

function dark() {
  root.setProperty("--textColor", "#f1f1f1");
  root.setProperty("--backgroundColor", "#001219");

  root.setProperty("--colorAnimation1", "#fc618d");
  root.setProperty("--colorAnimation2", "#5ad4e6");
  root.setProperty("--colorAnimation3", "#7bd88f");
  root.setProperty("--colorAnimation4", "#fce566");

  root.setProperty("--colorUnderline", "#005f73");
  imgColorMode.src = "Ressources/moon.png";
}

function light() {
  root.setProperty("--textColor", "#111111");
  root.setProperty("--backgroundColor", "#f2e8cf");

  root.setProperty("--colorAnimation1", "#d90429");
  root.setProperty("--colorAnimation2", "#0a9396");
  root.setProperty("--colorAnimation3", "#a7c957");
  root.setProperty("--colorAnimation4", "#ff5400");

  root.setProperty("--colorUnderline", "#9b2226");
  imgColorMode.src = "Ressources/sun.png";
}

function colorMode() {
  if (body.classList.contains("dark")) {
    dark();
  } else if (body.classList.contains("light")) {
    light();
  }
}

lightAndDark.addEventListener("click", () => {
  const body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.replace("dark", "light");
    colorMode();
  } else if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    colorMode();
  }
});
