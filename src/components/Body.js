import React, { useEffect, useState } from 'react'
import Display from './Display'

const Body = () => {
    const [live, setLive] = useState([])  // For storing json
    const [location, setLocation] = useState("Pakistan");

    const handleSearch = async () => {   
        
            const url = `https://nominatim.openstreetmap.org/search?format=json&q=${location}`;  // passing entered location name 
            const response = await fetch(url);
            const data = await response.json();

            if (data && data.length > 0) {
                const { lat, lon } = data[0];       // setting the value of langitude and latitude of particular location
                const weatherData = await fetchWeatherData(lat, lon);       // Passing latitiude and longitude to fetch weather data and calling the function on onclick
                setLive(weatherData);  // setting the weather data to the live state variable
            }
    };

    const fetchWeatherData = async (lat, lon) => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,is_day,rain&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`;
            const response = await fetch(url);
            const data = await response.json();
            return data;
    };
    useEffect(()=>{
        handleSearch()
       
    }, [])
  return (
    
    <div className="bg h-screen overflow-x-hidden">    
    <div className="flex">
        <ul>
            <li className="font-bold ml-[25vw] m-2 md:mt-10 mt-[27px] md:ml-6 md:m-4 text-xl font-mono  text-white">Global Weather</li>
            <input 
    value={location} 
    onChange={(e)=> setLocation(e.target.value)} 
    className="relative bottom-0 md:mt-0 mt-12 md:bottom-10 left-8 md:left-[520px] w-1/2 rounded-lg md:w-4/6 px-4 py-2 bg-gray-100 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" 
    placeholder="Enter Location "
/>
<button 
    onClick={handleSearch} 
    className="relative left-16 bottom-0 md:bottom-10 md:left-[540px] md:mt-0 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
>
    Search
</button>        </ul>
    </div> 
    <Display live={live} />  
    </div>
    
  )
}

export default Body
