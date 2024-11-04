if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}

function getCityTemp(cityName, id) {
    const key = "6655ee54cb308f830a12f9f17ca78ec3";
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + key + "&units=metric&lang=cs")
        .then(function(resp) {response.json()})
        .then(function(data) {
            console.log(data);
            if (data.cod === 200){
                document.getElementById(id).textContent = data.name + ": " + data.main.temp + "°C";
            } else {
                console.log(data);
            }
        })
        .catch(function(error) {
            console.log("Error ocured" + error);
        });
}

window.onload = function(){
    getCityTemp("Dobronin", "dobronin");
    getCityTemp("Jihlava", "jihlava");
}

function getUserCityTemp() {
    const input_city = document.getElementById("input_city").value;
    getCityTemp(input_city, "city");
}