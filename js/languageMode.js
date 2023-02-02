const langue = document.getElementById("langue");
const imgLangueMode = document.getElementById("imgLangueMode");

langue.addEventListener("click", langueMode);

if (body.classList.contains("en")) {
  imgLangueMode.src = "Ressources/icon/royaume-uni.png";
} else if (body.classList.contains("fr")) {
  imgLangueMode.src = "Ressources/icon/france.png";
}

function langueMode() {
  if (body.classList.contains("fr")) {
    body.classList.replace("fr", "en");
    lang = "en";
    imgLangueMode.src = "Ressources/icon/royaume-uni.png";
  } else if (body.classList.contains("en")) {
    body.classList.replace("en", "fr");
    lang = "fr";
    imgLangueMode.src = "Ressources/icon/france.png";
  }
}
