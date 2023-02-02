// Variables & constantes

const mail = document.getElementById("mail");

const Homepage = document.getElementById("Homepage");
const Projects = document.getElementById("Projects");
const Contact = document.getElementById("Contact");

const Presentation = document.getElementById("Presentation");

const NameHeader = document.getElementById("nameH");
const ProjectsHeader = document.getElementById("projectH");
const Contactheader = document.getElementById("contactH");

const imgProject = document.getElementsByClassName("imgProject");

// Arrays

const containers = [Homepage, Presentation, Projects, Contact];

const headers = [NameHeader, ProjectsHeader, Contactheader];

// const navs = [Homepage, Projects, Contact];

const valueHash = new Map();
valueHash.set(0, "Homepage");
valueHash.set(1, "Projects");
valueHash.set(2, "Contact");
valueHash.set(-1, "Presentation");

// Run directly

loadindexNav();

window.addEventListener("hashchange", loadindexNav);

var wait = false;
var timeOut;
var indexNav;
window.addEventListener("wheel", (event) => {
  if (window.location.hash.substring(1) != "Presentation") {
    if (!wait) {
      if (event.deltaY < 0 && indexNav > 0) {
        indexNav -= 1;
      } else if (event.deltaY > 0 && indexNav < containers.length - 2) {
        indexNav += 1;
      }
      window.location.hash = valueHash.get(indexNav);
      wait = true;
      loadindexNav();
      timeOut = setTimeout(() => {
        wait = false;
      }, 725);
    } else {
      if (event.deltaY != 0 && event.deltaY != 100 && event.deltaY != -100) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
          wait = false;
        }, 500);
      }
    }
  }
});

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

function loadindexNav() {
  let anchor;
  valueHash.forEach((value, key) => {
    if (value == window.location.hash.substring(1)) {
      anchor = eval(window.location.hash.substring(1));
      if (key == -1) {
        indexNav = 0;
      } else {
        indexNav = key;
      }
    }
  });
  if (window.location.hash && !containers.includes(anchor)) {
    window.location.href = "";
  } else if (window.location.hash && containers.includes(anchor)) {
    display(anchor);
  } else {
    window.location.hash = "Homepage";
    indexNav = 0;
  }
}

// Selection for the img:hover affect the "title" link::before

function displaySelection(element) {
  element.classList.add("select");
}

function hideSelection(element) {
  element.classList.remove("select");
}
