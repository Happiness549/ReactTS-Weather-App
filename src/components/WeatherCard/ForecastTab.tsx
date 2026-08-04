import React, { useState } from 'react'
import { HourlyForecast } from './HourlyForecast'
import { DailyForecast } from './DailyForecast'
import type { TabOption } from '../../types/Weather'
import { Button } from '../ui/Button'
import { Card } from '../ui/Card'



export const ForecastTab = () => {
  const [active, setActive] = useState<TabOption>('hourly');

  return (
    //  <Card className='h-30 p-1 w-195 mb-2 bg-[#343A46] flex gap-15 pl-3 pr-3'>
    <div className='flex gap-8 '>
        <button 
         onClick={() => setActive('hourly')}
          className={` font-semibold cursor-pointer pb-2 transition-colors ${
            active === 'hourly'
              ? 'border-b-2 border-cyan-400 text-cyan-200'
              : 'text-gray-400'
        }`}
        
        >
            Hourly
            </button>

          <button 
         onClick={() => setActive('daily')}
          className={` font-semibold cursor-pointer pb-2 transition-colors ${
            active === 'daily'
              ? 'border-b-2 border-cyan-400 text-cyan-200'
              : 'text-gray-400'
        }`}
        
        
        >
            Daily
        </button>
         <div>
        {active === 'hourly' ? <HourlyForecast/> : <DailyForecast/>}
      </div>


    </div>

    //  </Card>
  )
}
