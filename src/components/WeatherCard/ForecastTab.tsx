import React, { useState } from 'react'
import { HourlyForecast } from './HourlyForecast'
import { DailyForecast } from './DailyForecast'
import type { TabOption, WeatherData } from '../../types/Weather'

export interface DailyProps {
  weather: WeatherData
}

export const ForecastTab:React.FC<DailyProps> = ({weather}) => {
  
    const [active, setActive] = useState<TabOption>('hourly');

  return (
    //  <Card className='h-30 p-1 w-195 mb-2 bg-[#343A46] flex gap-15 pl-3 pr-3'>
    <div className='flex gap-8 '>
        <button 
         onClick={() => setActive('hourly')}
          className={` font-semibold cursor-pointer  transition-colors ${
            active === 'hourly'
              ? 'border-b-2 border-cyan-400  mt-2  text-blue-300'
              : 'text-gray-400'
        }`}
        
        >
            Hourly
            </button>

          <button 
         onClick={() => setActive('daily')}
          className={` font-semibold cursor-pointer transition-colors ${
            active === 'daily'
              ? 'border-b-2 border-cyan-400 mt-2  text-blue-300'
              : 'text-gray-400'
        }`}
        
        
        >
            Daily
        </button>
         <div className='mr-100%'>
        {active === 'hourly' ? <HourlyForecast weather={weather}/> : <DailyForecast  weather={weather}/>}
      </div>


    </div>

    //  </Card>
  )
}
