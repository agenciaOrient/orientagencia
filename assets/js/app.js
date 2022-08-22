// Example starter JavaScript for disabling form submissions if there are invalid fields

(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// Animar todos os itens na tela que tiverem meu atributo data-anime

const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
  const windowTop = window.pageYOffset + window.innerHeight * 0.85;

  item.forEach((element) => {
    if (windowTop > element.offsetTop) {
      element.classList.add("animate");
    } else {
      element.classList.remove("animate");
    }
  });
};

animeScroll();

window.addEventListener("scroll", () => {
  animeScroll();
});
const btnEnviar = document.querySelector("#btn-enviar");

btnEnviar.addEventListener("click", () => {
  btnEnviarLoader.style.display = "block";
  btnEnviar.style.display = "none";
});
const from_contato = document.getElementById("form_contact");
const msgAlertErro = document.getElementById("msgAlertErroLogin");
const msgAlert = document.getElementById("msgAlert");
const btnEnviarLoader = document.querySelector("#btn-enviar-loader");
from_contato.addEventListener("submit", async (e) => {
  e.preventDefault();
  const dadosForm = new FormData(from_contato);
  const dados = await fetch(`../../../enviar_email.php`, {
    method: "POST",
    body: dadosForm,
  });
  const resposta = await dados.json();
  console.log(resposta);
  if (resposta["erro"]) {
    //lert("enviado");
    msgAlert.innerHTML = resposta["msg"];
    // from_contato.reset()
    setTimeout(() => {
      document.querySelector("#msgAlert").style.display = "none";
    }, 5000);
    btnEnviarLoader.style.display = "none";
    from_contato.reset()
  } else {
    alert("não enviou");
    msgAlertErro.innerHTML = resposta["msg"];
    // from_contato.reset()
    setTimeout(() => {
      document.querySelector("#msgAlertErro").style.display = "none";
    }, 5000);
    btnEnviarLoader.style.display = "none";
    from_contato.reset()

  }
 
});
