
const weatherContainer = document.getElementById("weather");
const city = document.getElementById("city");
const error = document.getElementById("error");

// Fetch and display weather data from CSV
async function fetchWeatherFromCSV() {
  try {
    weatherContainer.innerHTML = "";
    city.innerHTML = "";
    error.innerHTML = "";

    const response = await fetch("C:\Users\SriniAchuthan\OneDrive\Desktop\HTML , CSS & Javascript\Weather API\weather_conditions.csv");

    if (!response.ok) {
      throw new Error("Could not fetch CSV file");
    }

    const csvText = await response.text();
    const rows = csvText.trim().split("\n").map(row => row.split(","));

    const headers = rows[0];
    const dataRows = rows.slice(1);

    if (dataRows.length === 0) {
      error.textContent = "No data found in the CSV file.";
      return;
    }

    dataRows.forEach(row => {
      const weatherData = createWeatherDescription(row, headers);
      weatherContainer.appendChild(weatherData);
    });

    city.textContent = `Weather Report (${dataRows.length} records found)`;

  } catch (err) {
    console.error(err);
    error.textContent = "Error reading the CSV file.";
  }
}

function createWeatherDescription(row, headers) {
  const description = document.createElement("div");
  description.classList.add("weather-description");

  const data = Object.fromEntries(headers.map((h, i) => [h.trim(), row[i]?.trim()]));

  description.innerHTML = `
    <div class="weather-item">
      🌆 <b>${data.city}</b><br>
      🌡️ Temperature: ${data.temperature}°C<br>
      🌤️ Condition: ${data.condition}<br>
      ⏰ Time: ${data.time}
    </div>
    <hr>
  `;

  return description;
}
