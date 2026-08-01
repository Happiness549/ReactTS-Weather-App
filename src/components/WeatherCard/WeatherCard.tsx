import React from 'react'
import {Card} from '../ui/Card'
import { Text } from '../ui/Text'
import { Thermometer } from 'lucide-react'

export const WeatherCard = () => {
  return (
    <Card className='bg-gradient-to-r from-sky-500 to-cyan-400'>
            <Text variant={'h1'}>Durban</Text>
            <Text variant={'p'}>Saturday, 17 May</Text>
            <Text variant={'p'}>14:30</Text>
            <Text variant={'h2'}>23 <Thermometer /></Text>
        
  
        

    </Card>
  )
}
