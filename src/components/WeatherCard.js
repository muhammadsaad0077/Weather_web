import React from "react";

const WeatherCard = ({ dayOfWeek, maxTemp, minTemp, sunsetTime, sunriseTime, unit }) => {
  return (
    <div className="max-w-xs bg-blue-600 hover:bg-blue-700 shadow-lg rounded-lg overflow-hidden m-4">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{dayOfWeek}</div>
        <p className="text-gray-100 text-base">Max Temperature: {maxTemp}{unit}</p>
        <p className="text-gray-100 text-base">Min Temperature: {minTemp}{unit}</p>
        <p className="text-gray-100 text-base">Sunset: {sunsetTime}</p>
        <p className="text-gray-100 text-base">Sunrise: {sunriseTime}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
