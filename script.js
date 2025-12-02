async function fetchWeather() {
    try {
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=56.05&longitude=12.70&current_weather=true");

    const data = await response.json();

    const temp = data.current_weather.temperature;
    document.body.innerHTML += `Temperaturen är: ${temp}`;
    } catch(error) {
        console.error(`Något gick knas: ${error}`);
        document.body.innerHTML += `Något är fel. ${error}`;
    }
}

fetchWeather()