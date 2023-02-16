let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}
function currentTime() {
  let date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let datet = date.getDate();
  let dayNo = date.getDay();
  var weekdays = new Array(7);
  weekdays[0] = "Sun";
  weekdays[1] = "Mon";
  weekdays[2] = "Tue";
  weekdays[3] = "Wed";
  weekdays[4] = "Thur";
  weekdays[5] = "Fri";
  weekdays[6] = "Sat";

  let dayName = weekdays[dayNo];
  var mon = date.toLocaleString('default', { month: 'short' });
  let year = date.getFullYear();
  let session = "AM";

  if (hh === 0) {
    hh = 12;
  }
  if (hh > 12) {
    hh = hh - 12;
    session = "PM";
  }

  hh = (hh < 10) ? "0" + hh : hh;
  mm = (mm < 10) ? "0" + mm : mm;
  ss = (ss < 10) ? "0" + ss : ss;

  let time = hh + ":" + mm + ":" + ss + " " + session;
  // let todayName=dayName;
  let todayDate = dayName + " " + datet + "-" + mon + "-" + year;
  // console.log(todayName,todayDate);
  document.getElementById("clock").innerText = time;
  // document.querySelector(".dayname").innerHTML = todayName; 
  document.querySelector(".date1").innerHTML = todayDate;
  let t = setTimeout(function () { currentTime() }, 1000);
}



currentTime();
const searchBar = document.getElementById('search');
const suggestionsContainer = document.getElementById('suggestionsContainer');

const localData = ['Delhi', 'Bangalore', 'Kolkata', 'Punjab', 'Chennai', 'Mumbai', 'Pune', 'Noida', 'Lucknow', 'Gujarat', 'Rajasthan',  'Hyderabad'];

searchBar.addEventListener('input', function () {
  const input = searchBar.value;
  const matchingSuggestions = localData.filter(suggestion => suggestion.toLowerCase().startsWith(input.toLowerCase()));

  if (input.length > 0 && matchingSuggestions.length > 0) {
    suggestionsContainer.innerHTML = '';
    matchingSuggestions.forEach(suggestion => {
      const suggestionElement = document.createElement('div');
      suggestionElement.classList.add('suggestion');
      suggestionElement.innerText = suggestion;
      suggestionElement.addEventListener('click', function () {
        searchBar.value = suggestion;
        suggestionsContainer.style.display = 'none';
        // handle submitting the search query
      });
      suggestionsContainer.appendChild(suggestionElement);
    });
    suggestionsContainer.style.display = 'block';
  } else {
    suggestionsContainer.style.display = 'none';
  }
});

document.addEventListener('click', function (event) {
  if (!event.target.matches('#searchBar, #suggestionsContainer, .suggestion')) {
    suggestionsContainer.style.display = 'none';
  }
});



const inputSubmit = document.querySelector(".inputSubmit");
const cityInput = document.querySelector("#search");

const tempDisplay = document.querySelector(".tempValue");
const humidityDisplay = document.querySelector(".humidityval");
const windDisplay = document.querySelector(".windval");
const descriptionDisplay = document.querySelector(".wdeatil");
const locValue = document.querySelector('.locValue');
const feelslike=document.querySelector('.feelslike');
const uvval=document.querySelector('.uvValue');
const Visibilityval=document.querySelector('.Visibilityval');
const pressure=document.querySelector('.PressureVal');
const icon=document.querySelector('.icon');

const monlogo=document.querySelector('.monlogo');
const montext=document.querySelector('.montext');
const montemp=document.querySelector('.montemp');

const tuelogo=document.querySelector('.tuelogo');
const tuetext=document.querySelector('.tuetext');
const tuetemp=document.querySelector('.tuetemp');

const wedlogo=document.querySelector('.wedlogo');
const wedtext=document.querySelector('.wedtext');
const wedtemp=document.querySelector('.wedtemp');

const thurslogo=document.querySelector('.thurslogo');
const thurstext=document.querySelector('.thurstext');
const thurstemp=document.querySelector('.thurstemp');

const frilogo=document.querySelector('.frilogo');
const fritext=document.querySelector('.fritext');
const fritemp=document.querySelector('.fritemp');

