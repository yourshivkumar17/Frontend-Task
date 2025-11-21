<!DOCTYPE html>
<html>
<head>
    <title>Weather App</title>
    <style>
        input, button {
            padding: 8px;
            margin: 5px;
        }
        #result {
            margin-top: 15px;
            font-size: 18px;
        }
        #error {
            color: red;
            margin-top: 10px;
        }
    </style>
</head>
<body>

<h2>Weather Information App</h2>

<input id="city" placeholder="Enter city">
<button onclick="getWeather()">Get Weather</button>

<div id="result"></div>
<div id="error"></div>

<script>
async function getWeather() {
    let city = document.getElementById("city").value.trim();
    let result = document.getElementById("result");
    let error = document.getElementById("error");
    result.textContent = "";
    error.textContent = "";

    if (city === "") {
        error.textContent = "Please enter a city name.";
        return;
    }

    let key = "YOUR_API_KEY";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    try {
        let res = await fetch(url);
        if (!res.ok) {
            error.textContent = "City not found!";
            return;
        }

        let data = await res.json();

        result.innerHTML =
            "Temperature: " + data.main.temp + "°C<br>" +
            "Humidity: " + data.main.humidity + "%<br>" +
            "Condition: " + data.weather[0].description;
    } catch (e) {
        error.textContent = "Unable to fetch weather data.";
    }
}
</script>

</body>
</html>
