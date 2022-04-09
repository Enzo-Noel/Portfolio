var mail = document.getElementById("mail");
var Presentation = document.getElementById("Presentation");
var Projects = document.getElementById("Projects");
var Contact = document.getElementById("Contact");
var Lowatem = document.getElementById("Lowatem");
var Graphes = document.getElementById("Graphes");
var Pong = document.getElementById("Pong");
var NameHeader = document.getElementById("nameH");
var ProjectsHeader = document.getElementById("projectH");
var Contactheader = document.getElementById("contactH");

var allVar = [];
allVar.push(
  mail,
  Presentation,
  Projects,
  Contact,
  Lowatem,
  Graphes,
  Pong,
  NameHeader,
  ProjectsHeader,
  Contactheader
);

var allSubProjects = [];
allSubProjects.push(Lowatem, Graphes, Pong);

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
  allVar.forEach((element) => {
    if (element.classList.contains("actif")) {
      element.classList.remove("actif");
    }
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
  default:
    display(Presentation);
    break;
}
