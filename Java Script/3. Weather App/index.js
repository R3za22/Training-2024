

const weatherform = document.querySelector(".weatherForm");
const cityinput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "ce7bdd0efc02554105a8cb67e0628047";

weatherform.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityinput.value;

    if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);
        }catch(error){
            console.error(error);
            displayError(error);
        }
    }else{
        displayError("please enter a city");
    }

});

async function getWeatherData(city){

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const responce = await fetch(apiUrl);

    if(!responce.ok){
        throw new Error("Could not fetch weather data")
    }
    return await responce.json();
}

function displayWeatherInfo(data){
    const {name: city , 
           main: {temp, humidity} , 
           weather: [{description , id}] } = data ;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    const weatherEmoji = document.createElement("h1");

    cityDisplay.textContent = city ;
    tempDisplay.textContent = `${(temp - 273.15).toFixed(0)}°C`;
    humidityDisplay.textContent = `Humidity: ${humidity} %`;
    descDisplay.textContent = description;
    weatherEmoji.textContent = getWeatherEmoji(id);

    cityDisplay.classList.add("cityDisplay")
    tempDisplay.classList.add("tempDisplay")
    humidityDisplay.classList.add("humidityDisplay")
    descDisplay.classList.add("descDisplay")
    weatherEmoji.classList.add("weatherEmoji")

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatehrId){
    switch(true){
        case (weatehrId >= 200 && weatehrId < 300):
            return "⛈";
        case (weatehrId >= 300 && weatehrId < 400):
            return "🌧";
        case (weatehrId >= 500 && weatehrId < 600):
            return "🌧";
        case (weatehrId >= 600 && weatehrId < 700):
            return "❄";
        case (weatehrId >= 700 && weatehrId < 800):
            return "🌫";
        case (weatehrId === 800 ):
            return "☀";
        case (weatehrId >= 801 && weatehrId < 810):
            return "☁";
        default :
            return "⁉"
    }
}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message ;
    errorDisplay.classList.add("errorDisplay")
    
    card.textContent + "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);
}