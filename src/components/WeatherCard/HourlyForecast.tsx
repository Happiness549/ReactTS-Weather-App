import React from 'react'
import { Card } from "../ui/Card";
import { Text } from '../ui/Text';
import { Sun } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { CloudRain } from 'lucide-react';
import { CloudLightning } from 'lucide-react';

export const HourlyForecast = () => {
  return (
    <Card className='mt-5'>
        <div className='flex gap-10'>
            <Text variant={'p'}>Now</Text>
            <Text variant={'p'}>06:00</Text>
            <Text variant={'p'}>07:00</Text>
            <Text variant={'p'}>08:00</Text>
            <Text variant={'p'}>09:00</Text>
            <Text variant={'p'}>10:00</Text>
            <Text variant={'p'}>11:00</Text>
            <Text variant={'p'}>12:00</Text>
            <Text variant={'p'}>13:00</Text>
            <Text variant={'p'}>14:00</Text>
            <Text variant={'p'}>15:00</Text>
            <Text variant={'p'}>16:00</Text>
            <Text variant={'p'}>17:00</Text>
            <Text variant={'p'}>18:00</Text>
            <Text variant={'p'}>19:00</Text>
            <Text variant={'p'}>20:00</Text>
            <Text variant={'p'}>21:00</Text>
            <Text variant={'p'}>22:00</Text>
            <Text variant={'p'}>23:00</Text>  
        </div>
        <div className='flex gap-13 mt-5'>
            <Text variant={'p'}><Sun/></Text>
            <Text variant={'p'}><Cloud/></Text>
            <Text variant={'p'}><CloudLightning/></Text>
            <Text variant={'p'}><CloudRain/></Text>
            <Text variant={'p'}><Sun/></Text>
            <Text variant={'p'}><Sun/></Text>
            <Text variant={'p'}><Cloud/></Text>
            <Text variant={'p'}><Cloud/></Text>
            <Text variant={'p'}><CloudLightning/></Text>
            <Text variant={'p'}><CloudLightning/></Text>
            <Text variant={'p'}><CloudRain/></Text>
            <Text variant={'p'}><CloudRain/></Text>
            <Text variant={'p'}><Sun/></Text>
            <Text variant={'p'}><Cloud/></Text>
            <Text variant={'p'}><CloudLightning/></Text>
            <Text variant={'p'}><CloudRain/></Text>
            <Text variant={'p'}><Sun/></Text>
            <Text variant={'p'}><Sun/></Text>
            <Text variant={'p'}><Cloud/></Text>
        </div>
        <div className='flex gap-8 mt-5'>
            <Text variant={'p'}></Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>
            <Text variant={'p'}>23 {"\u00B0"} c</Text>  
        </div>
    </Card>
  )
}
