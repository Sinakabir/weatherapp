import React, { useState } from 'react'
import './Weatherapp.css'
import searchicon from '../Assets/search.png'
import clearsky from '../Assets/clear.png'
import windicon from '../Assets/wind.png'
import humidity from '../Assets/humidity.png'
import clouds from '../Assets/clouds.png'
import drizzle from '../Assets/drizzle.png'
import mist from '../Assets/mist.png'
import snow from '../Assets/snow.png'
import rain from '../Assets/rain.png'

 const Weatherapp = () => {

  
  const apikey ="7867e5b0f752bfbc463bb28084ac0572";
  const [wicon,setWicon] = useState(clearsky)


const search = async()=>{
const element = document.getElementsByClassName('cityinput')
if(element[0].value===""){
  return 0;
}

let url = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${element[0].value}&appid=${apikey}`

 let response = await fetch(url);
  let data = await response.json();
  const humidity = document.getElementsByClassName('humi')
  const wind = document.getElementsByClassName('win')
  const temper = document.getElementsByClassName('temper')
  const location = document.getElementsByClassName('cityname')

  humidity[0].innerHTML= data.main.humidity + "%";
  wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
  temper[0].innerHTML = Math.floor(data.main.temp) + "°C";
  location[0].innerHTML = data.name;

  if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
    setWicon(clearsky)
  }else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
    setWicon(clouds)
  }else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
    setWicon(clouds)
  }else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
    setWicon(clouds)
  }else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
    setWicon(drizzle)
  }else if(data.weather[0].icon === "10d" || data.weather[0].icon === "10n"){
    setWicon(rain)
  }else if(data.weather[0].icon === "13d" || data.weather[0].icon === "13n"){
    setWicon(snow)
  }else{
    setWicon(clearsky)
  }

  

}





  return (
    <div className='box'>
     <div className="inputs">
      <input type="text" className='cityinput' placeholder='Search City' />
      <button onClick={()=>{search()}}><img src={searchicon}  /></button>
     </div>
     <div className="wicon">
      <img src={wicon} alt="" />
     </div>
     
     <div className="temp">
      <h1 className='temper'>15°C</h1>
     </div>
     <div className="city">
      <h1 className='cityname'>London</h1>
     </div>
     <div className="bottom">
      <div className="humid">
        <img src={humidity} alt="" />
        <div>
          <h2 className='humi'>87%</h2>
          <p>Humidity</p>
        </div>
      </div>
      <div className="wind">
        <img src={windicon} alt="" />
        <div>
          <h2 className='win'>5.14  km/h</h2>
          <p>Wind Speed</p>
        </div>
      </div>
     </div>
    </div>
  )
}



export default Weatherapp