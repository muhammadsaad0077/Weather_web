import React, { useEffect, useState } from 'react'
import Display from './Display'

const Body = () => {
    const [live, setLive] = useState([])
    const [latitude, setLatitude] = useState(30.3753); // 
    const [longitude, setLongitude] = useState(69.3451);
    const handleSearch = async()=>{
        const data = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto`)
        const json = await data?.json()
        setLive(json)

    }
    useEffect(()=>{
        handleSearch()
       
    }, [])
  return (
    
    <div className="bg h-screen overflow-x-hidden">    
    <div className="overflow-x-hidden flex">
        <ul>
            <li className="font-bold m-4 text-xl font-mono  text-white">Global Weather</li>
            <input value={latitude} onChange={(e)=> setLatitude(e.target.value)} className="relative bottom-10 left-96 rounded-lg" placeholder="Enter Latitude "></input>
            <input value={longitude} onChange={(e)=> setLongitude(e.target.value)} className="relative bottom-10 left-[400px] rounded-lg" placeholder="Enter Longitude "></input>
            <button onClick={handleSearch} className="relative bottom-10 left-[420px] rounded-lg">Search</button>
        </ul>
    </div>
    <Display live={live} />
    </div>
    
  )
}

export default Body
