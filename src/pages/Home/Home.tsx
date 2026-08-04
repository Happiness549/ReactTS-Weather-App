import React from 'react'
import {Container} from '../../components/ui/Container'
import { Navbar } from '../../components/Navbar/Navbar'
import {SearchBar} from '../../components/SearchBar/SearchBar'
import { WeatherCard } from '../../components/WeatherCard/WeatherCard'
import { WeatherStats } from '../../components/WeatherCard/WeatherStats'
import {WeatherAlerts} from '../../components/WeatherCard/WeatherAlerts'
import { Settings } from '../../Settings/Settings'
import { HourlyForecast } from '../../components/WeatherCard/HourlyForecast'
import { SavedLocations } from '../../components/WeatherCard/SavedLocations'


export const Home = ({ weatherData }: { weatherData: any }) => {


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
        <HourlyForecast weatherData={weatherData}/>
        <SavedLocations/>
    </Container>
</div>


  )
}
