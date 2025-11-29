const nameHtml = document.querySelector("#name");
const passwordHtml = document.querySelector("#password");
const formHtml = document.querySelector("#loginForm");
const resultHtml = document.querySelector("#result");

formHtml.addEventListener("submit", (e) => {
    e.preventDefault();
    

    const userName = nameHtml.value.trim();
    const password = passwordHtml.value.trim();

    if (userName !== "" && password !== "") {
        resultHtml.textContent = "Inloggningen lyckades!";
    
    } else {
        setTimeout(function() {
            resultHtml.textContent = "Fyll i båda fälten!"
            resultHtml.style.color = "red";
        }, 500); 
        
    }
})

