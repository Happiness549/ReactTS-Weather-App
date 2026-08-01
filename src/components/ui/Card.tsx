import React, { type ReactNode } from 'react'
import { Text } from '../Text/Text'


export const Card:React.FC = () => {
  return (
    <div className='rounded=3xl bg-white p-6 shadow-lg'>
        <Text variant={'p'} className='mt-2 text-slate-500 font-bold text-slate-800'>Welcome to my beautiful App</Text>
        

    </div>
  )
}
