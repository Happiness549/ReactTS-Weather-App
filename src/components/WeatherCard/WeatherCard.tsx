import React from 'react'
import {Card} from '../ui/Card'
import { Text } from '../ui/Text'
import { Sun } from 'lucide-react'
import { Button } from '../ui/Button'


export const WeatherCard = () => {
  return (
    <Card className='bg-gradient-to-r from-sky-500 to-cyan-400 w-100 h-100'>
        <Button text={'Current Weather'}/>
            <Text variant={'h1'} className='text-base color-red'>Durban</Text>
            <Text variant={'p'}>Saturday, 17 May</Text>
            <Sun/>
            <Text variant={'p'}>14:30</Text>
            <Text variant={'h2'}>23 {"\u00B0"} c</Text>
    </Card>
  )
}
