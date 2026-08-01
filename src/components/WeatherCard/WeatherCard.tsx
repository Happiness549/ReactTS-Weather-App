import React from 'react'
import {Card} from '../ui/Card'
import { Text } from '../ui/Text'


export const WeatherCard = () => {
  return (
    <Card className='bg-gradient-to-r from-sky-500 to-cyan-400 mt-5 w-150 h-100'>
            <Text variant={'h1'} className='text-base color-red'>Durban</Text>
            <Text variant={'p'}>Saturday, 17 May</Text>
            <Text variant={'p'}>14:30</Text>
            <Text variant={'h2'}>23 {"\u00B0"} c</Text>
        
  
        

    </Card>
  )
}
