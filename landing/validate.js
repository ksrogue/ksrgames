const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const assunto = document.querySelector("#subject");
const textarea = document.querySelector("#textarea");

const subBtn = document.querySelector(".sub-btn");
const subMsg = document.querySelector(".sub-msg");

subBtn.addEventListener("click", (event) => {
    event.preventDefault();
  if (
    nome.validity.valid &&
    email.validity.valid &&
    assunto.validity.valid &&
    textarea.validity.valid
  ) {
    subMsg.style.color = "green"
    subMsg.innerHTML = `<i class="bi bi-check"> enviado </i>`;
  } else {
    subMsg.style.color = "red";
    subMsg.innerHTML = `<i class="bi bi-x"> não enviado</i>`;
  }
});
