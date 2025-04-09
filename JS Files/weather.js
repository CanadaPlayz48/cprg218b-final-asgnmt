fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=66321ba752eb88b22f3de6db767a89a5&units=metric")

.then(response => response.json())
.then (data => {
    console.log(data)
    console.log(data.main.temp)
    console.log(data.weather[0].description)
    document.getElementById("temp").innerHTML = "Temperature: "+ data.main.temp +"&#xb0;C"
    document.getElementById("desc").innerHTML = "Currently: "+data.weather[0].description+")"
    document.getElementById("wind").innerHTML = "Wind: "+(data.wind.speed*3.6)+ " km/h"
    document.getElementById("tempMin").innerHTML = "Today's Low: "+data.main.temp_min+"&#xb0;C"
    document.getElementById("tempMax").innerHTML = "Today's High: "+data.main.temp_max+"&#xb0;C"
    document.getElementById("tempFL").innerHTML = "Feels Like: "+data.main.feels_like+"&#xb0;C"
    document.getElementById("icon").src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png"
    document.getElementById("updated").innerHTML = "Last Updated: "+new Date(data.dt*1000).toLocaleTimeString()
    document.getElementById("updated").style.fontSize = "10px"

    

})