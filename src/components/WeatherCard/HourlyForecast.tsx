import React from 'react'
import { Card } from "../ui/Card";
import { Text } from '../ui/Text';
import type {WeatherData} from '../../types/Weather'



export const HourlyForecast: React.FC = () => {

  const hourlyData: WeatherData[] = [
    { time: 'Now', emoji: '☀️', temperature: 23, unit: 'C' },
    { time: '06:00', emoji: '☁️', temperature: 23, unit: 'C' },
    { time: '07:00', emoji: '⛈️', temperature: 23, unit: 'C' },
    { time: '08:00', emoji: '🌧️', temperature: 23, unit: 'C' },
    { time: '09:00', emoji: '☀️', temperature: 23, unit: 'C' },
    { time: '10:00', emoji: '☁️', temperature: 23, unit: 'C' },
    { time: '11:00', emoji: '⛈️', temperature: 23, unit: 'C' },
    { time: '12:00', emoji: '🌧️', temperature: 23, unit: 'C' },
  ];

  return (
    <Card className='h-30 p-1 w-195 mb-2 bg-[#343A46] flex gap-15 pl-3 pr-3'>

      {hourlyData.map((data) =>(
        <div key={data.time} >
          <div className='gap'> 
              <Text variant={'p'} className='text-white'>{data.time}</Text>
               <Text variant={'p'} className='text-white'>{data.emoji}</Text>
                 <Text variant={'p'} className='text-white'>{data.temperature} {"\u00B0"} {data.unit}</Text> 
                                                                                   
          </div>
        </div>
      ))}
        
    </Card>
  )
}
