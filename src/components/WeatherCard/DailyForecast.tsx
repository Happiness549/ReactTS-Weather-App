import React from 'react'
import { Text } from '../ui/Text'
import { Card } from '../ui/Card'
import type { DailyData } from '../../types/Weather'


export const DailyForecast = () => {

const dailyData: DailyData[] = [
  { day: "Today", date: "04 Aug", emoji: "☀️", condition: "Sunny", tempMax: 24, tempMin: 12 },
  { day: "Tuesday", date: "05 Aug", emoji: "🌧️", condition: "Showers", tempMax: 18, tempMin: 10 },
  { day: "Wednesday", date: "06 Aug", emoji: "⛅", condition: "Cloudy", tempMax: 21, tempMin: 11 },
  { day: "Thursday", date: "04 Aug", emoji: "☀️", condition: "Sunny", tempMax: 24, tempMin: 12 },
  { day: "Friday", date: "05 Aug", emoji: "🌧️", condition: "Showers", tempMax: 18, tempMin: 10 },
  { day: "Saturday", date: "06 Aug", emoji: "⛅", condition: "Cloudy", tempMax: 21, tempMin: 11 },
  { day: "Sunday", date: "06 Aug", emoji: "⛅", condition: "Cloudy", tempMax: 21, tempMin: 11 }

];



  
  return (
     <Card className='h-30 p-1 w-195 mb-2 bg-[#343A46]'>
        <div className='flex gap-10'>
            {dailyData.map((data)=>(
             <div>
                <Text variant={'p'} className='text-white'>{data.day}</Text>
                <Text variant={'p'} className='text-white'>{data.emoji}</Text>
                <Text variant={'p'} className='text-white'>{data.tempMax}</Text>   
                <Text variant={'p'} className='text-white'>{data.tempMin}</Text>                                                                    
             </div>
            ))}
        </div>
    </Card>
  )
}
