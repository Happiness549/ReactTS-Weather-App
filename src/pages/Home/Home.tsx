import React, {useState} from 'react'
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
