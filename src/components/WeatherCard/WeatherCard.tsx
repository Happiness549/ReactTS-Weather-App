import React from 'react'
import {Card} from '../ui/Card'
import { Text } from '../ui/Text'
import { Sun } from 'lucide-react'
import { Button } from '../ui/Button'
import type { WeatherData } from '../../types/Weather'

 type WeatherProps ={
  weather: WeatherData | null;
}


export const WeatherCard:React.FC<WeatherProps> = ({weather}) => {
  if (!weather) return null

  return (
    <Card className='bg-[#343A46] to-cyan-400 w-100 h-100 -mt-4 mb-3'>
            <Text variant={'h1'} className='text-6xl text-white'>{weather.address}</Text> 
            <div className='flex gap-40 mt-2'>
              
              <Text variant={'p'} className='text-white'>{new Date(weather.datetime!).toLocaleDateString('en-US', { weekday: 'long' })}</Text>
              <Sun className="text-yellow-500 fill-yellow-200" size={62} 
      />
            </div>
            
            <Text variant={'p'} className='text-white'>{weather.time}</Text>
             <Text variant={'h2'} className='text-5xl text-white'>{weather.temp} {"\u00B0"}c</Text> 
    </Card>
  )
}
