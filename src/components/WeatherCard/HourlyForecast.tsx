import React from 'react'
import { Card } from "../ui/Card";
import { Text } from '../ui/Text';
import type {WeatherData} from '../../types/Weather'


export interface HourlyProps {
  weather: WeatherData
}

export const HourlyForecast: React.FC<HourlyProps> = ({weather}) => {


  return (
    <Card className='h-30 p-1 w-195 mb-2 bg-[#343A46] flex gap-15 pl-3 pr-3'>

      {weather.days?.[0].hours.map((hour) =>(
        <div key={hour.datetime} >
          <div className='gap'> 
              <Text variant={'p'} className='text-white'>
                {new Date(`1970-01-01T${hour.datetime}`).toLocaleTimeString("en-US", { hour: "numeric", hour12: true })}
              </Text>
               {/* <Text variant={'p'} className='text-white'>{hour.icon}</Text> */}
                 <Text variant={'p'} className='text-white'>{hour.temp}{"\u00B0"}</Text> 
                                                                                   
          </div>
        </div>
      ))}
        
    </Card>
  )
}
