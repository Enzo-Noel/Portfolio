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

function displayPresentation() {
  Contact.classList.remove("actif");
  Projects.classList.remove("actif");
  Lowatem.classList.remove("actif");
  Graphes.classList.remove("actif");
  Pong.classList.remove("actif");
  ProjectsHeader.classList.remove("actifH");
  Contactheader.classList.remove("actifH");
  NameHeader.classList.add("actifH");
  Presentation.classList.add("actif");
}

function displayProjects() {
  Contact.classList.remove("actif");
  Presentation.classList.remove("actif");
  Lowatem.classList.remove("actif");
  Graphes.classList.remove("actif");
  Pong.classList.remove("actif");
  Contactheader.classList.remove("actifH");
  NameHeader.classList.remove("actifH");
  ProjectsHeader.classList.add("actifH");
  Projects.classList.add("actif");
}

function displayContact() {
  Projects.classList.remove("actif");
  Presentation.classList.remove("actif");
  Lowatem.classList.remove("actif");
  Graphes.classList.remove("actif");
  Pong.classList.remove("actif");
  ProjectsHeader.classList.remove("actifH");
  NameHeader.classList.remove("actifH");
  Contactheader.classList.add("actifH");
  Contact.classList.add("actif");
}

function displayLowatem() {
  Contact.classList.remove("actif");
  Projects.classList.remove("actif");
  Presentation.classList.remove("actif");
  Graphes.classList.remove("actif");
  Pong.classList.remove("actif");
  Lowatem.classList.add("actif");
}

function displayGraphes() {
  Contact.classList.remove("actif");
  Projects.classList.remove("actif");
  Presentation.classList.remove("actif");
  Lowatem.classList.remove("actif");
  Pong.classList.remove("actif");
  Graphes.classList.add("actif");
}

function displayPong() {
  Contact.classList.remove("actif");
  Projects.classList.remove("actif");
  Presentation.classList.remove("actif");
  Lowatem.classList.remove("actif");
  Graphes.classList.remove("actif");
  Pong.classList.add("actif");
}

if (window.location.href.indexOf("Presentation") > -1) {
  displayPresentation();
}

if (window.location.href.indexOf("Projects") > -1) {
  displayProjects();
}

if (window.location.href.indexOf("Contact") > -1) {
  displayContact();
}

if (window.location.href.indexOf("Lowatem") > -1) {
  displayLowatem();
}

if (window.location.href.indexOf("Graphes") > -1) {
  displayGraphes();
}

if (window.location.href.indexOf("Pong") > -1) {
  displayPong();
}