const satlogo=document.querySelector('.satlogo');
const sattext=document.querySelector('.sattext');
const sattemp=document.querySelector('.sattemp');




const weatherData = {
  "Delhi": {
    temperature: "5°C",
    humidity: "45%",
    wind: "15 m/s",
    description:"cloudy",
    visibility: "10 km",
    uv: "3",
    pressure: "1015 hPa",
    feelsLike: "1°C",
    icon: "icons/cloudy.svg"
  },
  "Bangalore": {
    temperature: "25°C",
    humidity: "70%",
    wind: "5 m/s",
    visibility: "8 km",
    uv: "7",
    pressure: "1012 hPa",
    feelsLike: "27°C",
    description:"sunny",
    icon: "icons/day.svg"
  },
  "Kolkata": {
    temperature: "10°C",
    humidity: "65%",
    wind: "10 m/s",
    visibility: "5 km",
    uv: "2",
    pressure: "1018 hPa",
    feelsLike: "7°C",
    description:"cloudy",
    icon: "icons/cloudy-sun.svg"
  },
  "Punjab": {
    temperature: "15°C",
    humidity: "75%",
    wind: "8 m/s",
    visibility: "6 km",
    uv: "1",
    pressure: "1017 hPa",
    feelsLike: "13°C",
    description:"rainy",

    icon: "icons/rainy-7.svg"
  },
  "Chennai": {
    temperature: "18°C",
    humidity: "50%",
    wind: "12 m/s",
    visibility: "4 km",
    uv: "4",
    pressure: "1011 hPa",
    feelsLike: "17°C",
    description:"snowy",

    icon: "icons/snowy-6.svg"
  },
  "Mumbai": {
    temperature: "30°C",
    humidity: "60%",
    wind: "20 m/s",
    visibility: "7 km",
    uv: "10",
    pressure: "1013 hPa",
    feelsLike: "35°C",
    description:"Overcast",

    icon: "icons/night.svg"
  },
  "Pune": {
    temperature: "28°C",
    humidity: "80%",
    wind: "10 m/s",
    visibility: "9 km",
    uv: "8",
    pressure: "1015 hPa",
    feelsLike: "30°C",
    description:"thunder",

    icon: "icons/thunder.svg"
  },
  "Noida": {
    temperature: "20°C",
    humidity: "55%",
    wind: "15 m/s",
    visibility: "12 km",
    uv: "5",
    pressure: "1018 hPa",
    feelsLike: "18°C",
    description:"Clear",

    icon: "icons/day.svg"
  },
  "Lucknow": {
    temperature: "12°C",
    humidity: "70%",
    wind: "5 m/s",
    visibility: "3 km",
    uv: "1",
    pressure: "1016 hPa",
    feelsLike: "10°C",
    description:"rainy",

    icon: "icons/rainy-sun.svg"
  },
  "Gujarat": {
    temperature: "35°C",
    humidity: "45%",
    wind: "8 m/s",
    visibility: "20 km",
    uv: "10",
    pressure: "1012 hPa",
    feelsLike: "40°C",
    description:"Snow",

    icon: "icons/snowy-6.svg"
  },
  "Rajasthan": {
    temperature: "30°C",
    humidity: "75%",
    wind: "12 m/s",
    visibility: "11 km",
    uv: "1.2",
    pressure: "1016 hPa",
    feelsLike: "11°C",
    description:"Rainy",

    icon: "icons/rainy.svg"

  },
  "Hyderabad": {
    temperature: "35°C",
    humidity: "45%",
    wind: "8 m/s",
    visibility: "20 km",
    uv: "10",
    pressure: "1012 hPa",
    feelsLike: "40°C",
    description:"Sunny",
    icon: "icons/day.svg"
  }
};


  inputSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(cityInput.value);
    const str = cityInput.value;
    const city = str.charAt(0).toUpperCase() + str.slice(1);
    if (!weatherData[city]) {
      alert("City not found. Please try again.");
      return;
    }
    try {

      locValue.innerHTML = city;
      tempDisplay.innerText = `${weatherData[city].temperature}`;
      humidityDisplay.innerText = ` ${weatherData[city].humidity}`;
      windDisplay.innerText = `${weatherData[city].wind}`;
      descriptionDisplay.innerText = `${weatherData[city].description}`;
      feelslike.innerText=`${weatherData[city].feelsLike}`;
      Visibilityval.innerText=`${weatherData[city].visibility}`;
      uvval.innerText=`${weatherData[city].uv}`;
      pressure.innerText=`${weatherData[city].pressure}`;
      icon.src=`${weatherData[city].icon}`;
      let i=0;
      let cityName="";
      const size=localData.length;
         
      i=Math.floor(Math.random() * size);
      cityName=localData[i];
      monlogo.src=`${weatherData[cityName].icon}`;
      montext.innerText=weatherData[cityName].description;
      montemp.innerText=weatherData[cityName].temperature;
         
      i=Math.floor(Math.random() * size);
      cityName=localData[i];
      tuelogo.src=`${weatherData[cityName].icon}`;
      tuetext.innerText=weatherData[cityName].description;
      tuetemp.innerText=`${weatherData[cityName].temperature}`;
         
      i=Math.floor(Math.random() * size);
      cityName=localData[i];
      wedlogo.src=`${weatherData[cityName].icon}`;
      wedtext.innerText=weatherData[cityName].description;
      wedtemp.innerText=weatherData[cityName].temperature;
         
      i=Math.floor(Math.random() * size);
      cityName=localData[i];
      thurslogo.src=`${weatherData[cityName].icon}`;
      thurstext.innerText=weatherData[cityName].description;
      thurstemp.innerText=weatherData[cityName].temperature;
         
      i=Math.floor(Math.random() * size);
      cityName=localData[i];
      frilogo.src=`${weatherData[cityName].icon}`;
      fritext.innerText=weatherData[cityName].description;
      fritemp.innerText=weatherData[cityName].temperature;
         
      i=Math.floor(Math.random() * size);
      cityName=localData[i];
      satlogo.src=`${weatherData[cityName].icon}`;
      sattext.innerText=weatherData[cityName].description;
      sattemp.innerText=weatherData[cityName].temperature;


   
    }
    catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }

  })


  ////////////////////////////////////////////////////////

