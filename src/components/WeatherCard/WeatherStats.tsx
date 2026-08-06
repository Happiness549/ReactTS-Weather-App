import React from 'react'
import {Card} from '../ui/Card'
import {Text} from '../ui/Text'
import { Wind } from 'lucide-react'
import { Droplets } from 'lucide-react'
import { Thermometer } from 'lucide-react'
import type { WeatherData } from '../../types/Weather'

interface StatsProps{
  weather: WeatherData;
}

export const WeatherStats:React.FC<StatsProps> = ({weather}) => {
  return (
    <Card className='absolute bottom-4 w-95 left-1 h-25 bg-black-400'>
     
        <div className='flex gap-18 -mt-6'>
             <Text variant={'span'} className='text-white'>Humidity <br />{weather.humidity}</Text>
             <Text variant={'span'} className='text-white'>Wind <br />{weather.windspeed}</Text>
             <Text variant={'span'} className='text-white'>Temp <br />{weather.temp}</Text>
        </div>

           <div className='flex gap-30 mt-3'>
            <Text variant={'span'} className='text-white'><Droplets size={15}/></Text>
            <Text variant={'span'} className='flex text-white '><Wind size={15}/></Text>
            <Text variant={'span'} className='text-white'><Thermometer size={15}/></Text>
        </div>
      
    </Card>
  )
}
