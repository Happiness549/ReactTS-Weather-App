import React from 'react'
import {Card} from '../ui/Card'
import { Text } from '../ui/Text'
import { Sun } from 'lucide-react'
import { Button } from '../ui/Button'


export const WeatherCard = () => {
  return (
    <Card className='bg-[#343A46] to-cyan-400 w-100 h-100'>
            <Text variant={'h1'} className='text-6xl text-white'>Durban</Text>
            <div className='flex gap-40 mt-2'>
              <Text variant={'p'} className='text-white'>Saturday, 17 May</Text>
              <Sun className="text-yellow-500 fill-yellow-200" size={62} 
      />
            </div>
            
            <Text variant={'p'} className='text-white'>14:30</Text>
            <Text variant={'h2'} className='text-5xl text-white'>23 {"\u00B0"} c</Text>
    </Card>
  )
}
