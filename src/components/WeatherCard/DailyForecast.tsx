import React from 'react'
import { Text } from '../ui/Text'
import { Card } from '../ui/Card'
import type { WeatherData } from '../../types/Weather'

export interface DailyProps {
  weather: WeatherData
}




export const DailyForecast: React.FC<DailyProps> = ({ weather }) => {
  return (
    <Card className='h-30 p-1 w-195 mb-2 bg-[#343A46]'>
      <div className='flex gap-10'>
        {weather.days?.map((day) => (
          <div key={day.datetime}>
            <Text variant='p' className='text-white'>{day.datetime} </Text>
            <Text variant='p' className='text-white'>{day.icon}</Text>
            <Text variant='p' className='text-white'>{day.tempMax}{"\u00B0"}c</Text>
            <Text variant='p' className='text-white'> {day.tempMin}{"\u00B0"}c</Text>
          </div>
        ))}
      </div>
    </Card>
  )
}
