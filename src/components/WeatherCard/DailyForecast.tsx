import React from 'react'
import { Text } from '../ui/Text'
import { Card } from '../ui/Card'
import type { WeatherData } from '../../types/Weather'

export interface DailyProps {
  weather: WeatherData
}




export const DailyForecast: React.FC<DailyProps> = ({ weather }) => {
  return (
    <Card className='h-40 p-4 w-195 mb-2 bg-[#343A46] overflow-x-auto  scrollbar-track-[#343A46] scrollbar-thumb-sky-300'>
      <div className='flex gap-10'>
        {weather.days?.map((day) => (
          <div key={day.datetime}>
            <Text variant='p' className='text-white'>{new Date(day.datetime!).toLocaleDateString('en-US', { weekday: 'long' })}</Text>
            <Text variant='p' className='text-white'>{day.icon}</Text>
            <Text variant='p' className='text-white'>{day.tempMax}</Text>
            <Text variant='p' className='text-white'> {day.tempMin}</Text>
          </div>
        ))}
      </div>
    </Card>
  )
}
