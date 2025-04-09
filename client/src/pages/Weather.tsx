import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Weather() {
  const { city } = useParams();
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=66fd4cada528594ccbad41967fb2d3ed`
        );        
        setWeather(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWeather();
  }, [city]);

  return (
    <div className="p-8">
      <h2 className="text-3xl font-semibold mb-4">Weather in {city}</h2>
      {weather ? (
        <div className="bg-white shadow p-4 rounded">
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Condition: {weather.weather[0].description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

