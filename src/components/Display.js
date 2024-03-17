import React from "react";

const Display = ({ live }) => {    // Recieving live as props

  return (
<>
<h1 className="text-4xl font-bold h-6 ml-8 md:ml-12 mt-16 md:mt-20">{live?.timezone}</h1>   {/* Current Location */}
      <h1 className="md:text-4xl text-3xl font-bold ml-[284px] bottom-5 md:ml-96 relative md:bottom-6">
        {live?.current?.temperature_2m} {live?.current_units?.temperature_2m}  {/* Current Temperature */}
      </h1>
      <h1 className="md:-mt-3 md:ml-12 -mt-4 ml-8">  {/* Current date and time */}
          {live?.current?.time.substring(0, 10)}{" "}
          {live?.current?.time.substring(11, 16)}
        </h1>
      <div className="flex relative right-[0.8%] w-[100%] h-[100%] mt-8 md:flex-nowrap flex-wrap justify-center">
        {live?.daily?.time.map((temp, index) => {           // destructuring
          const sunsetTime = live?.daily?.sunset[index]?.substring(11, 16);  // sunset time
          const sunriseTime = live?.daily?.sunrise[index]?.substring(11, 16);  // sunrise time
          const maxTemp = live?.daily?.temperature_2m_max[index];  // max temperature
          const minTemp = live?.daily?.temperature_2m_min[index];  // min temperature
          const date = new Date(temp);  // converting data into day
          const dayOfWeek = date.getDay();
          const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          const dayName = daysOfWeek[dayOfWeek];  // getting day according to the date
          const unit = live?.daily_units?.temperature_2m_min;
          
          return (
            <div key={temp} className="border border-black ml-6 w-[240px] h-[290px] md:mt-12 mt-20 card text-black font-bold md:text-start text-center">
              <h1 key={temp} className="md:ml-12 ml-2">
                {dayName}
              </h1>   {/* displaying data on UI */}
              <h1 key={maxTemp} className="mt-8">Max Temperature: {maxTemp}{unit}</h1>
              <h1 key={minTemp} className="mt-8">Min Temperature: {minTemp}{unit}</h1>
              <h1 key={sunriseTime} className="mt-8 ml-1">Sunset: {sunsetTime}</h1>
              <h1 key={sunsetTime} className="mt-8 ml-1">Sunrise: {sunriseTime}</h1>
            </div>
          );
        })}
     
    </div>
    </>
  );
};

export default Display
  //  live?.daily?.temperature_2m_max.map((temp)


