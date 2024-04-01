import React from "react";
import WeatherCard from "./WeatherCard";


const Display = ({ live }) => {
  return (
    <>
      {/* Current Location */}
      <h1 className="text-4xl font-bold ml-8 md:ml-12 mt-16 md:mt-20">{live?.timezone}</h1>
      
      {/* Current Temperature */}
      <h1 className="md:text-4xl text-2xl font-bold ml-[295px] bottom-[35px] md:ml-96 relative md:bottom-[43px]">
        {live?.current?.temperature_2m} {live?.current_units?.temperature_2m}
      </h1>
      
      {/* Current date and time */}
      <h1 className="md:-mt-3 md:ml-12 -mt-4 ml-8">
        {live?.current?.time.substring(0, 10)} {live?.current?.time.substring(11, 16)}
      </h1>
      
      {/* Displaying weather forecast */}
      <div className="flex justify-center flex-wrap mt-8">
        {live?.daily?.time.map((temp, index) => {
          const sunsetTime = live?.daily?.sunset[index]?.substring(11, 16);
          const sunriseTime = live?.daily?.sunrise[index]?.substring(11, 16);
          const maxTemp = live?.daily?.temperature_2m_max[index];
          const minTemp = live?.daily?.temperature_2m_min[index];
          const date = new Date(temp);
          const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
          const unit = live?.daily_units?.temperature_2m_min;

          return (
            
                
            <WeatherCard
              key={temp}
              dayOfWeek={dayOfWeek}
              maxTemp={maxTemp}
              minTemp={minTemp}
              sunsetTime={sunsetTime}
              sunriseTime={sunriseTime}
              unit={unit}
            />
           )
          
            
          ;
        })}
      </div>
    </>
  );
};

export default Display;