//   const tempDisplay1 = document.querySelector(".tempValue");
// const humidityDisplay1 = document.querySelector(".humidityval");
// const wind1 = document.querySelector(".windval");
// const descriptionDisplay1 = document.querySelector(".wdeatil");
// const locValue1 = document.querySelector('.locValue');
// const feelslike1=document.querySelector('.feelslike');
// const uvval1=document.querySelector('.uvValue');
// const Visibilityval1=document.querySelector('.Visibilityval');
// const pressure1=document.querySelector('.PressureVal');
// const icon1=document.querySelector('.icon');




// const API_KEY = `4ef1229f45d44d7d9ad897c6fdfa8368`
// const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
// const IMG_URL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`


// const form = document.querySelector("form")
// const search = document.querySelector("#search")
// const weatherType = document.querySelector("#weatherType")
// const temperature = document.querySelector("#temperature")
// const place = document.querySelector("#location")
// const wind = document.querySelector("#wind")
// const weatherImg = document.querySelector("#weatherImg")
//  var city1 = "";
// const getWeather = async (city)=>{
//     locValue.innerHTML = "Loading..."
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4ef1229f45d44d7d9ad897c6fdfa8368`;
//     const response = await fetch(url);
//     console.log(response)
//     const data = await response.json()
//     return showWeather(data)
// }

// const showWeather = (data) =>{
//     if(data.code === 404){
//         alert("City Not Found");
//         return;
//     }
//     tempDisplay1.innerHTML = data.main.temp;
//     descriptionDisplay1.innerHTML = data.weather[0].main;
//     wind1 = data.weather[0].main
//     // icon1.src="https://openweathermap.org/img/wn/"+ data.weather[0].icon +".png";
//     // icon1.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`; 
//     locValue.innerHTML = city1;


// }

// document.querySelector('.inputSubmit').addEventListener("click",function(event){
//     getWeather(cityInput.value)
//     event.preventDefault()

// })
