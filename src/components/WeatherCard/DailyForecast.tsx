import React from 'react'
import { Text } from '../ui/Text'
import { Sun } from 'lucide-react'
import { Cloud } from 'lucide-react'
import { CloudRain } from 'lucide-react'
import { CloudLightning } from 'lucide-react'
import { Card } from '../ui/Card'


export const DailyForecast = () => {

const dailyData = [
    { day: 'Monday', emoji: '☀️', temperature: 23, unit: 'C' },
    { day: 'Tuesday', emoji: '☁️', temperature: 23, unit: 'C' },
    { day: 'Wednesday', emoji: '⛈️', temperature: 23, unit: 'C' },
    { day: 'Thursday', emoji: '🌧️', temperature: 23, unit: 'C' },
    { day: 'Friday', emoji: '🌧️', temperature: 23, unit: 'C' },
    { day: 'Saturday', emoji: '🌧️', temperature: 23, unit: 'C' },
    { day: 'Sunday', emoji: '🌧️', temperature: 23, unit: 'C' },
  ];

  return (
     <Card className='h-20 p-1 w-195 mb-2 bg-[#343A46]'>
        <div className='flex gap-10'>
            {dailyData.map((data)=>(
             <div>
                <Text variant={'p'} className='text-white'>{data.day}</Text>
                <Text variant={'p'} className='text-white'>{data.emoji}</Text>
                <Text variant={'p'} className='text-white'>{data.temperature} {"\u00B0"} {data.unit}</Text>                                                                     
             </div>
            ))}
        </div>
    </Card>
  )
}
