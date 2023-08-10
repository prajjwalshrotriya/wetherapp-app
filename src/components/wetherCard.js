import React, { useState } from 'react'
import { useEffect } from 'react';

const WetherCard = ({tempInfo}) => {

    const [wetherState,setWetherState]=useState("");
  const   {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      } = tempInfo
      
      useEffect(()=>{
         if(weathermood){
            switch (weathermood) {
                case "Clouds":
                    setWetherState("wi-day-cloudy")
                    break;
                case "Haze":
                    setWetherState("wi-fog")
                    break;
                case "Clear":
                    setWetherState("wi-day-sunny")
                    break;
                case "Mist":
                    setWetherState("wi-dust")
                    break;
                case "Rain":
                    setWetherState("wi-day-rain")
                    break;
            
                default:
                    setWetherState("wi-day-fog")
                    break;
            }
         }
      },[weathermood])

      let sec=sunset;
      let date = new Date(sec*1000);
      let timeStr=`${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${wetherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">{weathermood}</div>
            <div className="place">{name},{country}
            </div>
          </div>
        </div>

        <div className="date"> {new Date().toLocaleString()} </div>

        {/* our 4column section  */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
              {timeStr} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
              {humidity}<br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
              {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
              {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WetherCard