const apiKey="362e2a78dfa6a3ddd7e8a839cfcace5f";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);

    if(response.status === 404) 
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").sytle.display="none";
    }
    else {
        
        var data=await response.json();

    console.log(data)


    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+ "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";


    var weatherCondition= data.weather[0].main;

    var imgSource=document.getElementById("weather-icon");

    imgSource.src="images/"+weatherCondition.toLowerCase()+".png";

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
        
    }
    
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value)
})
