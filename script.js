const formHtml = document.querySelector("form");
const paraHtml = document.querySelector("#message");

formHtml.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameValue = document.querySelector("#name").value.trim();
    const emailValue = document.querySelector("#email").value.trim();

    if (nameValue !== "" && emailValue !== "") {
        paraHtml.textContent = "Tack för din registrering!";
        paraHtml.style.color = "green";
    } else {
        paraHtml.textContent = "Båda fälten måste fyllas i!";
        paraHtml.style.color = "red";
    }

})