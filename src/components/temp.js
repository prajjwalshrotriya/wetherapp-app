import React, { useEffect, useState } from 'react'
import "./style.css"
import WetherCard from "./wetherCard";

const Temp = () => {
    const [searchValue,setSearchValue]=useState("bhilwara");
    const [tempInfo,setTempInfo]=useState({});

    const getWetherInfo = async()=>{
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=38669b41fb8b54b488e08a24bd434743`;
            let res = await fetch(url);
            let data = await res.json();
            const {temp,humidity,pressure}=data.main;
            const {main:weathermood}=data.weather[0];
            const {name}=data;
            const {speed}=data.wind;
            const {country,sunset}=data.sys;

            const myNewWetherInfo={
              temp,
              humidity,
              pressure,
              weathermood,
              name,
              speed,
              country,
              sunset,
            }
            setTempInfo(myNewWetherInfo);
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getWetherInfo();
    },[]);
  return (
    <>
     <div className='wrap'>
        <div className='search'>
            <input type="search"  id="search" placeholder='search...' autoFocus className='searchTerm' value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
            <button className='searchButton' type="button" onClick={getWetherInfo}>Search</button>
        </div>
        </div> 
        <WetherCard tempInfo={tempInfo}/>
    </>
  )
}

export default Temp
