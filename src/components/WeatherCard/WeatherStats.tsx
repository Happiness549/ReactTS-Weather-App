import React from 'react'
import {Card} from '../ui/Card'
import {Text} from '../ui/Text'
import { Wind } from 'lucide-react'
import { Droplets } from 'lucide-react'
import { Thermometer } from 'lucide-react'

export const WeatherStats = () => {
  return (
    <Card className='absolute bottom-4 w-95 left-1 h-25 bg-sky-200'>
        <div className='flex gap-18'>
            <Text variant={'span'}>Humidity<Droplets/></Text>
            <Text variant={'span'} className='flex'>Wind<Wind size={15}/></Text>
            <Text variant={'span'}>Temperature<Thermometer/></Text>
        </div>
        <div className='flex gap-18 '>
             <Text variant={'span'}>70%</Text>
             <Text variant={'span'}>12 km/h</Text>
             <Text variant={'span'}>1015 hpa</Text>
        </div>
      
    </Card>
  )
}
