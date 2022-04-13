// Variables and constantes

const mail = document.getElementById("mail");

const Presentation = document.getElementById("Presentation");
const Projects = document.getElementById("Projects");
const Contact = document.getElementById("Contact");

const AboutMe = document.getElementById("AboutMe");

const Web = document.getElementById("Web");
const Lowatem = document.getElementById("Lowatem");
const Pong = document.getElementById("Pong");
const DataBase = document.getElementById("DataBase");
const System = document.getElementById("System");
const Jpo = document.getElementById("Jpo");

const NameHeader = document.getElementById("nameH");
const ProjectsHeader = document.getElementById("projectH");
const Contactheader = document.getElementById("contactH");

const colors = document.querySelector(".colorMode");
const imgColorMode = document.getElementById("imgColorMode");
const pp = document.getElementById("pp");
const root = document.documentElement.style;

const lowatem = document.getElementById("lowatem");

const imgProject = document.querySelector(".imgProject");

var where = 0;
var whereSubProject = 0;

var wait = false;

// Arrays

const Containers = [];
Containers.push(
  Presentation,
  AboutMe,
  Projects,
  Web,
  Lowatem,
  Pong,
  DataBase,
  System,
  Jpo,
  Contact
);

const Headers = [];
Headers.push(NameHeader, ProjectsHeader, Contactheader);

const navs = [];
navs.push(Presentation, Projects, Contact);

const SubProjects = [];
SubProjects.push(Web, Lowatem, Pong, DataBase, System, Jpo);

const whereHref = new Map();
whereHref.set("0", "anchorPresentation");
whereHref.set("1", "anchorProjects");
whereHref.set("2", "anchorContact");

const whereHrefSubProjects = new Map();
whereHrefSubProjects.set("0", "anchorWeb");
whereHrefSubProjects.set("1", "anchorLowatem");
whereHrefSubProjects.set("2", "anchorPong");
whereHrefSubProjects.set("3", "anchorDataBase");
whereHrefSubProjects.set("4", "anchorSystem");
whereHrefSubProjects.set("5", "anchorJpo");

// Run directly

loadWhere();

colors.addEventListener("click", colorMode);

window.addEventListener("hashchange", loadWhere);

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
  Containers.forEach((element) => {
    if (element.classList.contains("actif")) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
}

function removeActifAll() {
  Containers.forEach((element) => {
    if (element.classList.contains("actif")) {
      element.classList.remove("actif");
    }
  });
  Headers.forEach((element) => {
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
  if (SubProjects.includes(element)) {
    ProjectsHeader.classList.add("actifH");
  }
  if (element == AboutMe) {
    NameHeader.classList.add("actifH");
  }
  hideAndSeek();
}

function loadWhere() {
  switch (true) {
    case window.location.href.includes("anchorPresentation"):
      display(Presentation);
      where = 0;
      break;
    case window.location.href.includes("anchorProjects"):
      display(Projects);
      where = 1;
      break;
    case window.location.href.includes("anchorContact"):
      display(Contact);
      where = 2;
      break;
    case window.location.href.includes("anchorAboutMe"):
      display(AboutMe);
      break;
    case window.location.href.includes("anchorWeb"):
      display(Web);
      whereSubProject = 0;
      break;
    case window.location.href.includes("anchorLowatem"):
      display(Lowatem);
      whereSubProject = 1;
      break;
    case window.location.href.includes("anchorPong"):
      display(Pong);
      whereSubProject = 2;
      break;
    case window.location.href.includes("anchorDataBase"):
      display(DataBase);
      whereSubProject = 3;
      break;
    case window.location.href.includes("anchorSystem"):
      display(System);
      whereSubProject = 4;
      break;
    case window.location.href.includes("anchorJpo"):
      display(Jpo);
      whereSubProject = 5;
      break;
    default:
      display(Presentation);
      where = 0;
      break;
  }
}

var timeOut;

function mouvement(event) {
  if (!wait) {
    if (event.deltaY < 0) {
      if (where > 0) {
        where -= 1;
      }
      if (whereSubProject > 0) {
        whereSubProject -= 1;
      }
    } else if (event.deltaY > 0) {
      if (where < navs.length - 1) {
        where += 1;
      }
      if (whereSubProject < SubProjects.length - 1) {
        whereSubProject += 1;
      }
    }
    if (window.location.href.includes("#")) {
      whereHref.forEach((element) => {
        if (window.location.href.includes(element)) {
          window.location.href = "#" + whereHref.get(where.toString());
        }
      });
      whereHrefSubProjects.forEach((element) => {
        if (window.location.href.includes(element)) {
          window.location.href =
            "#" + whereHrefSubProjects.get(whereSubProject.toString());
        }
      });
    } else {
      window.location.href = "#" + whereHref.get(where.toString());
    }
    loadWhere();
    wait = true;
    timeOut = setTimeout(waitFalse, 1000);
  } else {
    if (event.deltaY != 0) {
      clearTimeout(timeOut);
      timeOut = setTimeout(waitFalse, 500);
    }
  }
}

function scroll() {
  window.addEventListener("scroll", () => {
    console.log(window.scrollY);
  });
}

function waitFalse() {
  wait = false;
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
  imgColorMode.src = "Ressources/moon.png";
  pp.src = "Ressources/photoProfilDark.jpg";
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
  pp.src = "Ressources/photoProfilLight.jpg";
}

function colorModeSwitch() {
  if (body.classList.contains("dark")) {
    dark();
  } else if (body.classList.contains("light")) {
    light();
  }
}

function colorMode() {
  const body = document.body;

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
