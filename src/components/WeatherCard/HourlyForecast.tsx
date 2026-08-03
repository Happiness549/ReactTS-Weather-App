import React from 'react'
import { Card } from "../ui/Card";
import { Text } from '../ui/Text';
import { Sun } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { CloudRain } from 'lucide-react';
import { CloudLightning } from 'lucide-react';

export const HourlyForecast = () => {
  return (
    <Card className='h-20 p-1 w-195 mb-2 bg-[#343A46]'>
        <div className='flex gap-10'>
            <Text variant={'p'} className='text-white'>Now</Text>
            <Text variant={'p'} className='text-white'>06:00</Text>
            <Text variant={'p'} className='text-white'>07:00</Text>
            <Text variant={'p'} className='text-white'>08:00</Text>
            <Text variant={'p'} className='text-white'>09:00</Text>
            <Text variant={'p'} className='text-white'>10:00</Text>
            <Text variant={'p'} className='text-white'>11:00</Text>
            <Text variant={'p'} className='text-white'>12:00</Text>
            <Text variant={'p'} className='text-white'>13:00</Text>
            <Text variant={'p'} className='text-white'>14:00</Text>
           
        </div>
        <div className='flex gap-13 mt-1'>
            <Text variant={'p'}><Sun className="text-yellow-500 fill-yellow-200"/></Text>
            <Text variant={'p'}><Cloud  className="text-white fill-white"/></Text>
            <Text variant={'p'}><CloudLightning className='text-white fill-white'/></Text>
            <Text variant={'p'}><CloudRain className='text-white fill-white'/></Text>
            <Text variant={'p'}><Sun className="text-yellow-500 fill-yellow-200"/></Text>
            <Text variant={'p'}><Sun className="text-yellow-500 fill-yellow-200"/></Text>
            <Text variant={'p'}><Cloud className='text-white fill-white'/></Text>
            <Text variant={'p'}><Cloud className='text-white fill-white'/></Text>
            <Text variant={'p'}><CloudLightning className='text-white fill-white'/></Text>
            <Text variant={'p'}><CloudLightning className='text-white fill-white'/></Text>
        </div>
        <div className='flex gap-5 mt-1'>
            <Text variant={'p'} className='text-white ml-1'>23 {"\u00B0"} c</Text>
            <Text variant={'p'} className='text-white ml-1'>23 {"\u00B0"} c</Text>
            <Text variant={'p'} className='text-white ml-2'>23 {"\u00B0"} c</Text>
            <Text variant={'p'} className='text-white ml-3'>23 {"\u00B0"} c</Text>
            <Text variant={'p'} className='text-white ml-'>23 {"\u00B0"} c</Text>
            <Text variant={'p'} className='text-white ml-'>23 {"\u00B0"} c</Text>
            <Text variant={'p'} className='text-white ml-'>23 {"\u00B0"} c</Text>
            <Text variant={'p'} className='text-white ml-1'>23 {"\u00B0"} c</Text>
            <Text variant={'p'} className='text-white ml-1'>23 {"\u00B0"} c</Text>
              <Text variant={'p'} className='text-white ml-'>23 {"\u00B0"} c</Text>
        </div>
    </Card>
  )
}
