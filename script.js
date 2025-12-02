async function getWeather() {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true");

        const data = await response.json();

        const temp = data.current_weather.temperature;
        document.body.innerHTML += `<p>Temp: ${temp}</p>`

        console.log(data);
    } catch(error) {
        document.body.innerHTML += `<p>Något gick fel: ${error.message}</p>`
        console.error(error);
    }

}

window.addEventListener("load", getWeather);