const form = document.querySelector("#newsletterForm");
const paraHtml = document.querySelector("#message");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  

  const isValid = nameInput.value.trim() !== "" && emailInput.value.trim() !== "";


  paraHtml.textContent = isValid ? "Tack för din registrering!" : "Vänligen fyll i alla fält.";
});