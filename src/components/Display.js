import React from "react";

const Display = ({ live }) => {
  /* const [info, setInfo] = useState("")
   
   live?.daily?.temperature_2m_min.map((minTemp)=>{
     return setInfo(minTemp)
   })
   console.log(info);*/
  console.log(live);

  return (
<>
<h1 className="text-4xl font-bold h-6 ml-12 mt-28">{live?.timezone}</h1>
      <h1 className="text-4xl font-bold ml-96 relative bottom-6">
        {live?.current?.temperature_2m} {live?.current_units?.temperature_2m}
      </h1>
      <h1 className="-mt-3 ml-12">
          {live?.current?.time.substring(0, 10)}{" "}
          {live?.current?.time.substring(11, 16)}
        </h1>
      <div className="flex relative right-[0.8%] w-[100%] h-[100%] mt-8">
        {live?.daily?.time.map((temp, index) => {
          const sunsetTime = live?.daily?.sunset[index]?.substring(11, 16);
          const sunriseTime = live?.daily?.sunrise[index]?.substring(11, 16);
          const maxTemp = live?.daily?.temperature_2m_max[index];
          const minTemp = live?.daily?.temperature_2m_min[index];
          const date = new Date(temp);
          const dayOfWeek = date.getDay();
          const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          const dayName = daysOfWeek[dayOfWeek];
          
          return (
            <div className="border border-black  ml-6 w-[240px] h-[290px] mt-20 card text-black font-bold">
              <h1 key={temp} className="ml-12">
                {dayName}
              </h1>
              <h1 className="mt-8 ml-1">Max Temperature: {maxTemp}</h1>
              <h1 className="mt-8 ml-1">Min Temperature: {minTemp}</h1>
              <h1 className="mt-8 ml-1">Sunset: {sunsetTime}</h1>
              <h1 className="mt-8 ml-1">Sunrise: {sunriseTime}</h1>
            </div>
          );
        })}
     
    </div>
    </>
  );
};

export default Display
  //  live?.daily?.temperature_2m_max.map((temp)


