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
import {api} from '../../axios'
import axios from 'axios'


export const Home = () => {

    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError]= useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setLoading(true);
                //const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

                const response = await api.get(``);
                console.log('Weather data fetched:', response.data);
                setWeather(response.data);
                setError(null);
            } catch (err) {
                console.error('Fetch error:', err);
                if (axios.isAxiosError(err)) {
                    const apiMessage = err.response?.data || err.message;
                    setError(`API Error: ${apiMessage}`);
                } else {
                    setError('An unexpected error occurred.');
                }
            } finally {
                setLoading(false);
            }
        };
        fetchWeather();
    }, []);

      if (loading) return <p>Loading  weather...</p>;
  
  if (error) return (
    <div style={{ padding: '1rem', border: '1px solid red', borderRadius: '4px', color: 'red', backgroundColor: '#fff0f0' }}>
      <h4>Failed to Load Weather</h4>
      <p>{error}</p>
    </div>
  );


  return (
    <div className='flex self-center items-center h-screen mr-40%'>
    <Container>
        <Navbar />
        <SearchBar />

        <div className='flex flex-col md:flex-row gap-6 items-start mt-6 w-full'>
            <div className='relative w-full md:w-auto'>
                <WeatherCard />
                <WeatherStats />
            </div>  
            <div className='flex flex-col gap-6'>
                <WeatherAlerts />
                <Settings/>
            </div>

        </div>
         < ForecastTab/> 
        <SavedLocations/>
    </Container>
</div>


  )
}
