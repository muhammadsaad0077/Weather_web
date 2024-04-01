import React from "react";

const WeatherCard = ({ dayOfWeek, maxTemp, minTemp, sunsetTime, sunriseTime, unit }) => {
  return (
    <div className="max-w-xs hover:bg-gray-400  shadow-lg rounded-2xl overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-black ">{dayOfWeek}</div>
        <p className="text-base">Max Temperature: {maxTemp}{unit}</p>
        <p className="text-base">Min Temperature: {minTemp}{unit}</p>
        <p className="text-base">Sunset: {sunsetTime}</p>
        <p className="text-base">Sunrise: {sunriseTime}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
