var mail = document.getElementById("mail");
var Presentation = document.getElementById("Presentation");
var Projects = document.getElementById("Projects");
var Contact = document.getElementById("Contact");

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
  Presentation.classList.add("actif");
}

function displayProjects() {
  Contact.classList.remove("actif");
  Presentation.classList.remove("actif");
  Projects.classList.add("actif");
}

function displayContact() {
  Projects.classList.remove("actif");
  Presentation.classList.remove("actif");
  Contact.classList.add("actif");
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
