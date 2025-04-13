fetch("https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=66321ba752eb88b22f3de6db767a89a5&units=metric")

.then(response => response.json())
.then (data => {
    console.log(data)
    console.log(data.main.temp)
    console.log(data.weather[0].description)
    document.getElementById("temp").innerHTML = "Temperature: "+ data.main.temp +"&#xb0;C"
    document.getElementById("desc").innerHTML = "Currently: "+data.weather[0].description
    document.getElementById("wind").innerHTML = "Wind: "+(data.wind.speed)+ " m/s"
    document.getElementById("icon").src = "http://openweathermap.org/img/w/"+data.weather[0].icon+".png"
    document.getElementById("updated").innerHTML = "Last Updated: "+new Date(data.dt*1000).toLocaleTimeString()
    document.getElementById("updated").style.fontSize = "10px"

    

})