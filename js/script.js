// Variables & constantes

const mail = document.getElementById("mail");

const Homepage = document.getElementById("Homepage");
const Projects = document.getElementById("Projects");
const Contact = document.getElementById("Contact");

const Presentation = document.getElementById("Presentation");

const Web = document.getElementById("Web");
const Lowatem = document.getElementById("Lowatem");
const Pong = document.getElementById("Pong");
const DataBase = document.getElementById("DataBase");
const System = document.getElementById("System");
const Gestion = document.getElementById("Gestion");

const NameHeader = document.getElementById("nameH");
const ProjectsHeader = document.getElementById("projectH");
const Contactheader = document.getElementById("contactH");

const colors = document.getElementById("theme");
const imgColorMode = document.getElementById("imgColorMode");
const pp = document.getElementById("pp");
const root = document.documentElement.style;
const body = document.body;

const lowatem = document.getElementById("lowatem");

const imgProject = document.querySelector(".imgProject");

var where;

var wait = false;

// Arrays

const containers = [Homepage, Presentation, Projects, Contact];

const headers = [NameHeader, ProjectsHeader, Contactheader];

const navs = [Homepage, Projects, Contact];

const valueHash = new Map();
valueHash.set(0, "Homepage");
valueHash.set(1, "Projects");
valueHash.set(2, "Contact");

// Run directly

loadWhere();

colors.addEventListener("click", colorMode);

window.addEventListener("wheel", mouvement);

// Conditions

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  body.classList.replace("light", "dark");
  colorModeSwitch();
} else if (window.matchMedia("(prefers-color-scheme; light").matches) {
  body.classList.replace("dark", "light");
  colorModeSwitch();
}
// Functions

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

function hideAndSeek() {
  containers.forEach((element) => {
    if (element.classList.contains("actif")) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
}

function removeActifAll() {
  containers.forEach((element) => {
    if (element.classList.contains("actif")) {
      element.classList.remove("actif");
    }
  });
  headers.forEach((element) => {
    if (element.classList.contains("actifH")) {
      element.classList.remove("actifH");
    }
  });
}

function display(element) {
  removeActifAll();
  element.classList.add("actif");
  where = navs.indexOf(element);
  hideAndSeek();
  // Header
  switch (element) {
    case Homepage:
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
}

function loadWhere() {
  let anchor;
  valueHash.forEach((value, key) => {
    if (value == window.location.hash.substring(1)) {
      anchor = eval(window.location.hash.substring(1));
    }
  });
  if (window.location.hash && !navs.includes(anchor)) {
    window.location.href = "";
  } else if (window.location.hash && navs.includes(anchor)) {
    display(anchor);
  } else {
    window.location.hash = "Homepage";
  }
}

function mouvement(event) {
  let timeOut;

  if (window.location.hash.substring(1) != "Presentation") {
    if (!wait) {
      if (event.deltaY < 0 && where > 0) {
        where -= 1;
      } else if (event.deltaY > 0 && where < navs.length - 1) {
        where += 1;
      }
      window.location.hash = valueHash.get(where);
      loadWhere();
      wait = true;
      timeOut = setTimeout(() => {
        wait = false;
      }, 1000);
    } else {
      if (event.deltaY != 0) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
          wait = false;
        }, 500);
      }
    }
  }
}

// ColorMode

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

// Selection for the img:hover affect the "title" link::before

function displaySelection(element) {
  element.classList.add("select");
}

function hideSelection(element) {
  element.classList.remove("select");
}
