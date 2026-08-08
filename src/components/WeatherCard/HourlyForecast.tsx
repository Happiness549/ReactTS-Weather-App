import React from 'react'
import { Card } from "../ui/Card";
import { Text } from '../ui/Text';
import type {WeatherData} from '../../types/Weather'
import { WeatherIcons } from '../utils/weatherIcons';


export interface HourlyProps {
  weather: WeatherData
}

export const HourlyForecast: React.FC<HourlyProps> = ({weather}) => {


  return (
    <Card className='h-40 p-4 w-300 mb-2 bg-[#343A46] flex gap-15 pl-3 pr-3 '>

      {weather.days?.[0].hours.slice(0,12).map((hour) =>(
        <div key={hour.datetime} >
          <div className='gap'> 
              <Text variant={'p'} className='text-white'>
                {hour.datetime.slice(0,5)}
              </Text>
               <Text variant={'p'} className='text-white'>{WeatherIcons(hour.icon)}</Text>
                 <Text variant={'p'} className='text-white'>{hour.temp}{"\u00B0"}</Text> 
                                                                                   
          </div>
        </div>
      ))}
        
    </Card>
  )
}
