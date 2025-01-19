const ApiKey = "51ad86a0b2b7a892ab5d905d7df7b3e1";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkweather(city) {
    const response = await fetch(ApiUrl + city +  `&appid=${ApiKey}`);
    const data = await response.json();
    console.log(data); // Optional: to see the data output


    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp+" °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"Km/hr";
}


checkweather();


searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
})

