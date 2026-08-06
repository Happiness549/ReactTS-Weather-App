import React from 'react'
import {Card} from '../ui/Card'
import {Text} from '../ui/Text'
import { Wind } from 'lucide-react'
import { Droplets } from 'lucide-react'
import { Thermometer } from 'lucide-react'

export const WeatherStats:React.FC = () => {
  return (
    <Card className='absolute bottom-4 w-95 left-1 h-25 bg-black-400'>
        <div className='flex gap-18'>
            <Text variant={'span'} className='text-white'><Droplets size={15}/></Text>
            <Text variant={'span'} className='flex text-white '><Wind size={15}/></Text>
            <Text variant={'span'} className='text-white'><Thermometer size={15}/></Text>
        </div>
        <div className='flex gap-18 '>
             <Text variant={'span'} className='text-white'>70%</Text>
             <Text variant={'span'} className='text-white'>12 km/h</Text>
             <Text variant={'span'} className='text-white'>1015 hpa</Text>
        </div>
      
    </Card>
  )
}
