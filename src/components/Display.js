import React from "react";

const Display = ({ live }) => {
  return (
    <>
      {/* Displaying the timezone */}
      <h1 className="text-4xl font-bold ml-8 md:ml-12 mt-16 md:mt-20">{live?.timezone}</h1>

      {/* Displaying current temperature */}
      <h1 className="md:text-4xl text-3xl font-bold ml-[284px] bottom-5 md:ml-96 relative md:bottom-6">
        {live?.current?.temperature_2m} {live?.current_units?.temperature_2m}
      </h1>

      {/* Displaying current date and time */}
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
            <div key={temp} className="max-w-xs hover:bg-blue-700 bg-blue-600 shadow-lg rounded-lg overflow-hidden m-4">
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-white">{dayOfWeek}</div>
                <p className="text-white text-base">Max Temperature: {maxTemp}{unit}</p>
                <p className="text-white text-base">Min Temperature: {minTemp}{unit}</p>
                <p className="text-white text-base">Sunset: {sunsetTime}</p>
                <p className="text-white text-base">Sunrise: {sunriseTime}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Display;
