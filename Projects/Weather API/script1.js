<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Weather App Title</title>
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <div class = "card">
            <div class = "search">
                <input type = "text" placeholder="enter city name" spellcheck="false">
                <button><img src = "C:\Users\SriniAchuthan\Downloads\weather-app-img\images\search.png"></button>
            </div>
            <div class = "weather">
                <input type = "text" placeholder="weather-icon">
                <h1 class="temp">22°C</h1>
                <h2 class="city">New York</h2>
                <div class = "details">
                    <div class="col">
                        <img src = "C:\Users\SriniAchuthan\Downloads\weather-app-img\images\humidity.png">
                        <div>
                            <p class="humidity">50%</p>
                            <p>Humidity</p>
                        </div>
                    </div>
                    <div class="col">
                        <img src = "C:\Users\SriniAchuthan\Downloads\weather-app-img\images\wind.png">
                        <div>
                            <p class = "wind">15 km/hr</p>
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script>
        const apikey = "fd4bb381c285446ea3e130621250610";
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon"); // Add a class for the weather icon <img>

async function checkWeather(city){
    const apiURL = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`;
    try {
        const response = await fetch(apiURL);
        if(response.status === 400 || response.status === 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
            return;
        }
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.location.name;
        document.querySelector(".temp").innerHTML = Math.round(data.current.temp_c) + "°C";
        document.querySelector(".humidity").innerHTML = data.current.humidity + "%";
        document.querySelector(".wind").innerHTML = data.current.wind_kph + " km/hr";

        // Set weather icon based on condition
        if(data.current.condition.text.includes("Cloud")) {
            weatherIcon.src = "C:\Users\SriniAchuthan\Downloads\weather-app-img\images\clouds.png";
        } else if(data.current.condition.text.includes("Rain")) {
            weatherIcon.src = "C:\Users\SriniAchuthan\Downloads\weather-app-img\images\rain.png";
        } else if(data.current.condition.text.includes("Clear")) {
            weatherIcon.src = "C:\Users\SriniAchuthan\Downloads\weather-app-img\images\clear.png";
        } else if(data.current.condition.text.includes("Drizzle")) {
            weatherIcon.src = "C:\Users\SriniAchuthan\Downloads\weather-app-img\images\drizzle.png";
        } else if(data.current.condition.text.includes("Mist")) {
            weatherIcon.src = "C:\Users\SriniAchuthan\Downloads\weather-app-img\images\mist.png";
        } else if(data.current.condition.text.includes("Snow")) {
            weatherIcon.src = "C:\Users\SriniAchuthan\Downloads\weather-app-img\images\snow.png";
        } else if(data.current.condition.text.includes("Humidity")) {
            weatherIcon.src = "C:\Users\SriniAchuthan\Downloads\weather-app-img\images\humidity.png";
        }

        document.querySelector(".weather").style.display = "block";
        if(document.querySelector(".error")) document.querySelector(".error").style.display = "none";
    } catch (error) {
        if(document.querySelector(".error")) document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
}

searchBtn.addEventListener("click",() =>{
    checkWeather(searchBox.value);
});
        </script>
    </body>
</html>
