import React from 'react'
import { Text } from '../ui/Text'
import { Card } from '../ui/Card'
import type { WeatherData } from '../../types/Weather'
import { WeatherIcons } from '../utils/weatherIcons'

export interface DailyProps {
  weather: WeatherData
}




export const DailyForecast: React.FC<DailyProps> = ({ weather }) => {
  return (
    <Card className='h-40 p-4 w-300 mb-2 bg-[#343A46] '>
      <div className='flex gap-10'>
        {weather.days?.slice(0, 11).map((day) => (
          <div key={day.datetime} className='spce-y-6 p-4'>
            <Text variant='p' className='text-white text-lg'>{new Date(day.datetime!).toLocaleDateString('en-US', { weekday: 'short' })}</Text>
            <Text variant={'p'} className='text-white'>{WeatherIcons(day.icon ?? 'clear-day')}</Text>
            <Text variant='p' className='text-white'>{day.tempmax}{"\u00B0"}</Text>
            <Text variant='p' className='text-white'> {day.tempmin}{"\u00B0"}</Text>
          </div>
        ))}
      </div>
    </Card>
  )
}
