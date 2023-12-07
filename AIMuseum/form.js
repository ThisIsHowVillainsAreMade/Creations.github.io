document
  .getElementById("formContainer")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let name = document.getElementById("yourName").value;
    let email = document.getElementById("yourEmail").value;
    const message = `Bonjour ${name}. Merci d'avoir soumis votre idée de prompt. Nous l'étudierons dans les plus brefs délais. Si votre idée est choisie pour générer une oeuvre qui intégrera notre musée, nous vous préviendrons à "${email}".`;
    alert(message);
  });
