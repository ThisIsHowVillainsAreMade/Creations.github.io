// Toggle ma page about au click du toggle about
const toggleAbout = () => {
  // Ferme la page form si elle est ouverte
  if (
    document.getElementById("toggle-submit").classList.contains("toggle-active")
  ) {
    toggleForm();
  }
  // Met mon bouton about en "active"
  document.getElementById("toggle-about").classList.toggle("toggle-active");
  // Active le background blur
  document
    .getElementById("blur-background")
    .classList.toggle("blur-background-active");
  // Affiche ma page about
  document.getElementById("about-page").classList.toggle("about-style-active");
  // Desactive mon scroll de page
  document.querySelector("body").classList.toggle("no-scroll");
};

document.getElementById("toggle-about").addEventListener("click", toggleAbout);

// Toggle ma page form au click du toggle form
const toggleForm = () => {
  // Ferme la page about si elle est ouverte
  if (
    document.getElementById("toggle-about").classList.contains("toggle-active")
  ) {
    toggleAbout();
  }
  // Met mon bouton about en "active"
  document.getElementById("toggle-submit").classList.toggle("toggle-active");
  // Active le background blur
  document
    .getElementById("blur-background")
    .classList.toggle("blur-background-active");
  // Affiche ma page form
  document.getElementById("form-page").classList.toggle("form-style-active");
  // Desactive mon scroll de page
  document.querySelector("body").classList.toggle("no-scroll");
};

document.getElementById("toggle-submit").addEventListener("click", toggleForm);

// Toggle mon bouton audio actif au click du bouton audio
const toggleAudio = () => {
  document.getElementById("toggle-audio").classList.toggle("audio-btn-active");
};
document.getElementById("toggle-audio").addEventListener("click", toggleAudio);
