import React, {useState, useEffect} from 'react'
import {Container} from '../../components/ui/Container'
import { Navbar } from '../../components/Navbar/Navbar'
import {SearchBar} from '../../components/SearchBar/SearchBar'
import { WeatherCard } from '../../components/WeatherCard/WeatherCard'
import { WeatherStats } from '../../components/WeatherCard/WeatherStats'
import {WeatherAlerts} from '../../components/WeatherCard/WeatherAlerts'
import { Settings } from '../../Settings/Settings'
import { ForecastTab } from '../../components/WeatherCard/ForecastTab'
import { SavedLocations } from '../../components/WeatherCard/SavedLocations'
import type { WeatherData } from '../../types/Weather'



export const Home = () => {

    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError]= useState<string | null>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [city, setCity] = useState("johannesburg");

   const API_KEY = import.meta.env.VITE_API_KEY;

useEffect(() => {
  const fetchWeather = async () => {
    try {
      setLoading(true);

      const cleanCity = encodeURIComponent(city);

      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cleanCity}?unitGroup=metric&include=current&key=${API_KEY}&contentType=json`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();

      console.log(data);

      setWeather({
        address: data.address,
        humidity: data.currentConditions.humidity,
        windspeed: data.currentConditions.windspeed,
        temp: data.currentConditions.temp,
        feelslike: data.currentConditions.feelslike,
        datetime: data.days[0]["datetime"],
        timezone: data.days,
        conditions: data.currentConditions.conditions,
        icon: data.currentConditions.icon,
        
      });
      setError(null);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "An unknown error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  if (API_KEY) {
    fetchWeather();
  } else {
    setError("Missing API key");
  }
}, [city, API_KEY]);

if(loading){
    return <p>Loading weather....</p>
}
if(error){
    return <p>{error}</p>
}



//   useEffect(() => {
//         const fetchWeather = async () => {
//             try {
//                 setLoading(true);
//             const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

//                 const response = await api.get(apiKey);
//                 console.log('Weather data fetched:', response.data);
//                 setWeather(response.data);
//                 setError(null);
//             } catch (err) {
//                 console.error('Fetch error:', err);
//                 if (axios.isAxiosError(err)) {
//                     const apiMessage = err.response?.data || err.message;
//                     setError(`API Error: ${apiMessage}`);
//                 } else {
//                     setError('An unexpected error occurred.');
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchWeather();
//     }, []);

//       if (loading) return <p>Loading  weather...</p>;
  
//   if (error) return (
//     <div style={{ padding: '1rem', border: '1px solid red', borderRadius: '4px', color: 'red', backgroundColor: '#fff0f0' }}>
//       <h4>Failed to Load Weather</h4>
//       <p>{error}</p>
//     </div>
//   );



  return (
    <div className='flex self-center items-center h-screen mr-40%'>
      <Container>
        <Navbar />
        <SearchBar />

        <div className='flex flex-col md:flex-row gap-6 items-start mt-6 w-full'>
          <div className='relative w-full md:w-auto'>
            <WeatherCard weather={weather}/>
            <WeatherStats/>
          </div>
          <div className='flex flex-col gap-6'>
            <WeatherAlerts />
            <Settings />
          </div>
        </div>

        <ForecastTab />
        <SavedLocations />
      </Container>
    </div>
  );
};
