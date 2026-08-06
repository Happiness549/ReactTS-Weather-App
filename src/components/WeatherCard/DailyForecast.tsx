import React from 'react'
import { Text } from '../ui/Text'
import { Card } from '../ui/Card'
import type { DailyHourlyData } from '../../types/Weather'

interface DailyProps {
  days: DailyHourlyData[]
}

export const DailyForecast: React.FC<DailyProps> = ({ days }) => {
  return (
    <Card className='h-30 p-1 w-195 mb-2 bg-[#343A46]'>
      <div className='flex gap-10'>
        {days.map((day) => (
          <div key={`${day.day}-${day.date}`}>
            <Text variant='p' className='text-white'>
              {day.day}
            </Text>
            <Text variant='p' className='text-white'>
              {day.emoji}
            </Text>
            <Text variant='p' className='text-white'>
              {day.tempMax}
            </Text>
            <Text variant='p' className='text-white'>
              {day.tempMin}
            </Text>
          </div>
        ))}
      </div>
    </Card>
  )
}
