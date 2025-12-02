async function fetchTemp() {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true");

        const data = await response.json();

        const temp = data.current_weather.temperature;
        document.body.innerHTML += `Detta är tempen: ${temp}, så att det, haom!`;

    } catch(error) {
        console.log(error)
        document.body.innerHTML = `Något gick knas: ${error}`;
    }
}

fetchTemp()